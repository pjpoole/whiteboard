Whiteboard.Views.SectionItem = Mn.ItemView.extend({
  tagName: 'tr',
  className: 'section-item',

  triggers: {
    'click .button-container': 'request:enrollment'
  },

  onRequestEnrollment: function (args) {
    var view = args.view;

    eventChannel.complyOnce('enrolled:' + this.model.id, this.render, this);
    eventChannel.command('enrollment:requested', {
      section: args.model
    });

    view.$('.button-container a').prop('disabled', true);
    view.$('.button-container a').text('Enrolling...');
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

    if (eventChannel.request('user:teaches', model.id)) {
      button = "Teaching";
    } else if (eventChannel.request('user:member', model.id)) {
      button = "Enrolled";
    } else {
      var template = _.template('<div class="button-container"><a href="<%= link %>"><%= text %></a></div>');
      button = template({ link: '#', text: 'Enroll!' });
    }

    return {
      enrollmentButton: button,
      sectionTitle: model.escape('title'),
      sectionDescription: model.escape('description')
    }
  }
});
