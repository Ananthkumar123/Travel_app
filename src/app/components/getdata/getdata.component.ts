import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent {
myForm: FormGroup;
onSubmit: any;
handleupdate:boolean = false;
   

  constructor(private _fb:FormBuilder ,private _service: FormService, private _serv: HttpClient, ) { 
    this.myForm = this._fb.group({
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

  //get
  ids: any;
   getUser() {
     this._service.getUser1().subscribe((res)=>{
      console.log(res);
      this.ids=res;
      
     })
  }

  delid(Id){
    this._service.deleteuser(Id).subscribe((res)=>{
      console.log(res);
      alert("deleted sucesful");
      this.getUser();

    })
  }
  updateuser(id)
  {
    this._service.edituser(id).subscribe((result)=>{

      console.log(result)
      alert("updated sucesfully")
    })
  }
   
  ngOnInit() {

    this.getUser();
    
    
  }
 
}




