Whiteboard.Views.SignIn = Backbone.Modal.extend({
  template: JST['shared/sign_in_or_up'],

  submitEl: '.modal-submit',

  viewContainer: '.modal-views',
  views: {
    'click #signin': {
      name: 'signin',
      view: JST['shared/sign_in'],
      onActive: 'setActive',
      focusEl: '.focus0'
    },

    'click #register': {
      name: 'register',
      view: JST['users/new'],
      onActive: 'setActive',
      focusEl: '.focus1'
    }
  },

  events: {

  },

  initialize: function (options) {
    this.options = options || {};
  },

  onDestroy: function () {
    this.options.defer.resolve();
  },

  onShow: function () {
    if (sessionChannel.request('user:isSignedIn')) this.destroy();
    this.listenTo(eventChannel, 'signIn', this.destroy);
  },

  beforeCancel: function () {
    return sessionChannel.request('user:isSignedIn');
  },

  setActive: function (options) {
    var userName = $('#modal-region #user_email').val();
    this.$('.modal-tab a').removeClass('active');
    this.$('#' + options.name).addClass('active');
    setTimeout(function () {
      $('#modal-region #user_email').val(userName);
    }, 150)
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
        password_confirmation: $form.find('#user_password_verify').val(),
      }
    };

    if (this.validateData(data)) {
      if (method === 'signin') {
        eventChannel.command('signin:requested', { data: data });
      } else {
        eventChannel.command('user:new:requested', { model: this.model, data: data });
      }
    }

    return sessionChannel.request('user:isSignedIn');
  },

  validateData: function (data) {
    $('#alert-box').remove();
    var $alertBox = $(JST['shared/errors']()),
        data = data.user,
        errorMsg = "",
        hasError = false;

    if (!data.email.match(/[^@\s]+@(?:[-a-z0-9]+\.)+[a-z]{2,}/i)) {
      hasError = true;
      errorMsg += "Email address is invalid<br>";
    }

    if (data.password === "") {
      errorMsg += "Password can't be blank<br>";
    }

    if (data.password_confirmation === ""
        && data.password_confirmation !== data.password) {
      hasError = true;
      errorMsg += "Password and verification must match<br>";
    }

    if (hasError) {
      $alertBox.find('#alert-text').html(errorMsg);
      $('.modal-section').prepend($alertBox)
      return false;
    }

    return true;
  }
});
