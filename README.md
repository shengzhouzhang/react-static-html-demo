# coding-test

- This program is implemented with Node JS + React JS.
- Node JS is for parsing input and creating files. React JS is for rendering static HTML pages.

# Environment

- The program is implemented in the following environments:

- Node JS -- version 4.3.2
- NPM -- version 2.14.12

Most likely, it can be run in other version of Node JS as well, but if you met problems, please use the environments above.

# Installation

To install the dependencies, simply do,

```
$ npm install
```

# Testing

- To run the unit tests, simply do

```
$ npm test
```

The unit tests will generate index, makes, models pages and other test file under `./output` folder. And will clean it after finished. You can also manually clean it with `gulp clean-test`. 

# Running

To run the program, simply do,

```
$ gulp build
$ npm start <input_file_path> <output_folder_path>
```

To run with the sample works provided on the test, simply do,

```
$ gulp build
$ npm start ./input/works.xml ./output
```

# Code Structure

- `src` - source files
- `src/components` - the react components
- `src/producers` - the producers to create index, makes, and models pages
- `src/domains` - domain objects, Work
- `src/utils` - utils objects, file reader, writer, html render
- `src/index.js` - the entry file, take the input, output from command line, run the program

- `test` - test files
- `test/specs` - unit tests
- `test/specs/components` - unit tests for react components
- `test/specs/producers` - unit tests for producers
- `test/specs/utils` - unit tests for utils
- `test/specs/domains` - unit tests for domain objects

- `input/works.xml` - the input file provided with test
- `SPEC.MD` - the description provided with test
