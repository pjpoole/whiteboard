Whiteboard.Views.SignIn = Backbone.Modal.extend({
  template: JST['shared/sign_in'],

  submitEl: 'button',

  events: {
    'click a': 'toggle'
  },

  initialize: function (options) {
    this.options = options || {};
  },

  beforeCancel: function () {
    return false;
  },

  toggle: function () {
    Whiteboard.SessionController.accountCreate(this.options);
    this.destroy();
  },

  submit: function (event) {
    var $form = $('form');

    // TODO: error handling
    Whiteboard.currentUser.signIn({
        email: $('#user_email').val(),
        password: $('#user_password').val(),
        defer: this.options.defer,
        error: function () {
          alert("Wrong username or password.");
        }
    });
  }
});
