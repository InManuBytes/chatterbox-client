var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.render();
    $('#chats').on('click', '.username', function (event) {
      Friends.toggleStatus();
    });
  },

  render: function() {
    var showMessage = function (data) {
      var html = '';
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].hasOwnProperty('username') && data.results[i].hasOwnProperty('text')) {
          html += MessageView.render(data.results[i]);
        }
      }
      $('#chats').append(html);
    };
    Parse.readAll(showMessage);
  },
  renderMessage: function(message) {
    var html = '';
    html += MessageView.renderMessage(message);
    $('#chats').append(html);
  }
};