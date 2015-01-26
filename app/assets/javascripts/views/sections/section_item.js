Whiteboard.Views.SectionItem = Mn.ItemView.extend({
  tagName: 'tr',
  className: 'section-item',

  triggers: {
    'click': 'fire'
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
