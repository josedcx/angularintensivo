import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopularComponent } from './list-popular.component';

describe('ListPopularComponent', () => {
    let component: ListPopularComponent;
    let fixture: ComponentFixture<ListPopularComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListPopularComponent],
            imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListPopularComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
