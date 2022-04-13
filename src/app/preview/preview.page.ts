import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  preview_data: any;
  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.getNoteById('favourites', this.route.snapshot.params.id).subscribe(
      (res: any) => {
        console.log('firebase favourite by id data...==>==>>', res);
        this.preview_data = res;
      }
    )
  }

}
