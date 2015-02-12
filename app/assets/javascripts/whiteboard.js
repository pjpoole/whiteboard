Mn.Renderer.render = function (template, data) {
  return template(data);
};

var eventChannel   = Backbone.Radio.channel('event'),
    sessionChannel = Backbone.Radio.channel('session'),
    modalChannel   = Backbone.Radio.channel('modal'),
    userChannel    = Backbone.Radio.channel('user');

Backbone.Radio.tuneIn('event');



window.Whiteboard = new Mn.Application();

Whiteboard.Utils =       {};
Whiteboard.Models =      {};
Whiteboard.Collections = {};
Whiteboard.Views =       {};
Whiteboard.Controllers = {};
Whiteboard.Routers =     {};

Whiteboard.on('start', function () {
  Whiteboard.users = new Whiteboard.Collections.Users();

  Whiteboard.currentUser = new Whiteboard.Models.CurrentUser();
  Whiteboard.currentUser.fetch();

  Whiteboard.mainLayout = new Whiteboard.Views.Layout();
  Whiteboard.mainLayout.render();

  Whiteboard.SessionController = new Whiteboard.Controllers.Session();
  Whiteboard.AppController = new Whiteboard.Controllers.App({
    region: Whiteboard.mainLayout.getRegion('content')
  });

  Whiteboard.SessionRouter = new Whiteboard.Routers.Session();
  Whiteboard.AppRouter = new Whiteboard.Routers.App({
    controller: Whiteboard.AppController
  });

  if (!Backbone.History.started) {
    Backbone.history.start();
  }
});
