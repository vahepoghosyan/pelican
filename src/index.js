// Use the window load event to keep the page load performant
window.addEventListener('load', function onLoad() {
    import(/* webpackChunkName: "pages/index" */'Pages/Index')
        .then(({ default: loadIndex }) => {
            loadIndex();
        });
});

const path = require('path');

path.resolve(__dirname, './src');