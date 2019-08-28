var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // how does initialize works with render?
  },

  render: function() {
    var i, html = "";
    for (i = 0; i < data.length; i++) {
      html += MessageView.render(data.???[i]); //what are we passing in?
    }
    $("#chats").append(html);
  }

};