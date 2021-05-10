import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
import { Car } from '../models/car';

@Injectable({
    providedIn: 'root',
})
class AleloFrotaService extends __BaseService {
    constructor(
        config: __Configuration,
        http: HttpClient
    ) {
        super(config, http);
    }

    carsUsingGET(params?: AleloFrotaService.FilterParams): __Observable<Car[]> {
        return this.carsUsingGETResponse(params).pipe(
            __map(_r => _r.body as Car[])
        );
    }

    carsUsingGETResponse(params?: AleloFrotaService.FilterParams): __Observable<__StrictHttpResponse<Car[]>> {
        let url = this.rootUrl + `vehicle?${params?.filter ? 'filter=' + params.filter : ''}${params?.page && params?.limit ? '&page=' + params.page + '&limit=' + params.limit : ''}`

        let req = new HttpRequest<any>('GET', url);

        return this.http.request<any>(req).pipe(
            __filter(_r => _r instanceof HttpResponse),
            __map((_r) => _r as __StrictHttpResponse<Car[]>)
        );
    }

    carUsingGET(params: AleloFrotaService.FindCarParams): __Observable<Car> {
        return this.carUsingGETResponse(params).pipe(
            __map(_r => _r.body as Car)
        );
    }

    carUsingGETResponse(params: AleloFrotaService.FindCarParams): __Observable<__StrictHttpResponse<Car>> {
        let req = new HttpRequest<any>('GET', this.rootUrl + `/vehicle/${params.id}`);

        return this.http.request<any>(req).pipe(
            __filter(_r => _r instanceof HttpResponse),
            __map((_r) => _r as __StrictHttpResponse<Car>)
        );
    }

    carUsingPOSTOrPUT(params: AleloFrotaService.SaveCarParams): __Observable<Car> {
        return this.carUsingPOSTOrPUTResponse(params).pipe(
            __map(_r => _r.body as Car)
        );
    }

    carUsingPOSTOrPUTResponse(params: AleloFrotaService.SaveCarParams): __Observable<__StrictHttpResponse<Car>> {
        let __body = params.car;
        let __method = __body.id ? 'PUT' : 'POST';
        console.log(__body, __body.id, __method);


        let req = new HttpRequest<any>(
            __method,
            this.rootUrl + `/vehicle/${__body.id || ''}`,
            __body);

        return this.http.request<any>(req).pipe(
            __filter(_r => _r instanceof HttpResponse),
            __map((_r) => _r as __StrictHttpResponse<Car>)
        );
    }

    carUsingDELETE(params: AleloFrotaService.FindCarParams): __Observable<Car> {
        return this.carUsingDELETEResponse(params).pipe(
            __map(_r => _r.body as Car)
        );
    }

    carUsingDELETEResponse(params: AleloFrotaService.FindCarParams): __Observable<__StrictHttpResponse<Car>> {
        let req = new HttpRequest<any>('DELETE', this.rootUrl + `/vehicle/${params.id}`);

        return this.http.request<any>(req).pipe(
            __filter(_r => _r instanceof HttpResponse),
            __map((_r) => _r as __StrictHttpResponse<Car>)
        );
    }
}

module AleloFrotaService {
    export interface FilterParams {
        filter?: string;
        page?: number;
        limit?: number;
    }

    export interface FindCarParams {
        id: number
    }

    export interface SaveCarParams {
        car: Car
    }
}

export { AleloFrotaService }
