Whiteboard.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  initialize: function (options) {
    options || (options = {});

    if (options.vent) this._vent = options.vent;
  },

  comments: function () {
    if (!this._comments) {
      this._comments = new Whiteboard.Collections.Comments(null, {
        post: this
      });
    }
    return this._comments;
  },

  section: function () {
    if (!this.collection) {
      this.collection = eventChannel.request(
        'user:section', this.get('section_id')
      ).posts();
    }

    return this.collection.section;
  },

  vent: function () {
    var event_id = this.get('event_id');

    if (event_id && !this._vent) {
      this._vent = this.section().vents().getOrFetch(event_id);
    } else {
      this._vent = undefined;
    }

    return this._vent;
  },

  parse: function (resp) {
    if (resp.comments) {
      this.comments().set(resp.comments, { parse: true })
      delete resp.comments
    }

    return resp;
  }
});
