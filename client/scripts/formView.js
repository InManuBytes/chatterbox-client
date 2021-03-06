var FormView = {
  $form: $('form'),
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // we need to have an object with username, text, roomname
    var username = App.username;
    var text = event.target[0].value; // here we need to sanitize the text
    var message = {
      username: username,
      text: text,
      roomname: Rooms.currentRoom()
    };
    Parse.create(message, App.refresh);
  },

  // how can we get the value of the input to go away after submitting?

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },
};
