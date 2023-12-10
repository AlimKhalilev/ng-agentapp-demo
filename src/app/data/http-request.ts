/** Ответ HTTP запроса */
export interface HttpResponse<T> {
    /** Тело ответа */
    body?: T,
    /** Флаг наличия ошибок после загрузки */
    hasError?: boolean,
    /** Сообщения ошибки загрузки */
    errorMsg?: string,
}

/** Список методов HTTP запросов */
export enum HttpMethod {
    GET = 'get',
    POST = 'post'
}