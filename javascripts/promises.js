requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery']

  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "get-books", "get-books2"], 
  function($, Handlebars, bootstrap, books, getBookTypes) {


    getBookTypes()
    .then(function(bookTypes) {
      console.log("book types came back successfully!");
      console.log("bookTypes data:", bookTypes);
      return books()
      .then(function(bookData) {
        console.log("books came back successfully!");
        console.log("book data", bookData);


        var bookTypeArray = $.map(bookTypes, function(value) {
          return value;
        });

        console.log("bookTypeArray", bookTypeArray);

        var id0Label = bookTypeArray[0].label;
        var id1Label = bookTypeArray[1].label;

        console.log("id1Label", id0Label);

        var booksArray = $.map(bookData, function(value) {

          if (value.booktype === 1) {
            value.label = id0Label;

            return value;
          }
          if (value.booktype === 0) {
            value.label = id1Label;

            return value;
          }
      
        });

        console.log("booksArray", booksArray);

        function filterFiction(value) {
          if (value.label === id0Label) {
            return value;
          }
        };

        var fictionArray = booksArray.filter(filterFiction);

        console.log("fictionArray", fictionArray);

        require(['hbs!../templates/books'], function(bookTpl) {
        $("#bookContainer").html(bookTpl(booksArray));
          });

        








      })
    })
    .fail(function(errorData) {
      console.log("Couldn't get bookType data!", errorData);
    });



    /* Here's some pseudo-code for how it should look once you
       start using promises

    getBookTypes()
      .then(function(types) {
        getBooks(types);
      })
      .then(function(books) {
        // add the type key to each book that is currently
        // being performed in the get-books file

        // then bind the template to the data 
        // (p.s. make the handlebar template a module dependency)
        require(['hbs!../templates/books'], function(bookTpl) {
          $("#bookList").html(bookTpl({ books:bookArray }));
        });

      })
     */

  }
);
