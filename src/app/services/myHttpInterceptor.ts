import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class MyHttpInterceptor implements HttpInterceptor {

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const modifiedRequest = req.clone({
        headers: req.headers
            .set('Authorization', 'Bearer adsasdas')
            .set('site-id', 'asdas'),
        body: { ...req.body, c:'c123' }
      })
      return next.handle(modifiedRequest)
  }
}
