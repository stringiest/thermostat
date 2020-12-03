$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.increase(); // update model
    updateTemperature(); // update view
  });

  $('#temperature-down').on('click', function() { // event listener
    thermostat.decrease(); // update model
    updateTemperature(); // update view
  });

  $('#reset').on('click', function() { // event listener
    thermostat.reset(); // update model
    updateTemperature(); // update view
  });



  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }
});
