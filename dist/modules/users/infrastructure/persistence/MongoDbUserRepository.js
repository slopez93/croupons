"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbUserRepository = void 0;
const MongoRepository_1 = require("../../../../shared/infrastructure/persistence/mongo/MongoRepository");
const UserFactory_1 = require("../../domain/UserFactory");
class MongoDbUserRepository extends MongoRepository_1.MongoRepository {
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield this.collection();
            const document = yield collection.findOne({ _id: id });
            return UserFactory_1.UserFactory.create(document.email);
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.persist(user.id(), user);
        });
    }
    moduleName() {
        return 'users';
    }
}
exports.MongoDbUserRepository = MongoDbUserRepository;
