Whiteboard.Utils.LiveSearch = {
  liveSearch: function () {

    var selector = this.searchOptions['selector'],
        filter = $(this.searchOptions['searchBox']).val(),
        rgx = new RegExp(filter, 'i');

    $(selector).each(function () {
      $el = $(this);

      if ($el.text().search(rgx) < 0) {
        $el.hide();
      } else {
        $el.show();
      }
    });
  }
}
