Whiteboard.Views.UserNew = Backbone.ModalView.extend({
  template: JST['users/new'],

  initialize: function (options) {
    this.listenTo(Whiteboard.currentUser, 'change sync', this.signedIn);
    Backbone.ModalView.prototype.initialize.call(this, options);
  },

  signedIn: function () {
    Backbone.history.navigate('', { trigger: true })
  },

  create: function (event) {
    event.preventDefault();
    // TODO: error handling

    this.model.save({
      user: {
        email: $('#user_username').val(),
        password: $('#user_password').val(),
        password_verify: $('#user_password_verify').val()
      }}, {
      success: function (model) {
        Backbone.history.navigate('', { trigger: true });
      }.bind(this),
      error: function () {
        alert("Problem creating user.")
      }
    });
  }
});
