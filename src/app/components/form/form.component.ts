import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm: FormGroup;
  value;


  constructor(private fb: FormBuilder, private _serv: FormService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      terms: [false, Validators.requiredTrue]
    });
  }

  //postdata
  onSubmit() {
    console.log(this.myForm.value)
    this._serv.adduser(this.myForm.value).subscribe((res) => {
      console.log(res);
    //  this.ngOnInit()
      alert("user added")
    })

  }
  
  
   

  ngOnInit() {
    this.onSubmit();
  //  this.delete
   
  }





}
