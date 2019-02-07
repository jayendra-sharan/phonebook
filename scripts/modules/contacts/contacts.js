var contactsManager = {
  init: function () {
    new ContactsController (new ContactsModel (), new ContactsView ());
  }
};

window.contactsManager = contactsManager;
