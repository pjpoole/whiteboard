Whiteboard.Collections.SectionsEnrolled = Backbone.Collection.extend({
  url: function () {
    return '/api/users/' + this.user_id + '/enrollments';
  },

  model: Whiteboard.Models.Section,

  initialize: function () {
    this.listenTo(Whiteboard.eventChannel, 'signIn', this.setUserId);
  },

  setUserId: function () {
    this.user_id = Whiteboard.currentUser.id;
  },

  enroll: function (section) {
    var model = new this.model;

    model.save({ section_id: section.get('id') }, {
      success: function (model) {
        this.add(model);
        Whiteboard.currentUser.trigger('enrolled:' + model.section_id);
      },
      error: function (model, resp) {
        console.log(resp);
      }
    })
  }
});
