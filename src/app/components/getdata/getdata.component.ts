import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent {
  myForm: FormGroup = this._fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    date: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    email: ['', [Validators.required, Validators.email]],
    terms: [false, Validators.requiredTrue]
  });
  onSubmit: any;
  handleupdate;
  id: any;
  updateForm:any;

  constructor(private _fb: FormBuilder, private _service: FormService, private _serv: HttpClient,) {

  }
   

  ngOnInit() {
    this.getUser();
  }

  ids:any[]=[];
  getUser() {
    this._service.getUser1().subscribe((res) => {
      console.log(res);
      this.ids = res;//storing the server data
    })
  }

  delid(Id) {
    this._service.deleteuser(Id).subscribe((res) => {
      console.log(res);
      alert("deleted sucesful");
      this.getUser();

    })
  }
  updateuser(uid) {
    this.handleupdate = true;
    this.updateForm=this.ids.find((res)=>{
      if(res.id===uid){
        return res
      }
    })
    this.id=uid
    this.myForm.patchValue({
      name: this.updateForm.name,
      lastname: this.updateForm.lastname,
      age: this.updateForm.age,
      gender: this.updateForm.gender,
      date: this.updateForm.date,
      mobile: this.updateForm.mobile,
      email: this.updateForm.email,
      terms: this.updateForm.terms
    });

  }

  Submit() {
    this._service.edituser(this.id, this.myForm.value).subscribe((result) => {
      console.log(result)
      alert("  updated sucesfully")
      this.getUser();
    })
    this.handleupdate = false;//after updateing closing the form 
  }
}




