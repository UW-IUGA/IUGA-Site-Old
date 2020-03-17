# IUGA Website

Rewritten in 2019 by William Kwok, because the previous website code was way too complex for the use case of the site. That doesn't mean this one will have an easy to learn codebase either, but I have tried my best to make sure this code is scalable for any future modifications.

# Tech Stack

The IUGA website is currently using the following technologies:

* NextJS - Server Side Rendered React
* Docker - Dockerization of the applications and hosting on UW Informatics Servers
* NGINX - Reverse proxy to handle the SSL certificate verification stuff and forward user connection to the NextJS container
* React Hooks - As of the moment, React hooks are actually a new feature, so it is worth mentioning that we are using them. In the future, they may become the de facto in which case you can remove this message.
* TypeScript - To make sure types are consistent between reusable components, and for benefitting the tooling by finding problems via static typing.
* Express - Create a custom server for the NextJS Application rather than the default

# How to install

Using currently node version 12.3.0

```
npm install
```

# How to run DEVELOPMENT MODE

On file save, it will refresh the application and start deploying the latest changes.

```
npm run dev
```

# How to build and run a LOCAL PRODUCTION mode application

This is what we do on the IUGA server. Production mode is different from development mode because all the files are static and load faster. It is optimized for production rather than development. This means things like variable names are more obfuscated for compression, etc.

```
npm run build
npm run productionstart
```

# How to deploy

```
npm run deploy
```