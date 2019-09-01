var Messages = {
  entityMap: {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  },

  // full function at : https://github.com/janl/mustache.js/blob/master/mustache.js#L73
  escapeHtml: function (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return Messages.entityMap[s];
    });
  }
};