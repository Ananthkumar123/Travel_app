import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

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
  ngOnInit() { //down
    this.onSubmit;
   // this.delete
   // this.getUser();
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
  //get
  // ids:any;
  // private getUser() {
  //    this._serv.getUser1().subscribe((res)=>{
  //     console.log(res);
  //    })
    
  // }
  //delete
   

 

}
