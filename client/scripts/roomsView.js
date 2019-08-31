var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //this.renderRoom() if we run this it will create an empty room
    this.render();
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
  },

  render: function() {
    var showRooms = function (data) {
      var html = '';
      var roomOption = _.template(`<option value="<%= roomname %>"><%= roomname %></option>`);
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].hasOwnProperty('roomname')) {
          html += roomOption(data.results[i]);
        }
      }
      $('#rooms select').append(html).
        ready(function() {
          var found = {};
          $('option').each(function() {
            var $this = $(this);
            if (found[$this.attr('value')]) {
              $this.remove();
            } else {
              found[$this.attr('value')] = true;
            }
          });
        });
    };

    Parse.readAll(showRooms);
  },

};
