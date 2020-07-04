import { Component, OnDestroy } from '@angular/core';
import { VisibilityService } from '../services/visibility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnDestroy{

  
  constructor(private visibilityService: VisibilityService) { }


  // visibility;
  // private streamSubscription: Subscription;

  ngOnInit() {
    // this.streamSubscription = this.visibilityService.visibilityChanged.subscribe(visibility => {
    //   this.visibility = visibility
    // })

    // this.visibility = this.visibilityService.getvisibility();
    this.visibilityService.setVisibility(false)
  }

  ionViewWillEnter(){
    this.visibilityService.setVisibility(false)
  }

  ngOnDestroy() {
    // this.streamSubscription.unsubscribe();
  }
}
