Whiteboard.Models.Section = Backbone.Model.extend({
  urlRoot: '/api/sections',

  instructor: function () {
    if (!this._instructor) {
      this._instructor = new Whiteboard.Models.User();
    }
    return this._instructor;
  },

  eevents: function () {
    if (!this._eevents) {
      this._eevents = new Whiteboard.Collections.Events();
    }
    return this._eevents;
  },

  parse: function (resp) {
    if (resp.instructor) {
      this.instructor().set(resp.instructor, { parse: true });
      delete resp.instructor;
    }

    if (resp.events) {
      this.eevents().set(resp.events, { parse: true });
      delete resp.events;
    }

    return resp;
  }
});
