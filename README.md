## BlueSparrow
This is the frontend repo of project BlueSparrow. This project is based on `ReactJS` version `16.8.6`.

### NPM Requirements
| Package | Version |
|----------|----------|
| React Router DOM | 5.0.1 |
| React Scripts | 3.0.1 |
| jQuery | 3.4.1 |
| ChartJS | 2.8.0 |
| Am Charts | 4.5.11 |
| AmCharts GeoData | 4.1.7 |

<br>

### Structure

The project has been organized into the following structure.

- `public` (Contains all publicly accessible files of BlueSparrow).
    - `assets` (This directory contains javascript, css and image files).
    - `favicon.ico` (BlueSparrow favicon)
    - `index.html` (Browsers entry point)
    - `mainfest.json` (This file provides information to the OS if BlueSparrow ever gets added as a shortcut).
- `src` (This directory contains the project source code).
    - `components` (Contains all the reactive components)
    - `services` (Contains all services within the system)
    - `test` (Contains unit and functional tests)
    - `App.js` (The root application)
    - `index.js` (The main entry of our application)
    - `logo.svg` (Logo - Would become BlueSparrow logo)
    - `serviceWorker.js` (The react service bootstrapper).
- .gitignore 
- package.json
- package-lock.json
- Procfile
- README.md
- server.js
- static.json


### Installation

1. Clone the Repository

```bash
$ git clone git@github.com:BufferMedia/bluesparrow.git
```

2. Install dependencies

```bash
$ npm install
```

<br>

### Development testing

```bash
$ npm start
```

> BlueSparrow will be available via [http://localhost:3000](http://localhost:3000)

<br>

### Production build

```bash
$ npm run build
```

> The compiled project will be available in the `build` directory (or `dist` if ever the version of react gets downgraded).

