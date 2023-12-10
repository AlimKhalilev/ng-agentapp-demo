import { Injectable } from '@angular/core';
import { AddUser, User } from '../data/user';
import { Observable } from 'rxjs';
import { HttpMethod, HttpResponse } from '../data/http-request';
import { HttpRequestService } from './http-request.service';
import { environment } from '../../environments/environment';

/** Сервис работы с пользователями */
@Injectable({
    providedIn: 'root'
})
export class UserService {
    /** Список пользователей */
    public userList: User[] = [];

    /** Статус загрузки данных пользователей */
    public loading: boolean = false;

    /** Сообщение об ошибке загрузки данных пользователей */
    public errorMsg: string = '';

    constructor(private httpRequestService: HttpRequestService) {}

    /** Получение пользователей с сервера */
    public getUsers(): Observable<HttpResponse<User[]>> {
        return this.httpRequestService.sendHttpRequest<User[]>(HttpMethod.GET, environment.serverEndpoint + 'users');
    }

    /** Получение пользователя с сервера по id */
    public getUserById(id: number): Observable<HttpResponse<User>> {
        return this.httpRequestService.sendHttpRequest<User>(HttpMethod.GET, environment.serverEndpoint + 'users/' + id);
    }

    /** Получить пользователя по его id (из списка загруженных) */
    public getLoadedUserById(id: number): User | undefined {
        return this.userList.find(user => user.id === id);
    }

    /** Добавление нового пользователя */
    public addUser(newUser: AddUser) {
        this.userList.push({
            id: Date.now(),
            username: '',
            phone: '',
            website: '',
            name: newUser.name,
            email: newUser.email
        });
    }
}
