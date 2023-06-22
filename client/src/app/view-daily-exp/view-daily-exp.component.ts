import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-daily-exp',
  templateUrl: './view-daily-exp.component.html',
  styleUrls: ['./view-daily-exp.component.css']
})
export class ViewDailyExpComponent implements OnInit {

  expenseColumns = ["Date", "Amount", "Category", "Note"]
  @Input('list') dailyExpList: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
