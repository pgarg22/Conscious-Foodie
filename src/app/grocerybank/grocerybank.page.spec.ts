import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrocerybankPage } from './grocerybank.page';

describe('GrocerybankPage', () => {
  let component: GrocerybankPage;
  let fixture: ComponentFixture<GrocerybankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerybankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrocerybankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
