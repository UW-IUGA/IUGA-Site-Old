const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

const PAGE_CODES = {
    HOME: "HOME",
    ELECTIONS: "ELECTIONS"
}

app.prepare()
    .then(() => {
        const server = express()

        server.get('/', (req, res) => {
            return app.render(req, res, '/', { page: PAGE_CODES.HOME });
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })