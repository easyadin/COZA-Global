import { VisibilityService } from './../services/visibility.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnDestroy{

  constructor(private visibilityService: VisibilityService) {}


  visibility;
  private streamSubscription: Subscription;
  
  ngOnInit (){
    this.streamSubscription = this.visibilityService.visibilityChanged.subscribe( visibility =>{
        this.visibility = visibility
    })

   this.visibility = this.visibilityService.getvisibility();
  }

  ngOnDestroy() {
    this.streamSubscription.unsubscribe();
  }

}
