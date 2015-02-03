Whiteboard.Models.Event = Backbone.Model.extend({
  urlRoot: '/api/events',

  posts: function () {
    if (!this._posts) {
      this._posts = new Whiteboard.Collections.Posts({}, {
        vent: this,
        section: this.section
      });
    }

    return this._posts;
  },

  section: function () {
    if (!this._section) {
      this._section = eventChannel.request(
        'user:section', this.get('section_id')
      );
    }

    return this._section;
  },

  parse: function (resp, options) {
    if (resp.posts) {
      this.posts().set(resp.posts, { parse: true });
      delete resp.posts
    } else if (options.posts) {
      this.posts().set(options.posts, { parse: true });
    }

    return resp;
  }
});
