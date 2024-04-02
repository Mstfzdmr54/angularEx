import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class HttpExService {


    constructor(private httpClient: HttpClient) {

    }


    postTodo(params:any){
      return  this.httpClient.post('https://jsonplaceholder.typicode.com/todos', params).subscribe()
    }

}