import { ComponentFixture, TestBed } from '@angular/core/testing';

import { newTaskComponent } from './newTask.component';

describe('LoginComponent', () => {
    let component: newTaskComponent;
    let fixture: ComponentFixture<newTaskComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [newTaskComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(newTaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
