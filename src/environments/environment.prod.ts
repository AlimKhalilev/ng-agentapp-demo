declare var require: any; // fallback for tests
export const environment = {
    production: true,
    version: require('../../package.json').version,
    serverEndpoint: 'https://jsonplaceholder.typicode.com/'
};