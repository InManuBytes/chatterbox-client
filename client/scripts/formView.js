var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
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
      text: text
    };
    Parse.create(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};