# rakutentvapp
Rakuten TV React App

Rakuten TV react test application show casing movies list, detail movie info and playing trailer.


## Setup

Clone repo (`node` and `npm` are required)

Installation: `npm install`

Run: `npm start` - runs on `localhost:8000`

Run tests: `npm test`

Build: `npm run build`  - genrates buils to `dist` folder

## Reflection

### Libs/Frameworks used

```
  UI
    react
    react-router
    react-helmet
    classnames
    shaka-player

  Dev tools
    babel
    eslint
    webpack
    sass
    jest
    react-testing-library
```

### Folder structure
```
  rakutentvapp/
    README.md
    node_modules/
    package.json
    .eslintrc - esline config
    .babelrc - babel config
    webpack.config.js - start point for webpack server
    public/
      index.html - contains imports for fonts and glyphicons and root node for react to render
  src/
    assets - static assets like images
    components - ui components which are reusable and unit tests
    contexts - react context files for data sharing. (Preferred way than redux for small app)
    pages - route pages
    service - api to fetch data and utils
    styles - sass variables, utils, etc...
```