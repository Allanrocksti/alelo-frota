import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';
import { AleloFrotaService } from './services/alelo-frota.service';

@NgModule({
    imports: [HttpClientModule],
    exports: [HttpClientModule],
    providers: [
        ApiConfiguration,
        AleloFrotaService
    ],
})
export class ApiModule {
    static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [
                {
                    provide: ApiConfiguration,
                    useValue: { rootUrl: customParams.rootUrl }
                }
            ]
        }
    }
}
