(function () {
  var nx = require('@feizheng/next-js-core2');
  var NxRunner = require('../src/next-runner');

  describe('NxRunner.methods', function () {
    test('init', function (done) {
      var fn1 = new Promise((resolve) => {
        setTimeout(() => {
          console.log('1111');
          resolve(1);
        }, 3000);
      });

      var fn2 = new Promise((resolve) => {
        setTimeout(() => {
          console.log('2222');
          resolve(2);
        }, 2000);
      });

      var fn3 = new Promise((resolve) => {
        setTimeout(() => {
          console.log('3333');
          resolve(3);
        }, 1000);
      });

      // NxRunner.parallel([fn1, fn2, fn3]).then((res) => {
      //   console.log(res);
      //   done();
      // });
      NxRunner.serial([fn1, fn2, fn3]).then((res) => {
        console.log(res);
        done();
      });
    });
  });
})();
