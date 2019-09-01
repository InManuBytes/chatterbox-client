var Rooms = {
  // we need to get the rooms and populate the dropdown
  add: function () {
    var roomname = prompt('Please enter your new roomname');
    var sanitizedRoomName = Messages.escapeHtml(roomname);
    RoomsView.renderRoom(sanitizeRoomName);
  },

  currentRoom: function () {
    return $('#rooms select').children('option:selected').val();
  }
};