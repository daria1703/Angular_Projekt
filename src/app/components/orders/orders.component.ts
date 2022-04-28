import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public posts: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.posts = this.service.getPosts();
  }

}
