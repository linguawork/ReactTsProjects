# Getting Started with Create React App

```
npx create-react-app project_name --template typescript
```
## Notes:
The project is done in the version of React 17. 
The purpose of using older version is to understand the old redux technology. This may help in working with legacy redux code. 
The version of redux which has not developed to Redux Toolkit version. 

createStore method is deprecated nowadays, but it worked well in React 17 and earlier. 



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Delete unnecessary files: 
./reportWebVitals

### install:
```
npm i --save-dev @types/react 
npm install --save-dev @types/react-dom@latest
npm i @types/react-redux redux react-redux redux-thunk axios
```

This can be enough to work with the project folder: redux+ts+react