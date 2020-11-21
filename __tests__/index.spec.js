(function() {
  const NxRunner = require('../src');

  jest.setTimeout(30 * 1e3);

  describe('NxRunner.methods', function () {
    test('init', function (done) {
      var fn1 = function () {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('1111');
            resolve(1);
          }, 3000);
        });
      };

      var fn2 = function () {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('2222');
            resolve(2);
          }, 2000);
        });
      };

      var fn3 = function () {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('3333');
            resolve(3);
          }, 1000);
        });
      };

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
