import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ContactInfoComponent } from '../contact-info/contact-info.component';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  contactColumn: string[] = ['FirstName', 'LastName', 'Email', 'PhoneNumber', 'Status', 'Actions'];
  contactData = [
   {id: 0, FirstName: 'Apoorva', LastName: 'Tijare', Email: 'tijareapoorva@gmail.com', PhoneNumber: '9860920584', Status:'Active'}
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  openContactForm() {
      const dialogRef = this.dialog.open(ContactInfoComponent, {
        width: '500px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result) {
        result['id'] = this.contactData[this.contactData.length - 1].id + 1;
        this.contactData = [...this.contactData, result];
        }
      });

  }
  editContactForm(id) {
    const dialogRef = this.dialog.open(ContactInfoComponent, {
      width: '500px',
      data: this.contactData[id]
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      result['id'] = id;
      this.contactData.splice(id, 1, result);
      this.contactData = [...this.contactData];
      }
    });

}

inActiveContact(id) {
  this.contactData[id].Status = 'InActive';
  this.contactData = [...this.contactData];
}

}

