# lynlab-js

[![Build Status](https://travis-ci.org/lynlab/lynlab-js.svg?branch=master)](https://travis-ci.org/lynlab/lynlab-js)

> My personal blog (and more)

## Prerequisites

* nodejs 8.X
* yarn

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run all tests
yarn test
```

## Deployment

```bash
docker build -t lynlab/lynlab-js .
docker run -e 'LYNLAB_BACKEND_HOST=...' -p 8080:80 -d lynlab/lynlab-js
```

## Environment variables

  - `LYNLAB_BACKEND_HOST`
