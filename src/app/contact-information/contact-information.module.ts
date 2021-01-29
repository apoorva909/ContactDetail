import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { MaterialSharedModule } from 'src/shared/material-shared.module';
import { ReactiveFormsModule } from '@angular/forms';


const contactRoute: Routes = [
  {
    path: '',
    component: ContactTableComponent
  }
];

@NgModule({
  declarations: [
    ContactInfoComponent,
    ContactTableComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(contactRoute)
  ]
})
export class ContactInformationModule { }
