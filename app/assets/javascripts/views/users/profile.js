Whiteboard.Views.UserProfile = Mn.ItemView.extend({
  tagName: 'section',
  className: 'col-lg-8 col-lg-offset-2',

  template: JST['users/profile'],

  templateHelpers: function () {
    var model = this.model;

    return {
      userName: model.escape('name'),
      emailAddress: model.escape('email'),
      firstName: model.escape('first_name'),
      lastName: model.escape('last_name')
    }
  },

  events: {
    'click .editable': 'editField'
  },

  modelEvents: {
    'sync': 'render'
  },

  editField: function (ev) {

  }
});
