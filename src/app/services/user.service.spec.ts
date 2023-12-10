import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AddUser, User } from '../data/user';

describe('UserService', () => {
    let service: UserService;
    const userId: number = 1;
    const newUser: AddUser = { name: 'Test', email: 'test@mail.ru' };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });
        service = TestBed.inject(UserService);
    });

    it('Сервис создан', () => {
        expect(service).toBeTruthy();
    });

    it('Запрос пользователей не возвращает ошибок', ((done: DoneFn) => {
        service.getUsers().subscribe((response) => {
            expect(response.hasError).not.toBe(true); 
            done();
        });
    }));

    it('При запросе пользователей данные приходят', ((done: DoneFn) => {
        service.getUsers().subscribe((response) => {
            expect(response.body).not.toBe(undefined); 
            done();
        });
    }));

    it('При запросе пользователей пользователи есть (не [])', ((done: DoneFn) => {
        service.getUsers().subscribe((response) => {
            expect(response.body?.length).toBeGreaterThan(0); 
            done();
        });
    }));

    it('Запрос пользователя по id не возвращает ошибки', ((done: DoneFn) => {
        service.getUserById(userId).subscribe((response) => {
            expect(response.hasError).not.toBe(true); 
            done();
        });
    }));

    it('Запрос пользователя по id возвращает данные', ((done: DoneFn) => {
        service.getUserById(userId).subscribe((response) => {
            expect(response.body).not.toBe(undefined); 
            done();
        });
    }));

    it('Пользователь добавляется', () => {
        service.addUser(newUser);
        const lastUser: User = service.userList[service.userList.length - 1];
        expect(lastUser.name === newUser.name && lastUser.email === newUser.email).toBeTruthy();
    });
});

