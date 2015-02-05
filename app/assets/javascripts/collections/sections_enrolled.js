Whiteboard.Collections.SectionsEnrolled = Backbone.Collection.extend({
  url: function () {
    return '/api/users/' + this.user_id + '/enrollments';
  },

  model: Whiteboard.Models.Section,

  initialize: function () {
    this.listenTo(eventChannel, 'signIn', this.setUserId);
    eventChannel.comply('enrollment:requested', this.enroll, this);
    sessionChannel.reply('sections:enrolled', this.tellSections, this);
  },

  setUserId: function () {
    this.user_id = Whiteboard.currentUser.id;
  },

  tellSections: function () {
    return this;
  },

  enroll: function (options) {
    var data, model, that = this;

    data = {
      section_id: options.section.id
    }

    $.ajax({
      url: that.url(),
      type: 'POST',
      data: data,
      success: function (resp) {
        model = that.add(resp);
        eventChannel.command('enrolled:' + model.id);
      },
      error: function (resp) {
        console.log(resp);
      }
    });
  }
});
