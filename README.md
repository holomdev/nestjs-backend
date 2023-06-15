<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descripción

Repositorio base para futuros proyectos de backend.
### Características
- Protección de rutas con el uso de Guard (JWT)
- Rutas publicas
- Usuario Activo por medio de Decoradores
- Implementación de Refresh tokens
- Invalidación de tokens
- Role-based Access Control
- Claims-based Authorization

## Instalación

Clonar el repositorio
```bash
$ git clone git@github.com:holomdev/nestjs-backend.git
```

Instalar las dependencias
```bash
$ npm install
```

Establecer las variables de entorno
```bash
$ cp env.example .env
```

Correr los postgres y redis con docker
```bash
$ docker compose up -d
```

## Ejecutar la aplicación

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
