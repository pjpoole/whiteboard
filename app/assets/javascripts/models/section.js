Whiteboard.Models.Section = Backbone.Model.extend({
  urlRoot: '/api/sections',

  instructor: function () {
    if (!this._instructor) {
      this._instructor = new Whiteboard.Models.User();
    }
    return this._instructor;
  },

  eventz: function () {
    if (!this._eventz) {
      this._eventz = new Whiteboard.Collections.Events();
    }
    return this._eventz;
  },

  parse: function (resp) {
    if (resp.instructor) {
      this.instructor().set(resp.instructor, { parse: true });
      delete resp.instructor;
    }

    if (resp.events) {
      this.eventz().set(resp.events, { parse: true });
      delete resp.events;
    }

    return resp;
  }
});
