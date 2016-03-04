(function() {
  'use strict';

  angular
    .module('mynew')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
