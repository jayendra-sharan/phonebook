var ContactsView = (function () {
  var template = new ContactsViewTemplates ();
  function CView () {
    this.formContainer = null;
    this.listContainer = null;
  }
  /**
   * @description function to create the layout of the working area
   */
  CView.prototype.renderLayout = function (rootNode) {
    this.formContainer = template.getElement ('div', {
      'class': 'form-container'
    });

    this.listContainer = template.getElement ('div', {
      'class': 'list-container'
    });
    rootNode.appendChild (this.formContainer);
    rootNode.appendChild (this.listContainer);

    this.formContainer.appendChild(getContactForm());
  }
  /**
   * @description function to create the contact form.
   * @returns {HTMLElement}
   */
  function getContactForm () {
    var formBody = template.getElement ('form', {
      'class': 'form-body',
      'id': 'contactForm',
    });

    var firstName = template.getElement('input', {
      'placeholder': 'Enter first name',
      'type': 'text',
      'class': 'form-input',
      'name': 'firstName',
      'id': 'firstName'
    });
    var lastName = template.getElement('input', {
      'placeholder': 'Enter last name',
      'type': 'text',
      'class': 'form-input',
      'name': 'lastName',
      'id': 'lastName'
    });
    var mobile = template.getElement('input', {
      'placeholder': 'Enter mobile number',
      'type': 'phone',
      'class': 'form-input',
      'name': 'mobile',
      'id': 'mobile'
    });
    var email = template.getElement('input', {
      'placeholder': 'Enter e-mail id',
      'type': 'text',
      'class': 'form-input',
      'name': 'email',
      'id': 'email'
    });

    var submitButton = template.getElement('button', {
      'type': 'submit',
      'id': 'add'
    }, 'Add');

    var clearButton = template.getElement('button', {
      'type': 'reset',
      'id': 'clear'
    }, 'Clear');

    // append all fields to the form.
    formBody.appendChild(firstName);
    formBody.appendChild(lastName);
    formBody.appendChild(mobile);
    formBody.appendChild(email);
    formBody.appendChild(submitButton);
    formBody.appendChild(clearButton);

    // at the end, return form body
    return formBody;
  }

  // function to create list of items.
  CView.prototype.renderList = function (list) {
    // for each item of the list, render the row.
    for (var index = 0; index < list.length; index++) {
      renderRow (this.listContainer, list[index]);
    }
  }

  function renderRow (listContainer, item) {
    var row = template.getElement('div', {
      'class': 'row-item',
    });

    // now, iterate over the object and create divs and then append to row.
    for (var key in item) {
      var val = item[key];
      var span = template.getElement('span', {
        'class': 'col',
      }, val);
      row.appendChild(span);
    }

    // in the end, append row to the listContainer.
    listContainer.appendChild(row);
  }

  CView.prototype.createRow = function (item) {
    renderRow(item);
  }

  return CView;
}) ();
