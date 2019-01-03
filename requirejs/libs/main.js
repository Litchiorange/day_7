require.config({
    //基准路径
    baseUrl: './app',
    //简化路径
    paths: {
        'jquery': "../js/jquery.min"
    }
});

require(['jquery', 'index'], function($, index) {
    index.index()
});