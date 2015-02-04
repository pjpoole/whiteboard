Whiteboard.Models.Section = Backbone.Model.extend({
  urlRoot: '/api/sections',

  instructor: function () {
    if (!this._instructor) {
      this._instructor = new Whiteboard.Models.User();
    }
    return this._instructor;
  },

  vents: function () {
    if (!this._vents) {
      this._vents = new Whiteboard.Collections.Events({}, {
        section: this
      });
    }
    return this._vents;
  },

  posts: function () {
    if (!this._posts) {
      this._posts = new Whiteboard.Collections.Posts(null, {
        section: this
      });
    }

    return this._posts;
  },

  parse: function (resp) {
    if (resp.instructor) {
      this.instructor().set(resp.instructor, { parse: true });
      delete resp.instructor;
    }

    if (resp.events) {
      this.vents().set(resp.events, { parse: true });
      delete resp.events;
    }

    if (resp.posts) {
      this.posts().set(resp.posts, { parse: true });
      delete resp.posts;
    }

    return resp;
  }
});
