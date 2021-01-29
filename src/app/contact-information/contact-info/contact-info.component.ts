import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {


  isSubmit: boolean;
  submitted: boolean;
  contactForm = new FormGroup({});
  constructor(private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public data) { }

  

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      FirstName: [this.data?.FirstName, Validators.required],
      LastName: [this.data?.LastName, Validators.required],
      Email: [this.data?.Email, Validators.required],
      PhoneNumber: [this.data?.PhoneNumber, Validators.required],
      Status: ['Active']
    });

    this.isSubmit = this.data ? true : false;
    
  }

  get contactFormGetter(){
    return this.contactForm;
  }

  submitData() {
    this.isSubmit =  this.contactForm.valid ? true : false;
  }

  validatePhoneNumber(event) {
    if(event.charCode >=48 && event.charCode <=57) {
      return true;
    } else {
      return false;
    }
  }

}
