import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  size: NzButtonSize = 'large'
  isVisibleCalculate = false;
  isVisibleLast = false;
  isVisibleModalForm = false;
  
  currentLanguage!: string | null
 
  checked = true

  modalForm!: FormGroup

  constructor(private fb: FormBuilder, public translate: TranslateService) {
    this.currentLanguage = localStorage.getItem('lang');
    if (!this.currentLanguage) {
      this.currentLanguage = 'ru';
      localStorage.setItem('lang', this.currentLanguage);
      
    }
    translate.setDefaultLang(this.currentLanguage);
    translate.use(this.currentLanguage);
    
}

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
        'service_nqd9i1p',
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

  changeLang() {
    if (this.currentLanguage === 'ru') {
      this.currentLanguage = 'uzb'
      this.translate.use(this.currentLanguage);
      localStorage.setItem('lang', this.currentLanguage);
    } else if (this.currentLanguage === 'uzb') {
      this.currentLanguage = 'en'
      this.translate.use(this.currentLanguage);
      localStorage.setItem('lang', this.currentLanguage)
    } else if (this.currentLanguage === 'en') {
      this.currentLanguage = 'ru'
      this.translate.use(this.currentLanguage);
      localStorage.setItem('lang', this.currentLanguage)
    }
  }
}
