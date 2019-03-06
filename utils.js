var config = require("./config");

module.exports = {
    getTimeSpan: function () {
        return (new Date()).valueOf();
    },
    getCodeUrl: function (redirect_uri) {
        config.codeParams.state = this.getTimeSpan();
        var url = config.codeParams.redirect_uri.replace('[redirect_uri]', redirect_uri);
        config.codeParams.redirect_uri = url;
        return config.wxApi.code.concat('?', delObj(config.codeParams), '#wechat_redirect')
    }
}