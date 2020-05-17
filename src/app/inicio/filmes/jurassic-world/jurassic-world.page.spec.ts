import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JurassicWorldPage } from './jurassic-world.page';

describe('JurassicWorldPage', () => {
  let component: JurassicWorldPage;
  let fixture: ComponentFixture<JurassicWorldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurassicWorldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JurassicWorldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
