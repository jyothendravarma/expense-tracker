import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.css'],
})
export class DairyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dairyForm = new UntypedFormGroup({
    dairyDate: new UntypedFormControl('', { validators: [Validators.required], updateOn: 'blur' },),
    dairyNote: new UntypedFormControl('', { validators: [Validators.required] }),
  });


}
