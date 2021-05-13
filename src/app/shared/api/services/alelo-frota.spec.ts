import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiConfiguration } from '../api-configuration';
import { Car } from '../models/car';
import { AleloFrotaFakeBody } from './alelo-frota-fake-body';
import { AleloFrotaService } from './alelo-frota.service';

describe('AleloFrotaService', () => {
    let aleloFrotaService: AleloFrotaService;
    let httpMock: HttpTestingController

    const bodyPOST: AleloFrotaService.SaveCarParams = {
        car: {
            plate: 'ABC-1234',
            model: 'Carrinho de teste',
            manufacturer: 'Marca teste',
            color: 'Cor teste',
            status: true
        }
    }

    const bodyPUT: AleloFrotaService.SaveCarParams = {
        car: {
            id: '100',
            plate: 'ABC-1234',
            model: 'Carrinho de teste',
            manufacturer: 'Marca teste',
            color: 'Cor teste',
            status: true
        }
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ApiConfiguration,
                AleloFrotaService
            ],
        }).compileComponents();
        aleloFrotaService = TestBed.inject(AleloFrotaService);
        httpMock = TestBed.inject(HttpTestingController)
    });

    it('GET - Listar todos os veículos', () => {
        aleloFrotaService.carsUsingGET().subscribe(cars => {
            expect(cars).toBeInstanceOf(Array)
            expect(cars[0]).toBeInstanceOf(Object)
        })
        httpMock.expectOne(req => req.method === 'GET').flush(AleloFrotaFakeBody.GETAllCars)
    });

    it('GET - Obter veículo, filtrado pela placa', () => {
        const plate = 'ABC-2052'
        aleloFrotaService.carsUsingGET({ filter: plate }).subscribe(cars => {
            let carPlateFound = undefined
            if (cars.length > 0)
                carPlateFound = cars.find(car => car.plate === plate)

            expect(carPlateFound?.plate).toEqual(plate)
        })

        httpMock.expectOne(req => req.method === 'GET').flush(AleloFrotaFakeBody.GETCarABC_2052)
    });

    it('GET - Listar todos os veículos, filtrados por veículos ativos', () => {
        aleloFrotaService.carsUsingGET({ filter: 'true' }).subscribe(cars => {
            let carsInactives: Car[] = [];
            if (cars.length > 0)
                carsInactives = cars.filter(car => car.status === false)

            expect(carsInactives.length > 0).toBeFalsy()
        })

        httpMock.expectOne(req => req.method === 'GET').flush(AleloFrotaFakeBody.GETCarsActive)
    });

    it('GET - Listar todos os veículos, filtrados por veículos inativos', () => {
        aleloFrotaService.carsUsingGET({ filter: 'false' }).subscribe(cars => {
            let carsActive: Car[] = [];
            if (cars.length > 0)
                carsActive = cars.filter(car => car.status === true)

            expect(carsActive.length > 0).toBeFalsy()
        })

        httpMock.expectOne(req => req.method === 'GET').flush(AleloFrotaFakeBody.GETCarsInactive)
    });

    it('GET - Listar todos os veículos, filtrados por uma string qualquer', () => {
        aleloFrotaService.carsUsingGET({ filter: 'efewfwdsfds' }).subscribe(cars => expect(cars.length).toEqual(0))
        httpMock.expectOne(req => req.method === 'GET').flush([])
    });

    it('GET - Obter veículo, filtrados pelo ID', () => {
        const idCar = 100
        aleloFrotaService.carUsingGET({ id: idCar }).subscribe(car => {
            expect(car).toBeInstanceOf(Object)
            expect(car?.id).toEqual(String(idCar))
        })

        httpMock.expectOne(req => req.method === 'GET').flush(AleloFrotaFakeBody.GETCarID100)
    });

    it('GET - Obter veículo, filtrados por um ID inexistente', () => {
        aleloFrotaService.carUsingGET({ id: 1234567890 }).subscribe(car => expect(car).toBeInstanceOf(String))
        httpMock.expectOne(req => req.method === 'GET').flush('"Not found"')
    });

    it('GET - Listar todos os veículos, com paginação de até 10 itens', () => {
        aleloFrotaService.carsUsingGET({ page: 1, limit: 10 }).subscribe(cars => expect(cars.length > 10).toBeFalsy())
        httpMock.expectOne(req => req.method === 'GET').flush(AleloFrotaFakeBody.GETCarsLimit10)
    })

    it('POST - Salvar um novo veículo, passando o objeto Car', () => {
        aleloFrotaService.carUsingPOSTOrPUT(bodyPOST).subscribe(car => resolvePOSTAndPUT(car, bodyPOST.car))
        httpMock.expectOne(req => req.method === 'POST').flush(AleloFrotaFakeBody.POSTSaveCar)
    })

    it('PUT - Atualizar um veículo, passando o objeto Car', () => {
        aleloFrotaService.carUsingPOSTOrPUT(bodyPUT).subscribe(car => {
            resolvePOSTAndPUT(car, bodyPUT.car)
            expect(car.id).toEqual(bodyPUT.car.id)
        })
        httpMock.expectOne(req => req.method === 'PUT').flush(AleloFrotaFakeBody.POSTSaveCar)
    })

    it('DELETE - Remover um veículo, passando um id existente', () => {
        let idCar = 100;
        aleloFrotaService.carUsingDELETE({ id: idCar }).subscribe(car => expect(car?.id).toEqual(String(idCar)))
        httpMock.expectOne(req => req.method === 'DELETE').flush(AleloFrotaFakeBody.POSTSaveCar)
    })

    it('DELETE - Remover um veículo, passando um id inexistente', () => {
        let idCar = 1000000;
        aleloFrotaService.carUsingDELETE({ id: idCar }).subscribe(car => expect(car).toBeInstanceOf(String))
        httpMock.expectOne(req => req.method === 'DELETE').flush('"Not found"')
    })

    function resolvePOSTAndPUT(car: Car, bodyCar: Car) {
        expect(car.id).toBeTruthy()
        expect(car.plate).toEqual(bodyCar.plate)
        expect(car.model).toEqual(bodyCar.model)
        expect(car.manufacturer).toEqual(bodyCar.manufacturer)
        expect(car.color).toEqual(bodyCar.color)
        expect(car.status).toEqual(bodyCar.status)
    }
});
