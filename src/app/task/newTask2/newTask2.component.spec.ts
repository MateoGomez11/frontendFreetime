import { ComponentFixture, TestBed } from '@angular/core/testing';

import { newTaskComponent2 } from './newTask2.component';

describe('LoginComponent', () => {
    let component: newTaskComponent2;
    let fixture: ComponentFixture<newTaskComponent2>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [newTaskComponent2]
        })
            .compileComponents();

        fixture = TestBed.createComponent(newTaskComponent2);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
