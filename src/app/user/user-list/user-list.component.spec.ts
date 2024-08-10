import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(
      of([
        {
          id: 1,
          name: 'John Doe',
        },
        { id: 2, name: 'Julia Doe' },
      ])
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users from UserService on init', () => {
    fixture.detectChanges(); //starts onInit and updates all the data bindings, to test a property of a component which gets
    //initialized in the ngOnInit
    expect(userServiceSpy).toHaveBeenCalled();
  });

  it('should retrieve the users from the UserService when the refresh button is clicked', () => {
    fixture.detectChanges(); //starting the lifecycle
    userServiceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('button')); //crazy way to add a button in this circus
    button.triggerEventHandler('click', null);

    expect(userServiceSpy).toHaveBeenCalled();
  });
});
