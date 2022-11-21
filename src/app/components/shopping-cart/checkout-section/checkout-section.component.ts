import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/services/form/forms.service';

@Component({
  selector: 'app-checkout-section',
  templateUrl: './checkout-section.component.html',
  styleUrls: ['./checkout-section.component.css'],
})
export class CheckoutSectionComponent implements OnInit {
  constructor(private formService: FormsService) {}

  ngOnInit(): void {}

  errorMsg: string = '';

  save(form: any) {
    const userInfo = form.value;
    if (this.formService.isValid(userInfo)) {
      console.log(userInfo);
    } else {
      this.errorMsg = this.formService.errorMsg;
    }
  }
  clearError() {
    this.formService.clearError();
    this.errorMsg = this.formService.errorMsg;
  }
}
