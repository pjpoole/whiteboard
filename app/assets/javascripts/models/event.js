Whiteboard.Models.Event = Backbone.Model.extend({
  urlRoot: '/api/events',

  posts: function () {
    if (!this._posts) {
      this._posts = new Whiteboard.Collections.Posts(null, {
        vent: this,
        section: this.section()
      });
    }

    return this._posts;
  },

  section: function () {
    if (!this.collection) {
      var section = eventChannel.request(
        'user:section', this.get('section_id')
      );
      this.collection = section.vents();
    }

    return this.collection.section;
  },

  parse: function (resp, options) {
    // TODO: Figure out a way to set this without this hack.
    this.set('section_id', resp.section_id);
    if (resp.posts) {
      this.posts().set(resp.posts, { parse: true });
      delete resp.posts
    } else if (options.posts) {
      this.posts().set(options.posts, { parse: true });
    }

    return resp;
  }
});
