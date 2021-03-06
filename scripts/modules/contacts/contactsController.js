var ContactsController = (function () {
  function CCtrl (model, view) {
    this.model = model;
    this.view = view;
    this.rootNode = document.getElementById ('root');

    init.call (this);
  }

  function init () {
    this.view.renderLayout (this.rootNode);

    // render the list of contact
    this.view.renderList (this.model.getMockData());
  }


  return CCtrl;
}) ();
