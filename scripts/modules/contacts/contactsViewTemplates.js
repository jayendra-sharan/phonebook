var ContactsViewTemplates = (function () {
  function Cvt () {};
  /**
   * @description function creates an element with given tagName and
   * options.
   */
  Cvt.prototype.getElement = function (tagName, options, text) {
    var el = document.createElement (tagName);
    Object.keys (options).forEach (item => {
      el.setAttribute (item, options[item]);
    });

    if (text) {
      var textNode = document.createTextNode(text);
      el.appendChild(textNode);
    }

    return el;
  }
  return Cvt;
})();