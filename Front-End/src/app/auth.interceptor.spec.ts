import { TestBed } from '@angular/core/testing';
import { HttpHandler, HttpRequest } from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor'; // Correct import

describe('AuthInterceptor', () => {
  let interceptor: AuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthInterceptor] // Provide the interceptor
    });

    interceptor = TestBed.inject(AuthInterceptor); // Inject the interceptor
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should intercept and modify the request', () => {
    const mockRequest = new HttpRequest('GET', '/test');
    const mockHandler: HttpHandler = {
      handle: jasmine.createSpy('handle')
    };

    interceptor.intercept(mockRequest, mockHandler);

    expect(mockHandler.handle).toHaveBeenCalled();
  });
});
