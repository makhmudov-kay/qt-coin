import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less']
})
export class RequestComponent implements OnInit {
  requestForm!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required]
    })
  }

  submitForm() {
    this.requestForm.controls['email'].setValue('')
    this.requestForm.controls['name'].setValue('')
    this.requestForm.controls['phone'].setValue('')
  }
}
