Whiteboard.Views.UserShow = Mn.ItemView.extend({
  tagName: 'section',

  getTemplate: function () {
    if (this.model.id === sessionChannel.request('user:getId')) {
      return JST['users/profile'];
    } else {
      return JST['users/show'];
    }
  },
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
