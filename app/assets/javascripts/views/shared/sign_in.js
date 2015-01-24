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
    this.options = options || {};
  },

  beforeCancel: function () {
    return false;
  },

  setActive: function (options) {
    this.$('.bbm-modal_tab a').removeClass('active');
    this.$('#' + options.name).addClass('active');
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
