import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { FirebaseService } from './../../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { ClipboardService } from 'src/app/services/clipboard.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  home_data: any;
  des: any;
  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    private fbservice: FirebaseService,
    private Share: ShareService,
    private clipboard: ClipboardService
  ) { }

  ngOnInit() {


    const notesRef = collection(this.firestore, `home/${this.route.snapshot.params.id}/notes`);
    collectionData(notesRef, { idField: 'id' }).subscribe(
      (res: any) => {
        console.log('sub collection response==>==>>', res);
        // this.des = res.des;

      }
    )

    this.fbservice.getNoteById('home', this.route.snapshot.params.id).subscribe(
      (res: any) => {
        // console.log('firebase home by id data...==>==>>', res);
        this.home_data = res;
        this.des = res.des;

      }
    )
  }

  async favourite(item: any) {
    item.favourited = true;
    this.home_data.favourited = item.favourited;
    this.fbservice.updateNote('home', item, item.favourited)
  }

  async unfavourite(item: any) {
    item.favourited = false;
    this.home_data.favourited = item.favourited;
    this.fbservice.updateNote('home', item, item.favourited)
  }

  async share(item: any) {
    console.log(item);
    this.Share.share(item).then((data: any) => {
      console.log('item shared==>==>>', data);
    })

  }
  async copy(item: any) {
    console.log(item);
    this.clipboard.write(item);

  }


}
