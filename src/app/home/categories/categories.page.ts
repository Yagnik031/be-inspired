import { FirebaseService } from './../../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  home_data: any;
  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.getNoteById('home', this.route.snapshot.params.id).subscribe(
      (res: any) => {
        console.log('firebase home by id data...==>==>>', res);
        this.home_data = res;
      }
    )
  }
}
