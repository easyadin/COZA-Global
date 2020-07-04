import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnexplorePage } from './onexplore.page';

describe('OnexplorePage', () => {
  let component: OnexplorePage;
  let fixture: ComponentFixture<OnexplorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnexplorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnexplorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
