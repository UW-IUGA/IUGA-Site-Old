# IUGA Website

Rewritten in 2019 by William Kwok, because the previous website code was way too complex for the use case of the site. That doesn't mean this one will have an easy to learn codebase either, but I have tried my best to make sure this code is scalable for any future modifications.

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

# Remove below

# What you will need to learn

* React hooks - https://reactjs.org/docs/hooks-intro.html
    * If they're still teaching `class ABC extends Component` you should stop and make sure you use functional components instead because it's the future of React.
    * How useState and useContext work, as well as how to create own hooks (this is only if you want to modify current hooks)
* TypeScript - INFO 443
    * You will need to learn typescript typing with React and hooks which isn't too bad
* Deploying with Docker - INFO 441
* NextJS server side rendering
    * Makes things a lot easier and we don't have to mess around with any redirects with react router and nginx

# Intentional design decisions

* No styling libraries, just CSS per component. Harder to make mass changes to styling but easier to onboard and change things on a component by component basis

# MAKE SURE TO DOCUMENT PROCESSES IN THE WIKI!

The last website was not documented well at all and things were broken. 

# TODO LIST

* Intentional design decisions
* The correct way to test and deploy
* How google analytics works
* Make sure images are either hosted on gravatar or are under 500KB
* imageImports.d.ts
* https://github.com/zeit/next.js/tree/canary/examples/custom-server-typescript
