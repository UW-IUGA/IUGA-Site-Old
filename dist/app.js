"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dev });
const handle = app.getRequestHandler();
/**
 * App.ts is the injection point for the application.
 *
 * The purpose of this custom injection point is to allow for variable routes, in the case of the
 * elections with year. If you require any other routes that require variables, such as a custom
 * blog site, then feel free to make another one. Otherwise, it should all just be covered under
 * the * route.
 *
 * Last Modified
 *      William Kwok
 *      June 6, 2019
 */
app.prepare()
    .then(() => {
    const server = express_1.default();
    /**
     * This is the elections endpoint that provides the year as a parameter
     */
    server.get('/elections/:year', (req, res) => {
        return app.render(req, res, '/elections', { year: req.params.year });
    });
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
//# sourceMappingURL=app.js.map