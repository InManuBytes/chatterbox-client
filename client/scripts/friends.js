var Friends = {
  //friendsList: [],

  toggleStatus: function() {
    $('#chats').on('click', '.username', function(event) {
      // get elements by class name
      var username = event.currentTarget.dataset.username;
      $('.username').each(function() {
        var currentUsername = $.trim($(this).text());
        if (currentUsername === username) {
          $(this).parent().addClass('friendsMessage');
        }

      });
      //Friends.friendsList.push(event.currentTarget.dataset.username);
    });
  },
};