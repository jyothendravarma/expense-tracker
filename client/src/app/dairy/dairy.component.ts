import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.css'],
})
export class DairyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dairyForm = new FormGroup({
    dairyDate: new FormControl('', { validators: [Validators.required], updateOn: 'blur' },),
    dairyNote: new FormControl('', { validators: [Validators.required] }),
  });


}
