# Riffyn Portifolio

Simple project to show D3 and React usage. Portifolio project for Riffyn. It uses reactd3 (from http://www.reactd3.org/). This is a non comercial web application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

It needs NodeJs installed (currently using v6.0.0).


### Installing

The package depencies will be installed using npm (node package modules). It will download dependencies described on package.json.

```
npm install
```

## Running the tests

TBD.

## Running dev instance

It uses webpackserver to provide client content.

```
npm run dev
```

## Usage

Usually, webpackserver servers content under door 8080. So to access webpage use your browser and navigate on url: localhost:8080.

* Website has 3 routes: /, /about, /distribution

## Build

It uses webpack to build static content. But since webpackserver is being used, there is no need for script routine to build content separately.

## Deployment

It was produced a demo version under (https://riffyn-sample.herokuapp.com/).
The full pipeline wasnt developed for production, since this code is just a presentation of D3+React usage and code evaluation. 
It uses webpack to build static content.

## Description

SPA web application, using react. Not using any external state control logic such as redux.
Using react-d3 package to provide built in components. Using D3.Js for animations. Using muicss for styling.

### Bug
Looks like react-d3 svg components are not responsive. So, if you face any style issue regarding those components it will be improved soon.

## Authors

* **Rodolfo Ladeira** - *email* - rodolfo2611@gmail.com

## Acknowledgments

* Using react-d3 package from http://www.reactd3.org/
* Simple D3 example.
