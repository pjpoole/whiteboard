Whiteboard.Views.SignIn = Backbone.ModalView.extend({
  template: JST['shared/sign_in'],

  initialize: function (options) {
    this.callback = options.callback;
    this.listenTo(Whiteboard.currentUser, 'signIn', this.signInCallback);

    Backbone.ModalView.prototype.initialize.call(this, options);
  },

  create: function (event) {
    event.preventDefault();
    var $form = $(event.currentTarget).find('form');
    var formData = $form.serializeJSON().user;

    // TODO: error handling
    Whiteboard.currentUser.signIn({
        email: formData.email,
        password: formData.password,
        error: function () {
          alert("Wrong username or password.");
        }
    });
  },

  signInCallback: function (event) {
    if (this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("", { trigger: true });
    }
  }
});
