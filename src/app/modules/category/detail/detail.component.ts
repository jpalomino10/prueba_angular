import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api/api.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  formGroup: FormGroup;
  id: string;
  title: string;
  constructor(public _formBuilder: FormBuilder,
    private route: ActivatedRoute, private _apiService: ApiService,
    private _router: Router, private _snackBar: MatSnackBar) {
    this.id = this.route.snapshot.params['id'];
    this.title = this.id ? "Editar" : "Nueva";
  }

  ngOnInit(): void {
    this.validations();
    if (this.id)
      this.getCategory();


  }

  validations() {
    this.formGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status: 0
    });
  }

  getCategory() {
    this._apiService.get(`/auth/categorys/${this.id}`).subscribe((response) => {
      if (response.status.code === 1) {
        const data = response.data;
        this.formGroup.get("name").setValue(data.ctg_nombre);
        this.formGroup.get("description").setValue(data.ctg_descripcion);
        this.formGroup.get("status").setValue(data.ctg_idestado)
      } else {
        this._snackBar.open("Un error ha ocurrido.", 'OK');
      }
    });
  }

  save() {
    if (this.formGroup.valid) {
      this.id ? this.update() : this.create();
    } else {
      this.validateAllFormFields(this.formGroup);
    }
  }

  create() {
    this._apiService.post('/auth/categorys', this.formGroup.value).subscribe((response) => {
      if (response.status.code === 1) {
        this._router.navigate(['/category/all']);
        this._snackBar.open(response.status.message, 'OK', { duration: 5000 });
      } else {
        this._snackBar.open("Un error ha ocurrido.", 'OK');
      }
    });
  }

  update() {
    this._apiService.put(`/auth/categorys/${this.id}`, this.formGroup.value).subscribe((response) => {
      if (response.status.code === 1) {
        this._router.navigate(['/category/all']);
        this._snackBar.open(response.status.message, 'OK', { duration: 5000 });
      } else {
        this._snackBar.open("Un error ha ocurrido.", 'OK');
      }
    });
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
