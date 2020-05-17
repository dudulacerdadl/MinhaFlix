import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullmetalPage } from './fullmetal.page';

describe('FullmetalPage', () => {
  let component: FullmetalPage;
  let fixture: ComponentFixture<FullmetalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullmetalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullmetalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
