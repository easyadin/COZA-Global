import { Component } from '@angular/core';
import { VisibilityService } from '../services/visibility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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

  onGroup(){
    console.log("open group")
  }
  ngOnDestroy() {
    // this.streamSubscription.unsubscribe();
  }
}
