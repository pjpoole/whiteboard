Mn.Renderer.render = function (template, data) {
  return template(data);
};

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

  Whiteboard.mainLayout = new Whiteboard.Views.Layout();
  Whiteboard.mainLayout.render();

  Whiteboard.SessionRouter = new Whiteboard.Routers.Session();
  Whiteboard.AppRouter = new Whiteboard.Routers.App();

  Whiteboard.SessionController = new Whiteboard.Controllers.Session();
  Whiteboard.AppController = new Whiteboard.Controllers.App({
    region: Whiteboard.mainLayout.getRegion('content')
  });

  Whiteboard.on('section:create', function () {
    Whiteboard.mainLayout.sectionCreate();
  });

  if (!Backbone.History.started) {
    Backbone.history.start();
  }
});
