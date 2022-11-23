import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  showOrders: boolean = true;
  showFeedback: boolean = false;
  feedbackOrderId: string = '';

  constructor() {}

  ngOnInit(): void {}

  toggleFeedback(id: string = '') {
    this.feedbackOrderId = id;
    this.showFeedback = !this.showFeedback;
  }
}
