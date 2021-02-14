"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConfigFactory = void 0;
class MongoConfigFactory {
    static createConfig() {
        return {
            url: 'mongodb://127.0.0.1:27017',
        };
    }
}
exports.MongoConfigFactory = MongoConfigFactory;
