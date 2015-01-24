Whiteboard.Controllers.Session = Mn.Controller.extend({

  register: function (options) {
    options = options || {};
    options.name = 'register';

    Backbone.history.navigate('register');
    return this.showHelper(options);
  },

  signIn: function (options) {
    options = options || {};
    options.name = 'signin'

    Backbone.history.navigate('signin');
    return this.showHelper(options);
  },

  showHelper: function (options) {
    options.model = new Whiteboard.Models.User();
    options.defer = options.defer || $.Deferred().then(this._goHome);

    var view = new Whiteboard.Views.SignIn(options);

    Whiteboard.mainLayout.getRegion('modal').show(view);

    return options.defer.promise();
  },

  _goHome: function () {
    Backbone.history.navigate('', { trigger: true });
  }
});
