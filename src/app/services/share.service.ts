import { Injectable } from '@angular/core';
import { Share } from '@capacitor/share';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }



  async share(text) {

    let shareRet = await Share.share({
      title: 'Be Inspired',
      text: text,
      url: 'http://www.itcodehelp.com/',
      dialogTitle: 'Social Media Share'
    });


  }

}
