import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  title = 'DC-kol2spp';

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  post: any;

  constructor(private http: HttpClient) { }

  getPosts(){
    //pobranie wszystkich postów
    return this.http.get(this.ROOT_URL + '/posts');
  }
}
