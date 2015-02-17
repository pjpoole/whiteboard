Whiteboard.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users'
});

Whiteboard.Models.CurrentUser = Backbone.Model.extend({
  url: '/api/session',

  parse: function (resp) {
    if (resp.sections) {
      this.sections().set(resp.sections, {
        user_id: resp.id, parse: true
      });
      delete resp.sections;
    }

    if (resp.sectionsInstructed) {
      this.sectionsInstructed().set(
        resp.sectionsInstructed, {
          user_id: resp.id, parse: true
      });
      delete resp.sectionsInstructed;
    }

    return resp;
  },

  initialize: function (options) {
    this.listenTo(this, 'change', this.fireSessionEvent);
    eventChannel.comply({
      'signOut:requested': this.signOut,
      'user:new:requested': this.newUser,
      'signin:requested': this.signIn,
      'add:sectionInstructed': this.addSectionInstructed
    }, this);

    sessionChannel.reply({
      'user:getId': this.userId,
      'user:member': this.memberOf,
      'user:teaches': this.teaches,
      'user:isSignedIn': this.isSignedIn,
      'user:section': this.getSection
    }, this);
  },

  isSignedIn: function () {
    return !this.isNew();
  },

  userId: function () {
    if (!this.isNew()) return this.id;
  },

  newUser: function (options) {
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: options.data,
      dataType: 'json',
      success: function (model) {
        this.set(model);
      }.bind(this)
    });
  },

  signIn: function (options) {

    var model = this;

    $.ajax({
      url: model.url + '/sign_in',
      type: 'POST',
      data: options.data,
      dataType: 'json',
      success: function () {
        console.log(model)
        model.fetch({
          success: function (data, resp) {
            model.parse(resp);
            model.set(resp);
            options.defer && options.defer.resolve();
          },
          error: function () {
            options.error && options.error();
          }
        });
      }
    });
  },

  signOut: function () {
    var model = this;

    // TODO: Why can't this be a Backbone method?
    $.ajax({
      url: this.url + '/sign_out',
      type: 'DELETE',
      dataType: 'json',
      success: function (data) {
        model.sections().reset();
        model.sectionsInstructed().reset();
        model.clear();
      }
    })
  },

  fireSessionEvent: function () {
    if (this.isSignedIn()) eventChannel.trigger('signIn');
    else eventChannel.trigger('signOut');
  },


  memberOf: function (section_id) {
    if (!section_id) return;
    if (this.sections().get(section_id)) return true;
    if (this.teaches(section_id)) return true;
    return false;
  },

  getSection: function (section_id) {
    if (!section_id) return;

    return this.sections().get(section_id) ||
           this.sectionsInstructed().get(section_id);
  },

  teaches: function (section_id) {
    if (this.sectionsInstructed().get(section_id)) return true;
  },

  sections: function () {
    if (!this._sections) {
      this._sections = new Whiteboard.Collections.SectionsEnrolled();
    }
    return this._sections;
  },

  sectionsInstructed: function () {
    // don't bother setting options here, because the user doesn't have an id yet.
    if (!this._sectionsInstructed) {
      this._sectionsInstructed = new Whiteboard.Collections.SectionsInstructed();
    }
    return this._sectionsInstructed;
  },

  addSectionInstructed: function (model) {
    this.sectionsInstructed().add(model);
  }
});
