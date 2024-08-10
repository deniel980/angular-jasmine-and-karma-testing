import { UserService } from './user.service';
import { TestBed } from '@angular/core/testing';

describe('UserService', () => {
  let service = new UserService();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy;
  });

  it('should get user list', () => {
    expect(
      service.getUsers().subscribe((users) => {
        expect(users.length).toBeGreaterThan(0);
      })
    );
  });
});
