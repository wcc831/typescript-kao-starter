# Typescript Kao Stayrt

## Archtecture

### Folder structure

    .
    ├── src
        ├── app
            ├── code
                ├── ...
                ├── sample
                    ├── controller
                    ├── service
                    ├── model
                    ├── etc
                        ├── RAML file
                        └── Router file
                ├── ...
    ├── docs                    
    ├── env                     
    ├── etc                    
    └── README.md

### ORM
[Sequelize](https://sequelize.org/) and [Sequelize Typescript](https://github.com/RobinBuschmann/sequelize-typescript) is used as ORM for this app

## Quick Start

This app works with `npm` or [`yarn`](http://yarnpkg.com).

Install:

```sh
yarn # or npm install
```

Run in dev mode, restarting the server on file changes:

```sh
yarn dev
```

Run unit tests:

```sh
yarn test
```

Run in prod mode, not daemonized, with staging config (suitable for Heroku):

```sh
yarn build
yarn start
```

Start/stop in prod mode, daemonized, with local config:

```sh
yarn build
yarn local:start
yarn local:stop
```

Start/stop in prod mode, daemonized mode, with staging config:

```sh
yarn build
yarn staging:start
yarn staging:stop
```

Build (or update) the API documentation to `api.html` in the root:

```sh
yarn raml
```

## Document 
The API document is written in [RAML](https://raml.org/) format.