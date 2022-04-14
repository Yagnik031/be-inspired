import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device'

@Injectable({
  providedIn: 'root'
})
export class DeviceinfoService {

  constructor() { }


  async getdeviceinfo() {
    const info = await Device.getInfo();

    return info;
  }

  async getdeviceid() {
    const id = await Device.getId();
    // console.log(id);
    return id;
  }

  async getbatteryinfo() {
    const info = await Device.getBatteryInfo();
    // console.log(info);
    return info;
  }
}
