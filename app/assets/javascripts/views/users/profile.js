Whiteboard.Views.UserProfile = Mn.ItemView.extend({
  tagName: 'section',

  template: JST['users/profile'],

  templateHelpers: function () {
    var model = this.model;

    return {
      userName: model.escape('name')
    }
  },

  modelEvents: {
    'sync': 'render'
  }
});
