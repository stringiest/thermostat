class Thermostat {
  constructor(temperature = 20) {
    this.temperature = temperature;
    this.powerSavingMode = false
  }

  increase() {
    if(this.powerSavingMode === true && this.temperature === 25) {
      throw new Error('already at maximum temperature, for powersave');
    } else if(this.temperature === 32){
      throw new Error('already at maximum temperature');
    }
    this.temperature++;
    return this.temperature;
  }

  decrease() {
    if(this.temperature === 10) {
      throw new Error('already at minimum temperature');
    }
    this.temperature--;
    return this.temperature;
  }

  powerSave() {
    if(this.powerSavingMode === true) {
      this.powerSavingMode = false;
    } else {
      this.powerSavingMode = true
    }
  }
}
