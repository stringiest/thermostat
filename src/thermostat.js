/*jshint esversion: 6 */

class Thermostat {

  constructor(temperature = 20) {
    this.temperature = temperature;
    this.powerSavingMode = true;
    this.MIN_TEMPERATURE = 10;
    this.MAX_TEMPERATURE = 32;
    this.ECOMAXTEMP = 25;
    this.DEFAULTTEMP = 20;
    this.MEDENERGYFLOOR = 18;
    this.MEDENERGYCEIL = 25;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  increase() {
    if (this.isMaximumTemperature()) {
    return;
  }
    this.temperature++;
  }

  decrease() {
    if (this.isMinimumTemperature()) {
      return;
    }
      this.temperature--;
  }

  isMaximumTemperature() {
    if (this.isPowerSaveOn() === false) {
      return this.temperature === this.MAX_TEMPERATURE;
    }
    return this.temperature === this.ECOMAXTEMP;
  }

  isMinimumTemperature() {
    return this.temperature === this.MIN_TEMPERATURE;
  }

  powerSaveOn() {
    this.powerSavingMode = true;
  }

  powerSaveOff() {
    this.powerSavingMode = false;
  }

  isPowerSaveOn() {
    return this.powerSavingMode === true;
  }

  reset() {
    this.temperature = this.DEFAULTTEMP;
  }

  currentUsage() {
    if(this.temperature < this.MEDENERGYFLOOR) {
      return 'low-usage';
    }
    if(this.temperature <= this.MEDENERGYCEIL) {
      return 'medium-usage';
    }
      return 'high-usage';
  }
  
}
