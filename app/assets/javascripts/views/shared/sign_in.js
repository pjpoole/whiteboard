Whiteboard.Views.SignIn = Backbone.Modal.extend({
  template: JST['shared/sign_in'],

  submitEl: 'button',

  events: {
    'click a': 'toggle'
  },

  beforeCancel: function () {
    return false;
  },

  toggle: function () {
    Whiteboard.Controller.accountCreate(this.options);
    this.destroy();
  },

  submit: function (event) {
    event.preventDefault();
    var $form = $(event.currentTarget).find('form');

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
