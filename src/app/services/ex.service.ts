import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExService {

  msgSubject = new Subject<string>()

  constructor() { }
}
