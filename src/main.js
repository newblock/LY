

require.config({
    paths: {
        fly: "https://unpkg.com/flyio/dist/umd/fly.umd.min.js"
    }
});

require(['fly'], function($) {
    alert($().fly);
});
