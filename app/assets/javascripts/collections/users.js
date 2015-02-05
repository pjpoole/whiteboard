Whiteboard.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',
  model: Whiteboard.Models.User,

  initialize: function () {
    userChannel.comply({
      'user:add': this.userAdd
    }, this);

    userChannel.reply({
      'user:name': this.yieldName
    }, this);
  },

  userAdd: function (model) {
    this.add(model, { merge: true });
  },

  yieldName: function (id) {
    var name, user = this.get('id');

    return user.get('name');
  }
});
