import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required, Validators.maxLength(50)],
      email: ['', Validators.required, Validators.email],
      sendCatalog: true
    })
  }

  // save(customerForm: NgForm): void {
  //   console.log(customerForm.form);
  //   console.log('Saved: ' + JSON.stringify(customerForm.value));
  // }

  populateTestData(){
    this.customerForm.patchValue({
      firstName: 'test',
      lastName: 'test',
      sendCatalog: false
    })
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
