Whiteboard.Views.SectionItem = Mn.ItemView.extend({
  tagName: 'tr',
  className: 'section-item',

  triggers: {
    'click button': 'request:enrollment'
  },

  onRequestEnrollment: function (args) {
    var view = args.view;

    eventChannel.complyOnce('enrolled:' + this.model.id, this.render, this);
    eventChannel.command('enrollment:requested', {
      section: args.model
    });

    view.$('button').prop('disabled', true);
    view.$('button').text('Enrolling...');
  },

  getTemplate: function () {
    if (this.options.showEnrollment) {
      return JST['sections/item_enr'];
    } else {
      return JST['sections/item'];
    }
  },

  templateHelpers: function () {
    var button, model = this.model;

    if (sessionChannel.request('user:teaches', model.id)) {
      button = "Teaching";
    } else if (sessionChannel.request('user:member', model.id)) {
      button = "Enrolled";
    } else {
      var template = _.template('<button type="button" class="btn btn-xs btn-primary">Enroll!</button>');
      button = template();
    }

    return {
      enrollmentButton: button,
      sectionTitle: model.escape('title'),
      sectionDescription: model.escape('description')
    }
  }
});
