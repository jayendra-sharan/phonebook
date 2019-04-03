var ContactsModel = (function () {
  function CModel () {
    this.mockData = [
      {
        firstName: 'John',
        lastName: 'Smith',
        mobile: '9999999999',
        email: 'john@example.com',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        mobile: '9999999999',
        email: 'jane@example.com',
      },
    ]
  }

  // shared function to return mock data
  CModel.prototype.getMockData = function() {
    return this.mockData;
  }

  return CModel;
}) ();
