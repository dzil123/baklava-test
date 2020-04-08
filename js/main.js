(function (global) {
    global.editor = new BaklavaJS.Editor();
    global.plugin = new BaklavaJSRendererVue.ViewPlugin();
    editor.use(plugin);

    global.app = new Vue({
        el: "#app",
        data: {
            viewPlugin: plugin,
        },
    });
})(this);
