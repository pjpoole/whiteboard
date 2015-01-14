Whiteboard.Views.SectionsIndex = Backbone.CompositeView.extend({
  tagName: 'section',
  className: 'section-index',

  template: JST['sections/index'],

  searchOptions: {
    selector: '.sections-body tr',
    searchBox: '#section-search'
  },

  events: {
    'keydown #section-search': 'liveSearch',
    'keyup #section-search': 'liveSearch'
  },

  initialize: function (options) {
    this.addSectionList();
  },

  addSectionList: function (sections) {
    var view = new Whiteboard.Views.SectionsList({
      collection: this.collection
    });
    this.addSubview('#sections-list', view);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});

_.extend(Whiteboard.Views.SectionsIndex.prototype, Whiteboard.Utils.LiveSearch);
