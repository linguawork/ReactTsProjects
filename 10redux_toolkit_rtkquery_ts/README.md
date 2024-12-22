# Getting Started with Create React App

The redux toolkit can be started with the following commands
using vite or next, the redux toolkit is already built in. 

```
# Vite with our Redux+TS template
# (using the `degit` tool to clone and extract the template)
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app

# Next.js using the `with-redux` template
npx create-next-app --example with-redux my-app
```

However I used a different and probably old command to have the possibility to install redux-toolkit separately:
```
npx create-react-app project_name --template typescript
```


Some additional scripts to help, because they may be problems with dependencies:

if the tsconfig.json file is missing after installation:
```
npx tsc --init

```

or create it manually:
```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "module": "esnext",
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

```
npm install web-vitals
```


```
npm install --save-dev @types/web-vitals
npm install --save-dev @types/react @types/react-dom
```
\
\
This is for jsx config in tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "target": "es5",
    "lib": ["dom", "esnext"]
  }
}


```
npm install --save-dev jest @types/jest
```

add to tsconfig:
```
{
  "compilerOptions": {
    "types": ["jest", "node"]
  }
}
```

If the webvitals cause too many errors, one can just remove them from the project


FOR REDUX:
To additionally install redux toolkit:
```
npm install @reduxjs/toolkit

#install react redux and ts for it:
npm install react-redux @types/react-redux
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

