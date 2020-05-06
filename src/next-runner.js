(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var isPromise = nx.isPromise || require('@feizheng/next-is-promise');

  var NxRunner = nx.declare('nx.Runner', {
    statics: {
      serial: function (inTasks) {
        return inTasks.reduce(function (promise, task) {
          return promise.then(function () {
            return isPromise(task) ? task : task();
          });
        }, Promise.resolve());
      },
      parallel: function (inTasks) {
        var tasks = inTasks.map(function (task) {
          return isPromise(task) ? task : task();
        });
        return Promise.all(tasks);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRunner;
  }
})();
