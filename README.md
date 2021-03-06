Perspective
===========

[![Build Status](https://travis-ci.org/marcusmolchany/perspective.svg?branch=master)](https://travis-ci.org/marcusmolchany/perspective)

This application shows you how much things really cost you

# Getting started

```shell
$ git clone https://github.com/marcusmolchany/perspective.git
$ cd perspective
$ npm install
```

# Running the app
Follow all of the steps in Getting Started, then
```shell
$ npm start
```
and navigate to [http://localhost:3000](http://localhost:3000)

# Developing
This app was generated using [create-react-app](https://github.com/facebookincubator/create-react-app).
You can run `$ npm start` and leave the server running while you develop and the project will hot
reload when you save.

# Testing
```shell
$ npm test
```

# Building for deploy
Follow the directions int he create-react-app-README for deploying
```shell
$ npm run build
```

# Redux State Format
Format:
```js
{
  items: [
    {name: String, price: Number}
  ],
  salary: Number,
  tax: Number
}
```

Example:
```js
{
  items: [
    {name: 'coffee', price: 3.50},
    {name: 'poke', price: 12.00},
    {name: 'beer', price: 7.00}
  ],
  salary: 55000,
  tax: 0.33
}
```
