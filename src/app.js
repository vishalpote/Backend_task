"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
var express_1 = require("express");
var database_1 = require("./database/database");
var useroutes_1 = require("./api/routes/useroutes");
var index_1 = require("./config/index");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use('/users', useroutes_1.default);
(0, database_1.default)();
app.listen(index_1.default.port, function () {
    console.log("Server is running on ".concat(index_1.default.port));
});
exports.default = app;
