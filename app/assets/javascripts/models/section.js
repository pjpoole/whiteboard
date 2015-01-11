Whiteboard.Models.Sections = Backbone.Model.extend({
  url: function () {
    if (this.collection.instructs) {
      return '/api/sections/' + this.user_id;
    } else {
      return '/api/enrollments/' + this.user_id;
    }
  }
});
