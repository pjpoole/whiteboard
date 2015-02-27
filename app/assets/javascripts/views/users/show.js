Whiteboard.Views.UserShow = Mn.ItemView.extend({
  tagName: 'section',
  className: 'col-lg-8 col-lg-offset-2',

  template: JST['users/show'],

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
