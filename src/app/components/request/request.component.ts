import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less'],
})
export class RequestComponent implements OnInit {
  requestForm!: FormGroup;
  isVisibleLast = false

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      username: [null],
      email: [null],
      phone: [null],
    });
  }

  submitForm(e: Event) {
    this.isVisibleLast = true
    emailjs
      .sendForm(
        'service_gdxrgek',
        'template_7b6rgcs',
        e.target as HTMLFormElement,
        '1odQ4IeCytG309RXM'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text, result.status);
          if(result.status) {
            this.requestForm.controls['email'].setValue('');
            this.requestForm.controls['username'].setValue('');
            this.requestForm.controls['phone'].setValue('');
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  handleCancelLast() {}
  handleOkLast() {
    this.isVisibleLast = false
  }
}
