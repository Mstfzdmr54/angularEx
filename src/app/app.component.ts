import { Component } from '@angular/core';
import { ExService } from './services/ex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularEx';

  constructor(
    private exService: ExService
  ) {
    // setTimeout(() => {
    //   this.title = '123'
    // }, 2000);

    this.exService.msgSubject.subscribe(msg => {
      alert(msg)
    })
  }


  // receiveMsg(msg: string) {
  //   alert(msg)
  // }
}
