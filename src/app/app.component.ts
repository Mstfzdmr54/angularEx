import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularEx';

  constructor() {
    setTimeout(() => {
      this.title = '123'
    }, 2000);
  }


  receiveMsg(msg: string) {
    alert(msg)
  }
}
