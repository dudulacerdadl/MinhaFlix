import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeathNotePage } from './death-note.page';

describe('DeathNotePage', () => {
  let component: DeathNotePage;
  let fixture: ComponentFixture<DeathNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeathNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
