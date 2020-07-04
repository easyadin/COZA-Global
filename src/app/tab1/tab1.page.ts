import { Component } from '@angular/core';
import { VisibilityService } from '../services/visibility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private visibilityService: VisibilityService) { }

  visibility;
  private streamSubscription: Subscription;

  ngOnInit() {
    this.streamSubscription = this.visibilityService.visibilityChanged.subscribe(visibility => {
      this.visibility = visibility
    })

    this.visibility = this.visibilityService.getvisibility();
  }

  // ionViewWillLeave(){
  //   this.visibility = this.visibilityService.setVisibility(false);
  // }

  ionViewWillEnter(){
    this.visibility = this.visibilityService.setVisibility(true);
  }

  ngOnDestroy() {
    //  this.streamSubscription.unsubscribe();
  }
}
