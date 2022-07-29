import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../student';
import {Class} from '../../class';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    class: new FormControl('', Validators.required)
  });
  student: Student;
  classList: Class[];

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.studentService.findId(id).subscribe(
      value => this.studentForm.patchValue(value)
    );

    this.studentService.showClassList().subscribe(
      value => this.classList = value);
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  edit() {
    this.student = this.studentForm.value;
    this.studentService.edit(this.student).subscribe(
      value => {
      },
      error => {
      },
      () => {
        this.router.navigate(['/./edit-successful', this.student.id]);
      }
    );
  }
}
