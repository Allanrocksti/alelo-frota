import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/shared/api/models';
import { AleloFrotaService } from 'src/app/shared/api/services';
import { HeaderFilterService } from 'src/app/shared/services/header-filter.service';
import { HeaderService } from 'src/app/shared/services/header.service';

const LIMIT_OF_PAGE: number = 10;

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit, OnDestroy {
  inFetch: boolean = true;
  onError: boolean = false;

  showModalDelete: boolean = false;
  idDeleteCar: number | undefined = undefined;

  tableData: Car[] = [];
  indexTableList: number[] = [];
  indexTablePagination: number[] = [];
  page: number = 0;

  constructor(
    private _headerService: HeaderService,
    private _aleloFrotaService: AleloFrotaService,
    private _router: Router,
    private _headerFilterService: HeaderFilterService
  ) {}

  ngOnInit(): void {
    this.setHeader();
    this.pushData();

    this._headerFilterService.observableTextFilter().subscribe((filter) => {
      this._aleloFrotaService.carsUsingGET({ filter: filter }).subscribe(
        (cars) => this.resolveGetCars(cars),
        (err) => this.resolveGetCarsError()
      );
    });
  }

  ngOnDestroy(): void {
    this._headerFilterService.visible = false;
  }

  setHeader() {
    this._headerService.title = 'Vehicle Management';
    this._headerService.subtitle = 'Listed here are all vehicles in the fleet';

    this._headerFilterService.visible = true;
  }

  pushData() {
    this._aleloFrotaService.carsUsingGET().subscribe(
      (cars) => this.resolveGetCars(cars),
      (err) => this.resolveGetCarsError()
    );
  }

  refreshData() {
    this.inFetch = true;
    this.tableData = [];

    this._aleloFrotaService.carsUsingGET().subscribe(
      (cars) => this.resolveGetCars(cars),
      (err) => this.resolveGetCarsError()
    );
  }

  resolveGetCars(cars: Car[]) {
    this.tableData = cars;
    this.page = 0;
    let qtdIndex =
      Number(String(this.tableData.length / LIMIT_OF_PAGE).split('.')[0]) + 1;

    this.indexTableList = [];
    for (let i = 0; i < qtdIndex; i++) this.indexTableList.push(i);
    this.indexTablePagination = this.indexTableList.slice(0, 4);
    this.inFetch = false;
  }

  resolveGetCarsError() {
    this.inFetch = false;
    this.onError = true;
  }

  toggleDetails(el: any) {
    const iconToggle = el.target?.localName.match('mat-icon')
      ? el.target
      : el.target?.children[0];
    const elRowDetail =
      iconToggle.parentNode.parentNode.parentNode.parentNode.nextElementSibling;
    elRowDetail?.classList.toggle('hidden');

    iconToggle.innerHTML = elRowDetail.classList.contains('hidden')
      ? 'add'
      : 'remove';
  }

  navigateToEditCar(id: string | undefined) {
    if (id) this._router.navigate([`admin/vehicle/register/${id}`]);
  }

  openModalDeleteCar(id: string | undefined) {
    this.showModalDelete = true;
    this.idDeleteCar = Number(id);
  }

  dismissModalDeleteCar() {
    this.showModalDelete = false;
  }

  removeCar() {
    if (this.idDeleteCar)
      this._aleloFrotaService
        .carUsingDELETE({ id: Number(this.idDeleteCar) })
        .subscribe((_) => {
          this.refreshData();
          this.dismissModalDeleteCar();
        });
  }

  setPagination(i: number) {
    if (i === this.page) return;

    this.page = i;
    const maxIndex =
      this.page + 3 <= this.indexTableList.length
        ? this.page + 3
        : this.indexTableList.length;
    const minIndex = this.page - 1 >= 0 ? this.page - 1 : 0;
    this.indexTablePagination = this.indexTableList.slice(minIndex, maxIndex);
  }
}
