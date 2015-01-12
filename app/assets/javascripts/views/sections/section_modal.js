Whiteboard.Views.SectionModal = Backbone.View.extend({
  tagName: 'div',
  className: 'modal',

  events: {
    'submit': 'create',
    'click .modal-backdrop': 'dismiss'
  },

  template: JST['sections/form'],

  create: function (event) {
    event.preventDefault();

    this.model.save({
      title: this.$('#section_title').val(),
      description: this.$('#section_description').val()
    }, {
      success: function () {
        this.remove();
        Backbone.history.navigate('#/sections/' + this.model.id, true);
      }.bind(this)
    });
  },

  dismiss: function (event) {
    event.preventDefault();
    this.remove();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
