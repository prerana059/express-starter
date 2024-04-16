"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import todoRouter from './routes/todo.route'
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const restro_route_1 = __importDefault(require("./routes/restro.route"));
const errors_middleware_1 = require("./middlewares/errors.middleware");
const cors_1 = __importDefault(require("cors"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//app.use('/todos', todoRouter)
app.use('/users', user_routes_1.default);
app.use('/restros', restro_route_1.default);
app.listen(PORT, () => {
    console.log('Running on port', PORT);
});
app.use(errors_middleware_1.genericErrorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map