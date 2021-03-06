Whiteboard.Views.SectionsList = Mn.CompositeView.extend({
  tagName: 'table',
  className: 'section-list table table-striped',
  childView: Whiteboard.Views.SectionItem,
  childViewContainer: '#sections-body',

  emptyView: Whiteboard.Views.NoSections,

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
