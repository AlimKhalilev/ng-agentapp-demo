import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, OperatorFunction, retry } from 'rxjs';
import { HttpMethod, HttpResponse } from '../data/http-request';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestService {
    constructor(private http: HttpClient) {}

    /** Отправляет запрос на сервер с опциональными параметрами и проверкой на ошибку запроса */
    public sendHttpRequest<T>(method: HttpMethod, url: string = '', params: {} = {}): Observable<HttpResponse<T>> {
        const getParams: HttpParams = new HttpParams({ fromObject: params });
        let request: Observable<HttpResponse<T>> = new Observable();

        switch (method) {
            case HttpMethod.GET:
                request = this.http.get<T>(url, { params: getParams }).pipe(
                    this.mapResponse<T>(),
                    delay(500), // задержка для демки симуляции уставшего сервера)
                    retry({ count: 2, delay: 500 }),
                    catchError(this.handleError)
                );
                break;
            case HttpMethod.POST:
                request = this.http.post<T>(url, params).pipe(
                    this.mapResponse<T>(),
                    delay(500),
                    retry({ count: 2, delay: 500 }),
                    catchError(this.handleError)
                );
                break;
        }

        return request;
    }

    /** Метод обработки ответа запроса */
    private mapResponse<T>(): OperatorFunction<T, HttpResponse<T>> {
        return map((result: T) => {
            // some code
            return { body: result }
        })
    }

    /** Метод обработки ошибок http запроса */
    private handleError(error: HttpErrorResponse): Observable<HttpResponse<any>> {
        if (error.status === 0) {
            // Произошла ошибка на стороне клиента или в сети.
            console.error('Client error:', error.error);
        } else {
            // Серверная часть вернула код неудачного ответа, тело ответа может содержать подсказки о том, что пошло не так.
            console.error(`Backend error: ${error.status}, details:`, error.error);
        }
        return of({ hasError: true, errorMsg: error.message });
    }
}