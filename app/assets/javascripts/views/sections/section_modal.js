Whiteboard.Views.SectionModal = Backbone.ModalView.extend({
  template: JST['sections/form'],

  create: function (event) {
    event.preventDefault();

    this.model.save({
      title: this.$('#section_title').val(),
      description: this.$('#section_description').val()
    }, {
      success: function () {
        this.dismiss();
        Backbone.history.navigate('#sections/' + this.model.id, true);
      }.bind(this)
    });
  }
});
