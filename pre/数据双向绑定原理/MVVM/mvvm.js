function MVVM(options) {
    this.$options = options;
    var data = this._data = this.$options.data;
    var me = this;

    //数据代理
    Object.keys(data).forEach(function(key) {
        me._proxy(key);
    });

    //数据劫持
    observe(data, this);

    //指令解析
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxy: function(key) {
        var me = this;
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    }
};