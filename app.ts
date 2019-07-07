import express, { Request, Response } from 'express';
import next from 'next';
import { CURRENT_YEAR } from 'components/_data/constantsToChangeEachYear';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
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
        const server = express();

        /** 
         * This is the elections endpoint that provides the year as a parameter
         */
        server.get('/elections/:year', (req: Request, res: Response) => {
            return app.render(req, res, '/elections', { year: req.params.year || CURRENT_YEAR });
        })

        server.get('*', (req: Request, res: Response) => {
            return handle(req, res)
        })

        server.listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`)
        })
    });