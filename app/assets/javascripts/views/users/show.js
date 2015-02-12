Whiteboard.Views.UserShow = Mn.ItemView.extend({
  tagName: 'section',
  template: JST['users/show'],
  templateHelpers: function () {
    var model = this.model;

    return {
      userName: model.escape('name')
    }
  },

  modelEvents: {
    'sync': 'render'
  },

  initialize: function () {
  }
});
