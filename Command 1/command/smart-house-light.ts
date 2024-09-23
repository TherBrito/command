export class SmartHouseLight {
  private isOn = false;
  private intensity = 50; //verficar intensidade

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF'; //verificar se está acessa ou apagada
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} agora está ${this.getPowerStatus()}`);
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} agora está ${this.getPowerStatus()}`);
    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity; //aumentar a intensidade
    this.intensity += 1;
    return this.intensity;
  }

  decreaseIntensity(): number {
    if (this.intensity <= 0) return this.intensity; //diminuir a intensidade
    this.intensity -= 1;
    return this.intensity;
  }
}
