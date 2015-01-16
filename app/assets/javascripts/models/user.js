Whiteboard.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  memberOf: function (section) {
    if (!section) return;
    if (this.sections().get(section.id)) return true;
    if (this.sectionsInstructed().get(section.id)) return true;
    return false;
  }
});

Whiteboard.Models.CurrentUser = Whiteboard.Models.User.extend({
  url: '/api/session',

  parse: function (resp) {
    if (resp.sections) {
      this.sections().set(resp.sections, { parse: true });
      delete resp.sections;
    }

    if (resp.sectionsInstructed) {
      this.sectionsInstructed().set(
        resp.sectionsInstructed, { parse: true }
      );
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

    var credentials = {
      'user[email]': options.email,
      'user[password]': options.password
    };

    $.ajax({
      url: this.url,
      type: 'POST',
      data: credentials,
      dataType: 'json',
      async: false,
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
    if (this.isSignedIn()) this.trigger('signIn');
    else this.trigger('signOut');
  },

  sections: function () {
    if (!this._sections) {
      this._sections = new Whiteboard.Collections.Sections();
    }
    return this._sections;
  },

  sectionsInstructed: function () {
    if (!this._sectionsInstructed) {
      this._sectionsInstructed = new Whiteboard.Collections.Sections();
    }
    return this._sectionsInstructed;
  }
});
