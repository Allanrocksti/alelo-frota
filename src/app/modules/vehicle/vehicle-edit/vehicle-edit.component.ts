import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/shared/api/models';
import { AleloFrotaService } from 'src/app/shared/api/services';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss'],
})
export class VehicleEditComponent implements OnInit {
  showModalClearAll: boolean = false;
  showModalError: boolean = false;
  inFetch: boolean = true;
  onError: boolean = false;

  idEdit: number | undefined = undefined;
  form: FormGroup | undefined = undefined;

  constructor(
    private _headerService: HeaderService,
    private _aleloFrotaService: AleloFrotaService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setHeader();

    this._activatedRoute.params.subscribe((params) => {
      this.idEdit = params.id;
      if (this.idEdit) {
        this._aleloFrotaService.carUsingGET({ id: this.idEdit }).subscribe(
          (car) => {
            this.initForm(car);
            this.inFetch = false;
          },
          (err) => {
            this.onError = true;
            this.inFetch = false;
          }
        );
      } else {
        this.inFetch = false;
      }
      this.initForm();
    });
  }

  setHeader() {
    this._headerService.title = 'Create Vehicle';
    this._headerService.subtitle = '';
  }

  initForm(car?: Car) {
    this.form = this._fb.group({
      plate: ['', [Validators.required]],
      model: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      color: ['', [Validators.required]],
      status: [false],
    });

    if (car) {
      this.form.patchValue({
        plate: car.plate.replaceAll(/-/g, ''),
        model: car.model,
        manufacturer: car.manufacturer,
        color: car.color,
        status: car.status,
      });

      this.form.updateValueAndValidity();
    }
  }

  openModalClearForms(e: any) {
    e.preventDefault();
    this.showModalClearAll = true;
  }

  onSubmit() {
    if (this.form?.valid) {
      let form = this.form.value;
      form.plate = form.plate.toUpperCase();
      form.plate = `${form.plate.slice(0, 3)}-${form.plate.slice(3, 8)}`;

      if (this.idEdit) {
        form.id = this.idEdit;
      }

      this._aleloFrotaService.carUsingPOSTOrPUT({ car: form }).subscribe(
        (res) => this._router.navigate(['admin/vehicle']),
        (err) => (this.showModalError = true)
      );
    } else {
      this.showValidationMsg(this.form);
    }
  }

  showValidationMsg(formGroup: FormGroup | undefined) {
    if (formGroup) {
      for (const key in formGroup.controls) {
        if (formGroup.controls.hasOwnProperty(key)) {
          const control: FormControl = <FormControl>formGroup.controls[key];

          if (Object.keys(control).includes('controls')) {
            const formGroupChild: FormGroup = <FormGroup>(
              formGroup.controls[key]
            );
            this.showValidationMsg(formGroupChild);
          }

          control.markAsTouched();
        }
      }
    }
  }

  clearForms() {
    this.form?.reset();
    this.dismissModals();
  }

  dismissModals() {
    this.showModalClearAll = false;
    this.showModalError = false;
  }
}
