import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoplaceComponent } from './photoplace.component';

describe('PhotoplaceComponent', () => {
  let component: PhotoplaceComponent;
  let fixture: ComponentFixture<PhotoplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoplaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
