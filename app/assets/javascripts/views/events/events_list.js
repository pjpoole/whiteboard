Whiteboard.Views.EventsList = Backbone.CompositeView.extend({
  className: 'events-list',

  template: JST['events/list'],

  events: {
    'click .events-header td': 'sortColumn'
  },

  initialize: function () {
    // default sort by date
    // TODO: user prefs
    this.comparator = 'date';
    this.sign = 1;

    this.collection.each(this.addEventView, this);
    this.listenTo(this.collection, 'add', this.addEventView);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'sort', this.refreshOrder);
  },

  addEventView: function (vent) {
    var view = new Whiteboard.Views.EventItem({
      model: vent,
      collection: this.collection
    });
    this.addSubview('.events-body', view);
  },

  refreshOrder: function () {
    this.resortSubviews('.events-body');
  },

  render: function () {
    var content = this.template();

    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});

_.extend(Whiteboard.Views.EventsList.prototype, Whiteboard.Utils.SortableColumns);
