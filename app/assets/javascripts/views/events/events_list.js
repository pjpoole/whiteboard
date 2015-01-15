Whiteboard.Views.EventsList = Backbone.CompositeView.extend({
  className: 'events-list',

  template: JST['events/list'],

  initialize: function () {
    this.collection.each(this.addEventView, this);
    this.listenTo(this.collection, 'add', this.addEventView);
  },

  addEventView: function (vent) {
    var view = new Whiteboard.Views.EventItem({
      model: vent,
      collection: this.collection
    });
    this.addSubview('.events-body', view);
  },

  render: function () {
    var content = this.template();

    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
