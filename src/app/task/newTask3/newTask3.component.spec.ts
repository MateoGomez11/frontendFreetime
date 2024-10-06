import { ComponentFixture, TestBed } from '@angular/core/testing';

import { newTaskComponent3 } from './newTask3.component';

describe('LoginComponent', () => {
    let component: newTaskComponent3;
    let fixture: ComponentFixture<newTaskComponent3>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [newTaskComponent3]
        })
            .compileComponents();

        fixture = TestBed.createComponent(newTaskComponent3);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
