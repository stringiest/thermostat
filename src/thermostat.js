class Thermostat {
  constructor(temperature = 20) {
    this.temperature = temperature;
  }

  increase() {
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
}
