var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(App.refreshMessages, 1000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('DATA:', data);
      callback();
      $('#rooms select').change(function() {
        var selectedRoom = $(this).children('option:selected').val();
        MessagesView.$chats.children().hide();
        MessagesView.render(data, selectedRoom);
      });
      MessagesView.render(data, Rooms.currentRoom());
      RoomsView.render(data);
    });
  },

  refreshMessages: function() {
    Parse.readAll((data) => {
      MessagesView.$chats.children().hide();
      MessagesView.render(data, Rooms.currentRoom());
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

};
