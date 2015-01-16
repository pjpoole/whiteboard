Whiteboard.Views.UserNew = Backbone.ModalView.extend({
  template: JST['users/new'],

  create: function (event) {
    event.preventDefault();

    // TODO: error handling

    this.model.save({
      user: {
        username: $('#user_username').val(),
        password: $('#user_password').val(),
        password_verify: $('#user_password_verify').val()
      }, success: function () {
        Whiteboard.currentUser = model;
        this.remove();
      }.bind(this)
    });
  }
});
