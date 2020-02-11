{
"name": "BasicExpressApp",
"version": "1.0.0",
"description": "BasicExpressApp",
"main": "index.js",
"scripts": {
"test": "jest", //npm test in CLI runs the jest test runner and executes test files
"start": "node app", //npm start loads app
"dev": "nodemon app" //npm run dev loads app using nodemone which watches changes in file and rebuilds on each saved change
},
"repository": {
"type": "git",
"url": "git+https://github.com/HeatherJLewis/ExpressAppServer.git"
},
"author": "HJLewis",
"license": "MIT",
"homepage": "https://github.com/HeatherJLewis/ticketDiary#readme",
"devDependencies": {
"@babel/core": "^7.0.0", //https://babeljs.io/docs/en/
"@babel/node": "^7.0.0",
"@babel/preset-env": "^7.0.0",
"@babel/preset-react": "^7.0.0",
"@babel/register": "^7.0.0",
"babel-loader": "^8.0.2",
"eslint": "^6.8.0", //https://eslint.org/docs/about/ checks code and identifies issues
"eslint-loader": "^3.0.3", //https://openbase.io/js/eslint-loader works with webpack to build dist files using eslint rules
"husky": "^4.2.1", //https://medium.com/netscape/git-hooks-with-husky-8b98f2556363 used to create git hooks
"jest": "^25.1.0", //for testing
"lint-staged": "^10.0.7", //https://www.npmjs.com/package/lint-staged enables you to run a lint on staged files so you can use it pre commit as defined in the husky section below
"nodemon": "^2.0.2", //monitors change in node js app and runs them
"prettier": "^1.19.1", //https://prettier.io/docs/en/index.html
"webpack": "^4.41.5" //https://webpack.js.org/ bundles files into static assets from module with dependencies
"webpack-cli": "^3.1.2" //https://www.npmjs.com/package/webpack-cli
},
"husky": {
"hooks": {
"pre-commit": "lint-staged",
"pre-push": "npm test"
}
},
"lint-staged": { //https://codeburst.io/continuous-integration-lint-staged-husky-pre-commit-hook-test-setup-47f8172924fc
"_.{js,css,json,md}": [ //rules for lint-staged
"prettier --write",
"git add"
],
"_.js": [
"eslint --fix",
"git add"
]
},
"dependencies": {
"express": "^4.17.1", //https://expressjs.com/
"pug": "^2.0.4" //https://pugjs.org/api/getting-started.html templating engine for server side rendering
}
}
