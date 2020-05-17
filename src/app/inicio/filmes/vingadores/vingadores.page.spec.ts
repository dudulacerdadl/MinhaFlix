import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VingadoresPage } from './vingadores.page';

describe('VingadoresPage', () => {
  let component: VingadoresPage;
  let fixture: ComponentFixture<VingadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VingadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VingadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
