"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var Tokens;
(function (Tokens) {
    Tokens["TIMES"] = "{{TIMES}}";
    Tokens["STREAM_LINK"] = "{{STREAM_LINK}}";
})(Tokens || (Tokens = {}));
var timeListTemplate = "\n{{helsinki/finland}}\n{{amsterdam/netherlands}}\n";
var generateTimes = function (template) {
    return template;
};
var generateOutput = function (postTemplate) {
    return postTemplate.split(Tokens.TIMES).join(generateTimes(timeListTemplate));
};
var TimeMachine = function () {
    var _a = react_1.useState("Bu aksam pregremning yayini olacaktir. " + Tokens.TIMES + " " + Tokens.STREAM_LINK), postTemplate = _a[0], setPostTemplate = _a[1];
    var handleTemplateChange = function (e) { return setPostTemplate(e.target.value); };
    return (<div>
      <textarea id="input" name="story" rows={5} cols={33} value={postTemplate} onChange={handleTemplateChange}/>
      <textarea readOnly id="output" name="story" rows={5} cols={33} value={generateOutput(postTemplate)}/>
    </div>);
};
exports.default = TimeMachine;
