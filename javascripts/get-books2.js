define(function(require) {
  var _ = require("lodash");
  var Q = require("q");

  return function() {
    var deferred = Q.defer();

    $.ajax({
        url: "https://nss-book-store.firebaseio.com/booktypes.json"
      })
      .done(function(bookTypeData) {
         deferred.resolve(bookTypeData);
        })
      .fail(function(xhr, status, error) {
        deferred.reject(error);
      });

    return deferred.promise;
  }
});

