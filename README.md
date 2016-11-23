Example for E2E test for use nightwatch by selenium-grid on docker.
====

## Environment

- node.js v7.2.0
- docker v1.12.1
- nightwatch v0.9.9

### Install docker for mac or windows

Install docker for mac or windows.

[mac] https://docs.docker.com/docker-for-mac/

[windows] https://docs.docker.com/docker-for-windows/

### Create docker-machine host for selenium

Create selenium docker host.

```bash
$ docker-machine create -d virtualbox selenium
```

Set environment.

```bash
$ eval $(docker-machine env selenium)
```

### Clone this repository

```bash
git clone https://github.com/treetips/selenium-grid-nightwatch-example.git
```

### Create and start selenium-hub and firefox-container and chrome container

```bash
$ docker-compose up -d
```

## Usage

### Install npm dependencies

```bash
$ npm install
```

### Run e2e test for local

If execute 'npm run local', start up local chrome or firefox by standalone-selenium without docker and selenium-grid.

```bash
# test for chrome
$ npm run local-chrome

# test for firefox
$ npm run local-firefox

# test for chrome and firefox
$ npm run local
```

### Run e2e test for selenium-grid

If execute 'npm run grid', parallel start up chrome or firefox by selenium-grid on docker

```bash
$ npm run grid
```

### Edit test suite

Edit src/test.js.


