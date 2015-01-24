Whiteboard.Controllers.Session = Mn.Controller.extend({

  accountCreate: function (options) {
    dfd = options.defer || $.Deferred().then(this._goHome);

    var newUser = new Whiteboard.Models.User();

    var view = new Whiteboard.Views.UserNew({
      model: newUser,
      defer: dfd
    });

    return dfd.promise();
  },

  signIn: function (options) {
    dfd = options.defer || $.Deferred().then(this._goHome);

    var view = new Whiteboard.Views.SignIn({
      defer: dfd
    });

    return dfd.promise();
  },

  _goHome: function () {
    Backbone.history.navigate('', { trigger: true });
  }
});
