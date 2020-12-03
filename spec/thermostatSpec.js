describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temperature', function() {
    thermostat.increase();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature', function() {
    thermostat.decrease();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('does not decrease temperature below 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decrease();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('does not go past 25 degrees when being eco friends', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.increase();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('does not go past 32 degrees when not being eco friends', function() {
    thermostat.powerSaveOff();
    for (var i = 0; i < 13; i++) {
      thermostat.increase();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('powersave method is on by default', function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('powersave can be turned off', function() {
    thermostat.powerSaveOff();
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it('the temperature can be reset to 20', function() {
    thermostatNew = new Thermostat(24);
    thermostatNew.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('if temperature is below 18 you are low-usage', function() {
    thermostatLow = new Thermostat(17);
    expect(thermostatLow.currentUsage()).toEqual('low-usage');
  });

  it('if temperature is between 18 and 25 you are medium-usage', function() {
    thermostatLow = new Thermostat(21);
    expect(thermostatLow.currentUsage()).toEqual('medium-usage');
  });

  it('if temperature is between 18 and 25 you are high-usage', function() {
    thermostatLow = new Thermostat(27);
    expect(thermostatLow.currentUsage()).toEqual('high-usage');
  });
});
