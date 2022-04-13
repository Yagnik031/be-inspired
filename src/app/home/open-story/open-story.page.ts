import { FirebaseService } from './../../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-story',
  templateUrl: './open-story.page.html',
  styleUrls: ['./open-story.page.scss'],
})
export class OpenStoryPage implements OnInit {

  story_data: any;
  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.getNoteById('stories', this.route.snapshot.params.id).subscribe(
      (res: any) => {
        console.log('firebase stories by id data...==>==>>', res);
        this.story_data = res;
      }
    )
  }

}
