import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DailyExpService } from '../@services/daily-exp.service';

@Component({
    selector: 'app-daily-exp',
    templateUrl: './daily-exp.component.html',
    styleUrls: ['./daily-exp.component.css']
})
export class DailyExpComponent implements OnInit {

    expenseCategories = ["Shopping", "Grocery", "RestroFood", "Bills", "EMI"];

    dailyExpForm = new FormGroup({
        expenseAmount: new FormControl('', Validators.required),
        expenseDate: new FormControl('', { validators: [Validators.required], updateOn: 'blur' },),
        expenseCategory: new FormControl(''),
        expenseNote: new FormControl(''),
    });

    expenesesList: any[] = [];
    isFormSubmitted: boolean = false;

    constructor(private dailyExpService: DailyExpService) {

    }

    refershExpenseList() {
        this.dailyExpService.getExpenses().subscribe((res) => {
            console.log(res)
            this.expenesesList = res
        });
    }

    ngOnInit(): void {
        this.refershExpenseList()
    }

    onSubmit() {
        this.isFormSubmitted = true;
        var payload = {
            expenseDate: new Date(this.dailyExpForm.controls['expenseDate'].value).toLocaleDateString(),
            expenseAmount: parseFloat(this.dailyExpForm.controls['expenseAmount'].value) ?? 0,
            expenseCategory: this.dailyExpForm.controls['expenseCategory'].value,
            expenseNote: this.dailyExpForm.controls['expenseNote'].value
        }
        this.dailyExpService.addExpense(payload).subscribe((res) => {
            console.log(res)
            this.refershExpenseList()
            this.resetForm();
        });
    }
    resetForm() {
        this.dailyExpForm.reset()
        this.dailyExpForm.controls['expenseDate'].markAsPristine()
        this.dailyExpForm.controls['expenseDate'].markAsUntouched();
        this.dailyExpForm.controls['expenseDate'].updateValueAndValidity();
        this.isFormSubmitted = false;
    }

    changeCategory(e: any) {
        console.log(e.target.value);
        this.dailyExpForm.controls['expenseCategory'].setValue(e.target.value, { onlySelf: true })
    }

    OpenPopup() {
        alert("open");
    }
}
