"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_1 = require("gatsby");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var TimeMachine_1 = require("../components/tools/timeMachine/TimeMachine");
var ToolsPage = function () { return (<layout_1.default>
    <seo_1.default title="Tools"/>
    <h1>Tools</h1>
    <p>Time Machine</p>
    <TimeMachine_1.default />
    <gatsby_1.Link to="/">Go back to the homepage</gatsby_1.Link>
  </layout_1.default>); };
exports.default = ToolsPage;
