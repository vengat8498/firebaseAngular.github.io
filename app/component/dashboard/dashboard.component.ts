import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/share/auth.service';
import { DataService } from 'src/app/share/data.service';
import { FormsModule, NgForm } from '@angular/forms';
import { isValidTimestamp } from '@firebase/util';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { ng } from 'src/app/model/ng';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  // public studentForm:FormGroup;

  // constructor(
  //   public studentService:StudentService,
 
  

studentsList:Student[]=[];
onstu:any;
studentObj:Student={
  id:'',
  Name:'',
  Age:'',
  Class:'',
  Email:'',
  Phone:'',
}
id:string='';
Name:string='';
Age:string='';
Class:string='';
Email:string='';
Phone:string='';
  form: any;
  // ) {
  //   this.studentForm=this.forBuilder.group({
  //     Name:[''],
  //     Age:[''],
  //     Class:[''],
  //     Email:[''],
  //     Phone:[''],
  //   })
  //  }
  stu!:FormGroup;
  constructor(private auth:AuthService, private data:DataService, private formbuilder: FormBuilder){}

  ngOnInit(): void {
    
    this.stu=this.formbuilder.group({
      id:[''],
      Name:[''],
      Age:[''],
      Class:[''],
      Email:[''],
      Phone:[''],

    })
    
  this.getAllStudent()
}

//  onSubmit(){
//   //  this.studentService.createStudent(this.studentForm.value);
//  }
register():void{
  this.auth.logout();
}
getAllStudent(){
  this.data.getAllStudent().subscribe(res=>{
    this.studentsList=res.map((e:any)=>{
      const data =e.payload.doc.data();
      data.id=e.payload.doc.id;
      console.log(data);
      return data;
      
    })
  })
}
reset(){
  this.id='';
  this.Name='';
  this.Age='';
  this.Class='';
  this.Email='';
  this.Phone='';
}
addStudent(){
  if(this.Name=='' ||this.Age=='' ||this.Class=='' ||this.Email=='' ||this.Phone==''){
    alert('Fill All');
    return;
  }
this.studentObj.id='';
this.studentObj.Name=this.Name;
this.studentObj.Age=this.Age;
this.studentObj.Class=this.Class;
this.studentObj.Email=this.Email;
this.studentObj.Phone=this.Phone;
this.data.addStudent(this.studentObj);
this.reset();
}
//delete
deleteStudent(student:Student){
  if(window.confirm('Are You Sure to Delete? '
  +student.Name+''+' , '+
  +student.Age+''+' , '+
  +student.Class+''+' , '+
  +student.Email+''+' , '+
  +student.Phone+'')){
    this.data.deleteStudent(student);
  }
}
onSelect(student: Student) {
  // this.data.onselect(onstu);
  // console.log(onstu.Name, onstu.Age, onstu.Class, onstu.Email, onstu.Phone);
  //  return onstu;
  this.stu.controls['id'].setValue(student.id);
  this.stu.controls['Name'].setValue(student.Name);
  this.stu.controls['Age'].setValue(student.Age);
  this.stu.controls['Class'].setValue(student.Class);
  this.stu.controls['Email'].setValue(student.Email);
  this.stu.controls['Phone'].setValue(student.Phone);
  
}
onSubmit(student: Student){
//  this.studentObj.id='';
//  this.studentObj.Name=this.stu.value.Name;
//  this.studentObj.Age=this.stu.value.Age;
//  this.studentObj.Class=this.stu.value.Class;
//  this.studentObj.Email=this.stu.value.Email;
// this.studentObj.Phone=this.stu.value.Phone;
// this.studentObj.id=this.studentObj.id;
// this.data.update_Student(this.studentObj.id, this.studentObj);
// this.studentObj.id='';
// this.studentObj.Name=this.Name;
// this.studentObj.Age=this.Age;
// this.studentObj.Class=this.Class;
// this.studentObj.Email=this.Email;
// this.studentObj.Phone=this.Phone;
// this.data.update_Student(this.studentObj)
// console.log(this.data);
// if(this.Name=='' ||this.Age=='' ||this.Class=='' ||this.Email=='' ||this.Phone==''){
//   alert('Fill All');
//   return;
// }
// this.studentObj.id=this.id;
// this.studentObj.Name=this.Name;
// this.studentObj.Age=this.Age;
// this.studentObj.Class=this.Class;
// this.studentObj.Email=this.Email;
// this.studentObj.Phone=this.Phone;
// this.data.update_Student(this.studentObj);
// this.data.update_Student(this.stu.value);
this.data.update_Student(student);
this.reset();
}
}

