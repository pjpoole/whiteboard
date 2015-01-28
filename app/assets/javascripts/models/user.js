Whiteboard.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users'
});

Whiteboard.Models.CurrentUser = Whiteboard.Models.User.extend({
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
  },

  isSignedIn: function () {
    return !this.isNew();
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
        options.success && options.success();
      },
      error: function () {
        options.error && options.error();
      }
    });
  },

  signOut: function (options) {
    var model = this;

    // TODO: Why can't this be a Backbone method?
    $.ajax({
      url: this.url,
      type: 'DELETE',
      dataType: 'json',
      success: function (data) {
        model.clear();
        options.success && options.success();
      }
    })
  },

  fireSessionEvent: function () {
    if (this.isSignedIn()) Whiteboard.eventChannel.trigger('signIn');
    else Whiteboard.eventChannel.trigger('signOut');
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
  }
});
