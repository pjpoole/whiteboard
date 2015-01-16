Backbone.ModalView = Backbone.View.extend({
  tagName: 'div',
  className: 'modal',

  initialize: function (options) {
    this.dismissable = options.dismissable || true;

    if (this.dismissable) {
      $(window).on('keydown', this.maybeDismiss.bind(this));
    }
  },

  events: {
    'submit': 'create',
    'click .modal-backdrop': 'dismiss',
    'keydown': 'maybeDismiss'
  },

  dismiss: function (event) {
    event.preventDefault();
    if (!this.dismissable) return;

    $(window).off('keydown');
    this.remove();
  },

  maybeDismiss: function (event) {
    if (this.dismissable && event.keyCode === 27) {
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
