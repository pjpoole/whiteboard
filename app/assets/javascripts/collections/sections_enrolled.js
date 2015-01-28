Whiteboard.Collections.SectionsEnrolled = Backbone.Collection.extend({
  url: function () {
    return '/api/users/' + this.user_id + '/enrollments';
  },

  model: Whiteboard.Models.Section,

  initialize: function () {
    this.listenTo(eventChannel, 'signIn', this.setUserId);
    eventChannel.comply('enrollment:requested', this.enroll, this);
    eventChannel.reply('sections:enrolled', this.tellSections, this);
  },

  setUserId: function () {
    this.user_id = Whiteboard.currentUser.id;
  },

  tellSections: function () {
    return this;
  },

  enroll: function (options) {
    var that = this,
        model = new this.model({}, { collection: this });

    model.save({ section_id: options.section.get('id') }, {
      success: function (model) {
        that.add(model);
        eventChannel.command('enrolled:' + model.id);
      },
      error: function (model, resp) {
        console.log(resp);
      }
    })
  }
});
