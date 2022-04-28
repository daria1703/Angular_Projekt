import { AbstractType, Component } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Post} from './post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DC-kol2spp';

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: any;
  post: any;

  getPosts(){
    //pobranie wszystkich postów
    this.posts = this.http.get(this.ROOT_URL + '/posts')
  }
  getPost(){
    //pobranie wszystkich postów
    let params = new HttpParams().set('id', '1');
    this.post = this.http.get(this.ROOT_URL + '/posts', {params})
  }

  constructor(private http: HttpClient){}
}
