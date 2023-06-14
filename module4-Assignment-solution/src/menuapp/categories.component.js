(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  controller: CategoriesComponentController,
  bindings: {
    categories: '<'
  }
});

CategoriesComponentController.$inject = [];
  function CategoriesComponentController() {

  }

})();
