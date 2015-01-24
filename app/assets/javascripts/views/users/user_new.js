Whiteboard.Views.UserNew = Backbone.Modal.extend({
  template: JST['users/new'],

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
    Whiteboard.SessionController.signIn(this.options);
    this.destroy();
  },

  submit: function (event) {
    event.preventDefault();
    // TODO: error handling

    this.model.save({
      user: {
        email: $('#user_username').val(),
        password: $('#user_password').val(),
        password_verify: $('#user_password_verify').val()
      }}, {
      success: function (model) {
        Whiteboard.currentUser.set(model);
        this.options.defer.resolve();
      }.bind(this),
      error: function () {
        alert("Problem creating user.")
      }
    });
  }
});
