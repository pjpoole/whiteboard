Backbone.ModalView = Backbone.View.extend({
  tagName: 'div',
  className: 'modal',

  initialize: function (options) {
    _.defaults(options, { dismissable: true });
    this.dismissable = options.dismissable;

    if (this.dismissable) {
      $(window).on('keydown', this.maybeDismiss.bind(this));
    }
  },

  events: {
    'submit': 'create',
    'click .modal-backdrop': 'dismiss',
    'keydown': 'maybeDismiss'
  },

  dismiss: function () {
    if (!this.dismissable) return;

    this.remove();
  },

  remove: function (event) {
    event && event.preventDefault();

    $(window).off('keydown');
    Backbone.View.prototype.remove.call(this);
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
