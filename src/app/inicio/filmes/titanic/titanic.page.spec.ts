import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitanicPage } from './titanic.page';

describe('TitanicPage', () => {
  let component: TitanicPage;
  let fixture: ComponentFixture<TitanicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitanicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitanicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
