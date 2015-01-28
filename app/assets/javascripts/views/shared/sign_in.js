var eventChannel = Backbone.Radio.channel('event');

Whiteboard.Views.SignIn = Backbone.Modal.extend({
  template: JST['shared/sign_in_or_up'],

  submitEl: '.bbm-button',

  viewContainer: '.container',
  views: {
    'click #signin': {
      name: 'signin',
      view: JST['shared/sign_in'],
      onActive: 'setActive'
    },

    'click #register': {
      name: 'register',
      view: JST['users/new'],
      onActive: 'setActive'
    }
  },

  initialize: function (options) {
    this.listenTo(eventChannel, 'signIn', this.destroy);
    this.options = options || {};
  },

  onDestroy: function () {
    $('tester').remove();
    this.options.defer.resolve();
  },

  beforeCancel: function () {
    return false;
  },

  setActive: function (options) {
    this.$('.bbm-modal__tab a').removeClass('active');
    this.$('#' + options.name).addClass('active');
    Backbone.history.navigate('#' + options.name);
  },

  beforeSubmit: function (event) {
    var $form = $('#modal-region form'),
        data, method;

    method = $('.active').attr('id');

    data = {
      user: {
        email: $form.find('#user_email').val(),
        password: $form.find('#user_password').val(),
        password_verify: $form.find('#user_password_verify').val(),
      }
    };


    if (method === 'signin') {
      eventChannel.command('signin:requested', { data: data });
    } else {
      this.model.set(data);
      eventChannel.command('user:new:requested', { model: this.model });
    }

    return false;
  }
});
