import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {

  @Input('msg') msg: string
  @Output('sendMsg') sendMsg = new EventEmitter<string>()

  ngOnChanges(changes: SimpleChanges) {
    if (changes['msg'].currentValue === '123') alert('msg 123 oldu')
  }

  onClick(myMsg: string) {
    this.sendMsg.emit(myMsg)
  }



}
