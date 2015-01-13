Backbone.ModalView = Backbone.View.extend({
  tagName: 'div',
  className: 'modal',

  initialize: function () {
    $(window).on('keydown', this.maybeDismiss.bind(this));
  },

  events: {
    'submit': 'create',
    'click .modal-backdrop': 'dismiss',
    'keydown': 'maybeDismiss'
  },

  dismiss: function (event) {
    event.preventDefault();
    $(window).off('keydown');
    this.remove();
  },

  maybeDismiss: function (event) {
    if (event.keyCode === 27) {
      $(window).off('keydown');
      this.remove();
    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});
