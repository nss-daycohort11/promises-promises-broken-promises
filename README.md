# JS201 Promises Exercise

Your mission, should you choose to accept it, is convert this simple application that outputs a list of book titles, and their corresponding categories, from pure XHR/callback architecture to use promises instead.

Look for hints that I've provided throughout the code.

## Setup - DONE

After you've cloned the repository locally, just run the following commands.

```
cd lib
npm install && bower install
cd ..
http-server
```
Then open your browser and hit your web server IP address.

## Requirements

1. You should have two XHRs, each performed in their own require module.
1. Each module should return a promise for use in the `promises.js` module.
1. I've included Bootstrap, so use the grid system to build rows for each book.
1. `console.log` **everything** to ensure you know what's contained in every variable and how the program logic executes.
1. Update the handlebars file to output all the other properties of the book. You choose the layout and style.

## Bonus requirements

### Filtering

1. Populate a `<select>` element with the different book type labels.
1. When the user selects one of the types, only show books of that type.

### Advanced syntax

1. Find another [ES6 feature](http://es6-features.org/) that is supported by Chrome and use it in your project.
