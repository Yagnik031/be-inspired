import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ToastService } from './toast.service';

const { Clipboard } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(private toastservice: ToastService) { }


  write(value) {
    Clipboard.write({
      string: value
    });
    this.toastservice.show('Copied')
  }


  async read() {
    let result = await Clipboard.read();
    console.log('Got', result.type, 'from clipboard:', result.value);
    return result.value;
  }
}
