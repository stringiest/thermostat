describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temperature', function() {
    expect(thermostat.increase()).toEqual(21);
  });

  it('decreases the temperature', function() {
    expect(thermostat.decrease()).toEqual(19);
  });

  it('does not decrease temperature below 10 degrees', function() {
    thermostatMin = new Thermostat(10);
    expect(function(){ thermostatMin.decrease(); }).toThrowError('already at minimum temperature');
  });

  it('does not go past 25 degrees when being eco friends', function() {
    eMax = new Thermostat(25);
    eMax.powerSave();
    expect(function(){ eMax.increase(); }).toThrowError('already at maximum temperature, for powersave');
  })

  it('does not go past 32 degrees when not being eco friends', function() {
    eMax = new Thermostat(32);
    eMax.powerSave();
    expect(function(){ eMax.increase(); }).toThrowError('already at maximum temperature');
  })
});
