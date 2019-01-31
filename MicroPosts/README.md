# Babel Webpack Starter

A starter pack to build JavaScript applications using standards from ES2015, ES2016 & ES2017. It uses webpack, Babel and webpack-dev-server to compile and serve. It is fully compatible with Async/Await as it uses the Babel polyfill.

### Version
1.1.0

## Usage

### Installation

Install the dependencies (https://github.com/bradtraversy/babel_webpack_starter), then run the following on the whole directory of the project

```sh
$ npm install
```

### Serve
To serve in the browser  - Runs webpack-dev-server

```sh
$ npm start
```

### Build
Compile and build

```sh
$ npm run build
```

## More Info

### Author

Brad Traversy
[Traversy Media](http://www.traversymedia.com)

### License

This project is licensed under the MIT License


Summary (We use this to compile our code down to ES5 or else):
> Our Js is in src file

> You need Node.Js installed 

> Don't use the normal cmd

> Get the pack from: (https://github.com/bradtraversy/babel_webpack_starter)

> Copy the files from the pack into your project

> run: npm install; in the bash, it will install babbel and all the packs we need. A folder called node_modules will be created. 

> run: npm run build; This will create a build folder for us, anything in the app.js in the src file will be compiled into ES5 and put in the folder built 

> run: npm start; to run the server 

> Remember that all your modules will be compiled to only one -> app.bundle.js


You can setup a fake server using (https://github.com/typicode/json-server):
> npm install json-server --save 