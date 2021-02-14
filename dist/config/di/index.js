"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_dependency_injection_1 = require("node-dependency-injection");
const container = new node_dependency_injection_1.ContainerBuilder();
const loader = new node_dependency_injection_1.YamlFileLoader(container);
loader.load(`${__dirname}/application.yml`);
exports.default = container;
