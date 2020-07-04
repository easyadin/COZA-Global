import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectedbookPage } from './selectedbook.page';

describe('SelectedbookPage', () => {
  let component: SelectedbookPage;
  let fixture: ComponentFixture<SelectedbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
