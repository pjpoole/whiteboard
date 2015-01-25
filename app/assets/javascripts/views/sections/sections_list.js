Whiteboard.Views.SectionsList = Mn.CompositeView.extend({
  tagName: 'table',
  className: 'section-list',
  childView: Whiteboard.Views.SectionItem,
  childViewContainer: '#sections-body',

  template: JST['sections/list'],

  templateHelpers: function () {
    return {
      heading: this.options.heading
    };
  },

  initialize: function (options) {
    this.options = options || {};
  }
});
