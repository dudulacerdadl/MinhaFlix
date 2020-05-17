import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TokyoGhoulPage } from './tokyo-ghoul.page';

describe('TokyoGhoulPage', () => {
  let component: TokyoGhoulPage;
  let fixture: ComponentFixture<TokyoGhoulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokyoGhoulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TokyoGhoulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
