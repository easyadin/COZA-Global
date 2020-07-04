import { Component, OnInit, OnDestroy } from '@angular/core';
import { VisibilityService } from '../services/visibility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit, OnDestroy {
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
