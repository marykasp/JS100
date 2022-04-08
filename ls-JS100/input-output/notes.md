# Input/Output

Notes for the basics chapter of [Launch School's Introduction to JS programming](https://launchschool.com/books/javascript/read/input_output)

### Command Line Output

- `console.log` built in function takes a JS value and logs it to the console

### Command Line Input

- **readline** Node.js API lets JS programs read input from the command line

- **readline-sync** simplified version of **readline** library

  - need a `package.json` file in directory
  - install with `npm init -y` command, creates `node_modules` subdirectory 
  - install `readline-sync` with `npm install readline-sync --save`
    - `npm install` installs the package in the `node_modules` subdirectory of your current directory
      - any Node.js programs stored in the current directory can require the package with a call to `require` 

  ```js
  let rlSync = require('readline-sync') // require the package that was installed in the node_modules subdirectory
  ```

  

### Browser Input

- `prompt` function lets programs ask for and obtain text-based input from the user
