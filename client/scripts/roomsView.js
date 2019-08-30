var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //this.renderRoom() if we run this it will create an empty room
    $('#rooms').on('click', 'button', function() {
      Rooms.add();
    });
  },

  renderRoom: function(roomname) {
    // '#rooms select' will have the rooms as children
    var room = {'roomname': roomname};
    var html = '';
    var roomOption = _.template(`<option value="<%= roomname %>"><%= roomname %></option>`);
    html += roomOption(room);
    $('#rooms select').append(html);
  }

};
