Whiteboard.Models.Event = Backbone.Model.extend({
  urlRoot: '/api/events',
  //
  // relations: [
  //   {
  //     type: 'one',
  //     key: 'section',
  //     relatedModel: function () {
  //       return Whiteboard.Models.Section;
  //     }
  //   },
  //   {
  //     key: 'posts',
  //     relatedModel: function () {
  //       return Whiteboard.Models.Post;
  //     }
  //   }
  // ]
});
