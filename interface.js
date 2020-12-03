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

  $('#powerSaveOn').on('click', function() { // event listener
    thermostat.powerSaveOn(); // update model
    $('#power-saving-status').text('Eco mode is on');
    updateTemperature(); // update view
  });

  $('#powerSaveOff').on('click', function() { // event listener
    thermostat.powerSaveOff(); // update model
    $('#power-saving-status').text('Eco mode is off');
    updateTemperature(); // update view
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.currentUsage());
  }
});
