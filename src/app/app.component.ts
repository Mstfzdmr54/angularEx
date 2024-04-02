import { Component, OnInit } from '@angular/core';
import { ExService } from './services/ex.service';
import { HttpExService } from './services/httpEx.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularEx';

  constructor(
    // private exService: ExService,
    private httpExService: HttpExService
  ) {
    // setTimeout(() => {
    //   this.title = '123'
    // }, 2000);

    // this.exService.msgSubject.subscribe(msg => {
    //   alert(msg)
    // })


  }

  ngOnInit(): void {
    this.httpExService.postTodo({a :'abc' })
  }




  // receiveMsg(msg: string) {
  //   alert(msg)
  // }
}
