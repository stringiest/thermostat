/*jshint esversion: 6 */

class Thermostat {

  constructor(temperature = 20) {
    this.temperature = temperature;
    this.powerSavingMode = true;
    this.MINTEMPERATURE = 10;
    this.MAXTEMPERATURE = 32;
    this.ECOMAXTEMP = 25;
    this.DEFAULTTEMP = 20;
    this.MEDENERGYFLOOR = 18;
    this.MEDENERGYCEIL = 25;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  increase() {
    if(this.powerSavingMode === true && this.temperature === this.ECOMAXTEMP) {
      throw new Error('already at maximum temperature, for powersave');
    } else if(this.temperature === this.MAXTEMPERATURE){
      throw new Error('already at maximum temperature');
    }
    this.temperature++;
    return this.temperature;
  }

  decrease() {
    if(this.temperature === this.MINTEMPERATURE) {
      throw new Error('already at minimum temperature');
    }
    this.temperature--;
    return this.temperature;
  }

  powerSave() {
    if(this.powerSavingMode === true) {
      this.powerSavingMode = false;
    } else {
      this.powerSavingMode = true;
    }
  }

  reset() {
    this.temperature = this.DEFAULTTEMP;
  }

  currentUsage() {
    if(this.temperature < this.MEDENERGYFLOOR) {
      return 'low-usage';
    } else if(this.temperature <= this.MEDENERGYCEIL) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}
