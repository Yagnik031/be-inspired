import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  list: any = [];
  story: any = [];
  collection1: any = 'home';
  collection2: any = 'stories';
  constructor(
    private router: Router,
    private alertController: AlertController,
    private firestore: Firestore,
    private fbservice: FirebaseService
  ) { }




  ionViewWillEnter(): void {

    this.fbservice.getNotes(this.collection1).subscribe(
      (res: any) => {
        // console.log('firebase home data===>>>>>>', res);
        this.list = res;
      }
    )



    this.fbservice.getNotes(this.collection2).subscribe(
      (res: any) => {
        // console.log('firebase stories data===>>>>>>', res);
        this.story = res;
      }
    )


  }

  async favouritePage() {
    this.router.navigate(['/favourite']);
  }

  async OpenStory(item: any) {
    console.log(item);
    this.router.navigate([`/open-story/${item.id}`]);
  }


  async categories(item: any) {
    // console.log(item);
    this.router.navigate([`/categories/${item.id}`])
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'info-alert',
      header: 'Be Inspired!',
      message: 'Check out the best collection of Lessons in Life Quotes, Life Motivation Quotes! <br> -Supported by Itcodehelp @2022',
      buttons: [
        {
          text: 'Share App',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'More Apps',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
