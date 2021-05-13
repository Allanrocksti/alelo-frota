import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiConfiguration {
    rootUrl: string = '//5eb9ba733f97140016992030.mockapi.io/';
}

export interface ApiConfigurationInterface {
    rootUrl?: string;
}
