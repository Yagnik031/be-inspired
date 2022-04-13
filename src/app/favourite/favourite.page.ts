import { Router } from '@angular/router';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  favourite_data: any = [];
  collection1: any = 'favourites';
  constructor(
    private firebase: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void {

    this.firebase.getNotes(this.collection1).subscribe(
      (res: any) => {
        console.log('firebase favourite data===>>>>>>', res);
        this.favourite_data = res;
      }
    )
  }

  async preview(item: any) {
    this.router.navigate([`/preview/${item.id}`]);
  }
}
