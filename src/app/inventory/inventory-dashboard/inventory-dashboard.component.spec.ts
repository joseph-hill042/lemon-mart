import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InventoryDashboardComponent } from './inventory-dashboard.component'
import { commonTestingModules } from '../../common/common.testing'

describe('InventoryDashboardComponent', () => {
  let component: InventoryDashboardComponent
  let fixture: ComponentFixture<InventoryDashboardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      declarations: [InventoryDashboardComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDashboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
