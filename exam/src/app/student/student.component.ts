import {Component, OnInit} from '@angular/core';
import {StudentService} from './student.service';
import {Student} from '../student';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Class} from '../class';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList: Student[];
  idStudent: string;
  student: Student;
  page = 1;
  maxPage: number;
  length: number;
  searchByName = '';
  classList: Class[];
  studentForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    class: new FormControl('', Validators.required)
  });

  constructor(private studentService: StudentService,
              private toast: ToastrService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.studentService.getMaxPage().subscribe(value => this.length = value.length,
      error => {
      },
      () => {
        if (this.length % 4 === 0) {
          this.maxPage = this.length / 4;
        } else {
          this.maxPage = this.length / 4 + 1;
        }
      });

    this.studentService.showStudentList(this.searchByName, this.page).subscribe(
      value => {
        this.studentList = value;
      },
      error => {
      },
      () => {
        const toast = this.activatedRoute.snapshot.params.toast;
        const id = this.activatedRoute.snapshot.params.id;
        if (toast === 'edit-successful') {
          this.studentService.findId(id).subscribe(
            value => {
              this.student = value;
            },
            error => {
            },
            () => {
              this.toast.success('Edit successful!', this.student.name);
            }
          );
        }
      });

    this.getClassList();
  }

  getStudentList() {
    this.studentService.showStudentList(this.searchByName, this.page).subscribe(
      value => this.studentList = value);
  }

  getClassList() {
    this.studentService.showClassList().subscribe(
      value => this.classList = value);
  }

  valueOfId(id: string) {
    this.idStudent = id;
  }

  delete() {
    this.studentService.findId(this.idStudent).subscribe(
      value => this.student = value
    );
    this.studentService.delete(this.idStudent).subscribe(
      value => {
      },
      error => {
      },
      () => {
        this.getStudentList();
        this.toast.success('Delete successful!', this.student.name);
      }
    );
  }

  addNew() {
    this.student = this.studentForm.value;
    this.studentService.save(this.student).subscribe(
      value => {
      },
      error => {
      },
      () => {
        this.getStudentList();
        this.toast.success('Add new successful!', this.student.name);
        this.studentForm.reset();
      }
    );
  }

  previous() {
    --this.page;
    this.studentService.showStudentList(this.searchByName, this.page).subscribe(value => this.studentList = value);
  }

  next() {
    ++this.page;
    console.log(this.searchByName);
    this.studentService.showStudentList(this.searchByName, this.page).subscribe(value => this.studentList = value);
  }

  search() {
    console.log(this.searchByName);
    this.studentService.showStudentList(this.searchByName, 1).subscribe(
      value => this.studentList = value);
  }

  home() {
    this.studentService.showStudentList('', 1).subscribe(
      value => {
        this.studentList = value;
      },
      error => {
      },
      () => {
        this.page = 1;
        this.searchByName = '';
      }
    );

  }
}
