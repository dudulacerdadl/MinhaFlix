import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NarutoPage } from './naruto.page';

describe('NarutoPage', () => {
  let component: NarutoPage;
  let fixture: ComponentFixture<NarutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NarutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
