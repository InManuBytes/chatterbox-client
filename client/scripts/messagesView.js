var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
    Friends.toggleStatus();
  },

  render: function(data, room) {
    for (var i = 0; i < data.results.length; i++) {
      if (
        data.results[i].hasOwnProperty('username') &&
        data.results[i].hasOwnProperty('text')
      ) {
        if (room && data.results[i].hasOwnProperty('roomname') && data.results[i].roomname === room) {
          MessagesView.renderMessage(data.results[i]);
        } else if (room === undefined || room === '') {
          MessagesView.renderMessage(data.results[i]);
        }
      }

    }
  },

  renderMessage: function(message) {
    var sanitizedText = Messages.escapeHtml(message.text);
    var sanitizedUsername = Messages.escapeHtml(message.username);
    message.text = sanitizedText;
    message.username = sanitizedUsername;
    var html = '';
    html += MessageView.render(message);
    $('#chats').append(html);
  }
};
