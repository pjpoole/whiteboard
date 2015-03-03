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
    var data, dataType,
        $inputField = $('<input type="text">'),
        $oldField,
        model = this.model,
        $target = $(ev.currentTarget),
        that = this;

    dataType = $target.data('id');
    data = $target.text();

    $inputField.val(data);

    $oldField = $target.replaceWith($inputField);

    $inputField.one('blur', {
      oldField: $oldField,
      dataType: dataType
    }, function (e) {
      $(e.currentTarget).off('keydown');
      that.updateUser(e);
    });

    $inputField.on('keydown', function (e) {
        if (e.which === 13) {
          $(this).trigger('blur', e);
        }
    });
  },

  updateUser: function (ev) {
    var dataType = ev.data.dataType,
        model = this.model,
        oldField = ev.data.oldField,
        $target = $(ev.currentTarget);

    model.set(dataType, $target.val());
    model.save({}, {
      parse: false,
      success: function () {
        $target.replaceWith( oldField.text( model.get(dataType) ));
      }
    });
  }
});
