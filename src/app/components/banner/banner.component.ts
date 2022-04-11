import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {
  value1 = 30;
  isVisibleCalculate = false;
  isVisibleLast = false;
  isVisibleModalForm = false;
 
  checked = true

  modalForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.modalForm = this.fb.group({
      username: [null],
      email: [null],
      phone: [null],
      checked: [true]
    })
  }

  submit(e: Event) {
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
          this.modalForm.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
      this.isVisibleModalForm = false;
      this.isVisibleLast = true;
  }

  showModalCalc(): void {
    this.isVisibleCalculate = true;
  }

  handleOkCalc(): void {
    console.log('Button ok clicked!');
    this.isVisibleCalculate = false;
    this.isVisibleModalForm = true
  }

  handleCancelCalc(): void {
    console.log('Button cancel clicked!');
    this.isVisibleCalculate = false;
  }

  showModalLast(): void {
    this.isVisibleLast = true;
  }

  handleOkLast(): void {
    console.log('Button ok clicked!');
    this.isVisibleLast = false;
  }

  handleCancelLast(): void {
    console.log('Button cancel clicked!');
    this.isVisibleLast = false;
  }

  showModalForm(): void {
    this.isVisibleModalForm = true;
  }


  handleOkModalForm(): void {
    console.log('Button ok clicked!');
    this.isVisibleModalForm = false;
  }

  handleCancelModalForm(): void {
    console.log('Button cancel clicked!');
    this.isVisibleModalForm = false;
  }
}
