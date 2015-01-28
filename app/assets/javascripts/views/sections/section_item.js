var eventChannel = Backbone.Radio.channel('event');

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

  templateHelpers: {
    enrollmentButton: function () {
      var cu = Whiteboard.currentUser;
      var button = _.template('<div class="button-container"><a href="<%= link %>"><%= text %></a></div>');
      // debugger
      if (cu.sections().findWhere({ id: this.id })) {
        return "Enrolled";
      } else if (cu.sectionsInstructed().findWhere({ id: this.id })) {
        return "Teaching";
      } else {
        // debugger
        return button({
          link: "#",
          text: "Enroll!"
        });
      }
    }
  }
});
