/*!
 * name: @feizheng/next-runner
 * description: Task runnter for next.
 * homepage: https://github.com/afeiship/next-runner
 * version: 1.0.0
 * date: 2020-05-03T12:39:05.099Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  /* prettier-ignore */
  var STUB_VALUE = function (value) { return value; };

  var NxRunner = nx.declare('nx.Runner', {
    statics: {
      serial: function (inTasks, inCallback) {
        var callback = inCallback || STUB_VALUE;
        return inTasks.reduce(function (promise, task) {
          return promise.then(function () {
            callback(task);
          });
        }, Promise.resolve());
      },
      parallel: function (inTasks, inCallback) {
        var callback = inCallback || STUB_VALUE;
        var tasks = inTasks.map(callback);
        return Promise.all(tasks);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRunner;
  }
})();

//# sourceMappingURL=next-runner.js.map
