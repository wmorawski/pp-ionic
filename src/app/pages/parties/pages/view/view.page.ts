import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  id;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.id = this.router.snapshot.params.id;
  }

}
