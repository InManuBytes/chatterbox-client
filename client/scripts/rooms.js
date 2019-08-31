var Rooms = {
  // we need to get the rooms and populate the dropdown
  add: function () {
    var roomname = prompt('Please enter your new roomname');
    RoomsView.renderRoom(roomname);
  },

  currentRoom: function () {
    $("#rooms select").change(function(){
        var selectedRoom = $(this).children("option:selected").val();
        console.log(typeof selectedRoom);
    })
  }
};