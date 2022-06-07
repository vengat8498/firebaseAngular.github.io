import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  group(arg0: { name: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors | null))[]; dept: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors | null))[]; description: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors | null))[]; }): any {
    throw new Error('Method not implemented.');
  }
  onedit(student: Student) {
    throw new Error('Method not implemented.');
  }
  form: any;

  constructor(private afs:AngularFirestore) { }


  //add
  addStudent(student:Student){
    student.id=this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  //get
  getAllStudent(){
    return this.afs.collection('/Students').snapshotChanges();
  }


  //Delete
  deleteStudent(student:Student){
    return this.afs.doc('/Students/'+student.id).delete();
  }

 // update
  // updateStudent(student:Student){
  //   this.deleteStudent(student);
  //   this.addStudent(student);
  // }
  update_Student(student:Student){
    return this.afs.doc('/Students/'+student.id).update(student);
  }

}
