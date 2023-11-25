"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayHome = void 0;
const user_1 = __importDefault(require("../Models/user"));
function DisplayHome(req, res, next) {
    let user = new user_1.default();
    user.username = 'admin';
    console.log(`username: ${user.username}`);
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHome = DisplayHome;
//# sourceMappingURL=index.js.map