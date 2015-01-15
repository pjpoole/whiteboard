Whiteboard.Utils.SortableColumns = {
  // TODO: Automate data-column-name population
  //
  // TODO: Get rid of the need to pass the selector in wrapper function
  // by passing a fourth argument to sort(), if possible.
  //
  // In order to mix this code into a class, that class must extend
  // CompositeView, the collection must have a properly written
  // comparator, the "sort" callback must send a selector containing the
  // elements to be re-sorted to resortSubviews, and the columns must
  // have a data-column-name attribute.
  resortSubviews: function(selector) {
    var subviews = this.subviews(selector),
        newSubviews = {},
        i, len = subviews.length;

    for(i = 0; i < len; i++) {
      subview = subviews.pop();
      newSubviews[subview.model.id] = subview;
    }

    this.collection.each(function (model) {
      subviews.push(newSubviews[model.id]);
    });

    this.attachSubviews();
  },

  sortColumn: function (event) {
    var $target = $(event.target),
        sortVar = $target.data('column-name'),
        coll = this.collection;

    coll.sign = coll.sign || -1;

    if (coll.sortVar === sortVar) coll.sign *= -1;
    coll.sortVar = sortVar;

    coll.sort();
  }
};
