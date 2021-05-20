import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  form = new FormGroup({});
  model = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'input',
      focus: false,
      templateOptions: {
        label: 'First Name',
        placeholder: 'First Name',
        required: true,
      }
    },
    {
      key: 'lastname',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        placeholder: 'Last Name',
        required: true,
      }
    },
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Username',
        placeholder: 'Username',
        required: true,
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Password',
        required: true,
      }
    },
    {
      key: 'textarea',
      type: 'textarea',
      templateOptions: {
        label: 'About You',
        placeholder: 'About You',
        required: true,
      }
    },
    {
      key: 'currentjob',
      type: 'input',
      defaultValue: 'Freelancer',
      templateOptions: {
        label: 'Current Job',
        placeholder: 'Current Job',
        required: true,
      }
    },
    {
      key: 'married',
      type: 'checkbox',
      templateOptions: {
        label: 'Married',
      }
    },
    {
      key: 'country',
      type: 'select',
      templateOptions: {
        label: 'Country',
        placeholder: 'Country',
        required: true,
        options: [
          { label: 'USA', value: '1' },
          { label: 'Canada', value: '2' },
          { label: 'UK', value: '3' },
          { label: 'Australia', value: '4' },
        ]
      }
    },
    {
      key: 'radio',
      type: 'radio',
      templateOptions: {
        label: 'Radio',
        required: true,
        options: [
          { label: 'M', value: 'M' },
          { label: 'F', value: 'F' },
        ]
      }
    }
  ];

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      //alert(JSON.stringify(this.model, null, 2));
      this.alertService.success(JSON.stringify(this.model, null, 2));
    }
  }

}
