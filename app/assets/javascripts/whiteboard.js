Mn.Renderer.render = function (template, data) {
  return template(data);
}

window.Whiteboard = new Mn.Application();

Whiteboard.Utils =       {};
Whiteboard.Models =      {};
Whiteboard.Collections = {};
Whiteboard.Views =       {};
Whiteboard.Controllers = {};
Whiteboard.Routers =     {};

Whiteboard.on('start', function () {
  Whiteboard.currentUser = new Whiteboard.Models.CurrentUser();
  Whiteboard.currentUser.fetch();

  Whiteboard.SessionRouter = new Whiteboard.Routers.Session();
  Whiteboard.AppRouter = new Whiteboard.Routers.App();
  
  Whiteboard.SessionController = new Whiteboard.Controllers.Session();
  Whiteboard.AppController = new Whiteboard.Controllers.App();

  Whiteboard.mainLayout = new Whiteboard.Views.Layout();

  if (!Backbone.History.started) {
    Backbone.history.start();
  }
});
