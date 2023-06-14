import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daily-exp',
  templateUrl: './daily-exp.component.html',
  styleUrls: ['./daily-exp.component.css']
})
export class DailyExpComponent implements OnInit {

  expenseCategory = ["Shopping", "Grocery", "RestroFood", "Bills", "Emi"];

  dailyExpForm = new FormGroup({
    expenseAmount: new FormControl(0),
    expenseDate: new FormControl(new Date(), { updateOn: 'blur' })
  });

  constructor() {

  }

  ngOnInit(): void {
  }

  onSubmit() {

  }


}
