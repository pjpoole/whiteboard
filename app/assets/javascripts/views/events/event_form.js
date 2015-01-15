Whiteboard.Views.EventForm = Backbone.View.extend({
  tagName: 'form',
  template: JST['events/form'],

  events: {
    'submit': 'submit',
    'keydown': 'maybeSubmit'
  },

  render: function (currentDate) {
    var defaultDate = currentDate || moment().format('YYYY-MM-DD');
    var content = this.template({ defaultDate: defaultDate });

    this.$el.html(content);

    return this;
  },

  maybeSubmit: function (event) {
    if (event.keyCode === 13) {
      this.submit(event);
    }
  },

  submit: function (event) {
    event.preventDefault();
    var eventContent = this.$el.serializeJSON();

    eventContent['section_id'] = this.collection.section.id;

    this.collection.create(eventContent, { wait: true });
    this.render(eventContent['event']['date']);

    setTimeout(function () {
      this.$('.select-after-input').focus();
    }.bind(this), 50);
  }
});
