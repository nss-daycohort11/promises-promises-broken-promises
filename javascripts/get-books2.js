define(function(require) {
  var _ = require("lodash");
  var Q = require("q");

  return function() {
    var deferred = Q.defer();

      $.ajax({
          url: "https://nss-book-store.firebaseio.com/booktypes.json"
        })
        .done(function(bookData) {
           deferred.resolve(bookData);
          })
        .fail(function)(xhr, status, error) {
          deferred.reject(error);
        }

      return deferred.promise;
    }
  });












          /*
            This code is dependent upon two XHRs and violates
            the Single Responsibility Principle.

            I've also given you a little preview of ES6 (the newest
            version of JavaScript syntax). They are called fat arrows.
            Check out the docs at http://es6-features.org/#ExpressionBodies
          */
          // types = Object.keys( types ).map(key => types[ key ]);
          // books = Object.keys( books ).map(key => books[ key ]);

          // /*
          //   I'm using the lodash `find()` method here.
          //     https://lodash.com/docs#find
          //  */
          // var books = books.map(book => {
          //   book.type = _.find(types, { id:book.booktype }).label;
          //   return book;
          // });

          // // Still relying on a callback? That's so 2014...
          // fn(books);

        });
     

    }
  };
});