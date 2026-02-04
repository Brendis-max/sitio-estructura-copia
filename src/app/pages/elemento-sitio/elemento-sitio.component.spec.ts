import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoSitioComponent } from './elemento-sitio.component';

describe('ElementoSitioComponent', () => {
  let component: ElementoSitioComponent;
  let fixture: ComponentFixture<ElementoSitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementoSitioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementoSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
