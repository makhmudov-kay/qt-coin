import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {
  isVisibleCalculate = false;
  isVisibleLast = false;
  isVisibleModalForm = false;
  value1!: number;
  value2!: number;
  price = 1100;
  month = 1;
  percent = 0.015;
  calcProfit = 495;
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

  formatter(value: number): any {
    if (value === 1) {
      return `A`;
    } else if (value === 2) {
      return `A+`;
    }
    else if (value === 3) {
      return `B`;
    }
    else if (value === 4) {
      return `B+`;
    }
    else if (value === 5) {
      return `C`;
    }
    else if (value === 6) {
      return `D`;
    }
    else if (value === 7) {
      return `E`;
    }
    else if (value === 8) {
      return `F`;
    }
    else if (value === 9) {
      return `G`;
    }
    else if (value === 10) {
      return `H`;
    }
    else if (value === 11) {
      return `S`;
    }
    else if (value === 12) {
      return `W`;
    }
  }

  profit() {
    this.calcProfit = (this.percent * this.price) * (this.month * 30)
  }

  priceChanger() {
    switch (this.value1) {
      case 1:
        this.price = 1100;
        this.percent = 0.015;
        this.profit()
        break;
      case 2:
        this.price = 2000;
        this.percent = 0.03;
        this.profit()
        break;
      case 3:
        this.price = 5000;
        this.percent = 0.03;
        this.profit()
        break;
      case 4:
        this.price = 10000
        this.percent = 0.04;
        this.profit()
        break;
      case 5:
        this.price = 30000
        this.percent = 0.04;
        this.profit()
        break;
      case 6:
        this.price = 50000
        this.percent = 0.06;
        this.profit()
        break;
      case 7:
        this.price = 80000
        this.percent = 0.06;
        this.profit()
        break;
      case 8:
        this.price = 100000
        this.percent = 0.06;
        this.profit()
        break;
      case 9:
        this.price = 150000
        this.percent = 0.08;
        this.profit()
        break;
      case 10:
        this.price = 200000
        this.percent = 0.08;
        this.profit()
        break;
      case 11:
        this.price = 300000
        this.percent = 0.08;
        this.profit()
        break;
      case 12:
        this.price = 500000
        this.percent = 0.1;
        this.profit()
        break;
    
      default:
        break;
    }
  }

  monthChanger() {
    this.month = this.value2;

    switch (this.value2) {
      case 1:
        
        this.profit()
        break;
      case 2:
        
        this.profit()
        break;
      case 3:
        
        this.profit()
        break;
      case 4:
        
        this.profit()
        break;
      case 5:
        
        this.profit()
        break;
      case 6:
        
        this.profit()
        break;
      case 7:
        
        this.profit()
        break;
      case 8:
        this.profit()
        break;
      case 9:        
        this.profit()
        break;
      case 10:
        this.profit()
        break;
      case 11:;
        this.profit()
        break;
      case 12:
        this.profit()
        break;
    
      default:
        break;
    }
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
