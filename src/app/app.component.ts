import { DeviceinfoService } from './services/deviceinfo.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // for exit app alert open for once...
  public alertPresented: any;


  constructor(
    private platform: Platform,
    private location: Location,
    private alertController: AlertController,
    public modalCtrl: ModalController,
    private router: Router,
    private device: DeviceinfoService,
    private storage: StorageService
  ) {
    this.initializeApp();
    this.alertPresented = false;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide({ fadeOutDuration: 1000 });

      this.device.getdeviceid().then((device: any) => {
        console.log('device id==>==>>', device);
        this.storage.setString('device-id', device.uuid);

      })
      // back button-event....
      this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
        // console.log('Back press handler!');
        if (this.location.isCurrentPathEqualTo('/home')) {
          // Show Exit Alert!
          // console.log('Show Exit Alert!');
          this.showExitConfirm();
          processNextHandler();
        } else {
          // Navigate to back page
          // console.log('Navigate to back page');
          this.location.back();
        }
      });


      /**
      * initialize() require after platform.ready();
      */
      // AdMob.initialize({
      //   requestTrackingAuthorization: true,
      //   testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
      //   initializeForTesting: true,
      // });
    });
  }

  // exit-app
  showExitConfirm() {
    let a = this;
    if (!a.alertPresented) {
      a.alertPresented = true;
      this.alertController.create({
        header: 'App termination',
        message: 'Do you want to close the app?',
        backdropDismiss: false,
        buttons: [{
          text: 'Stay',
          role: 'cancel',
          handler: () => {
            a.alertPresented = false;
            this.router.navigate(['tabs']);
            // console.log('Application exit prevented!');
          }
        }, {
          text: 'Exit',
          handler: () => {
            navigator['app'].exitApp();
          }
        }]
      })
        .then(alert => {
          alert.present();
        });
    }
  }
}
