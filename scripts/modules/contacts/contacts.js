var contactsManager = {
  init: function () {
    new ContactsController (new ContactsModel (), ContactsView ());
  }
};

window.contactsManager = contactsManager;
