import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCampaignComponent } from './place-campaign.component';

describe('PlaceCampaignComponent', () => {
  let component: PlaceCampaignComponent;
  let fixture: ComponentFixture<PlaceCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
