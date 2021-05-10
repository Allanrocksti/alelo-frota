
import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

class ParameterCodec implements HttpParameterCodec {
    encodeKey(key: string): string {
        return encodeURIComponent(key);
    }

    encodeValue(value: string): string {
        return encodeURIComponent(value);
    }

    decodeKey(key: string): string {
        return decodeURIComponent(key);
    }

    decodeValue(value: string): string {
        return decodeURIComponent(value);
    }
}
const PARAMETER_CODEC = new ParameterCodec();

export class BaseService {
    constructor(
        protected config: ApiConfiguration,
        protected http: HttpClient
    ) { }

    private _rootUrl: string = '';

    get rootUrl(): string {
        return this._rootUrl || this.config.rootUrl;
    }

    set rootUrl(rootUrl: string) {
        this._rootUrl = rootUrl;
    }

    protected newParams(): HttpParams {
        return new HttpParams({
            encoder: PARAMETER_CODEC
        });
    }
}
