"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Tokens;
(function (Tokens) {
    Tokens["TIMES"] = "{{TIMES}}";
    Tokens["STREAM_LINK"] = "{{STREAM_LINK}}";
})(Tokens || (Tokens = {}));
var postTemplate = "Bu aksam pregremning yayini olacaktir.\n" + Tokens.TIMES + "\n" + Tokens.STREAM_LINK + "\n";
var timeListTemplate = "\n{{helsinki/finland}}\n{{amsterdam/netherlands}}\n";
var generateTimes = function (template) {
    return template;
};
var generatePost = function (template) {
    return postTemplate.split(Tokens.TIMES).join(generateTimes(timeListTemplate));
};
var TimeMachine = function () {
    return (<div>
      <pre>{generatePost(postTemplate)}</pre>
    </div>);
};
exports.default = TimeMachine;
