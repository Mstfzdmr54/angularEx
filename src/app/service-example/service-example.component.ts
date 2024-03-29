import { Component } from '@angular/core';
import { ExService } from '../services/ex.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss']
})
export class ServiceExampleComponent {

  constructor(
    private exService: ExService,
  ){

  }

  sendMsg(msg: string) {
    this.exService.msgSubject.next(msg)
  }
}
