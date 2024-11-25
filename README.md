# people-events-platform
## Basic Project Setup
1. Install Node 22. [NVM](https://github.com/nvm-sh/nvm) is useful for managing Node versions:
    - `nvm install 22`
    - `nvm alias default 22`
2. Clone the repo: `git clone https://github.com/nicolaspenagos/people-events-platform.git`
3. Navigate to the directory that contains the project `cd people-events-platform`
4. Ask the admins for the `.env` file and place it in the root directory of the proyect.
5. Install project dependencies: `npm i`
6. Run the application: `npm run dev`

## Project Anatomy
```
.
├── CODEOWNERS
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   ├── hooks
│   ├── index.css
│   ├── main.tsx
│   ├── services
│   │   ├── crud-api
│   │   │   ├── base.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   └── utils.ts
│   ├── store
│   │   ├── events
│   │   │   ├── selectors.ts
│   │   │   ├── slice.ts
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── types
│   ├── types.ts
│   ├── utils
│   ├── views
│   └── vite-env.d.ts
├── tailwind.config.js
└── vite.config.js
```
