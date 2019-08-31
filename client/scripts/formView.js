var FormView = {

  $form: $('form'),
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    this.render();
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // we'll have to invoke Parse.create(message)

    // we need to have an object with username, text, roomname
    var username = App.username;
    // var selectedRoom = ; //we need to go back and get all the rooms
    var text = event.target[0].value;
    var message = {
      username: username,
      text: text,
      roomname: Rooms.currentRoom()
    };
    Parse.create(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
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