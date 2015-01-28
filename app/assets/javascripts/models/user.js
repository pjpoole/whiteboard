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
    }, this)
  },

  isSignedIn: function () {
    return !this.isNew();
  },

  newUser: function (options) {
    options.model.save({}, {
      success: function (model) {
        this.set(model);
      }.bind(this)
    });
  },

  signIn: function (options) {

    var model = this;

    $.ajax({
      url: model.url,
      type: 'POST',
      data: options.data,
      dataType: 'json',
      success: function (data) {
        model.parse(data);
        model.set(data);
        options.defer && options.defer.resolve();
      },
      error: function () {
        options.error && options.error();
      }
    });
  },

  signOut: function () {
    var model = this;

    // TODO: Why can't this be a Backbone method?
    $.ajax({
      url: this.url,
      type: 'DELETE',
      dataType: 'json',
      success: function (data) {
        model.clear();
      }
    })
  },

  fireSessionEvent: function () {
    if (this.isSignedIn()) eventChannel.trigger('signIn');
    else eventChannel.trigger('signOut');
  },


  memberOf: function (section) {
    if (!section) return;
    if (this.sections().get(section.id)) return true;
    if (this.sectionsInstructed().get(section.id)) return true;
    return false;
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
