[Typescript image](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg)

# React Typescript Learning Mini Projects

Every folder in this repository contains a standalone project written in TypeScript. Initially, I planned to use separate branches for each project but opted to organize them into folders instead, with a descriptive README for simplicity.

## Contents

- [Step 1: Basic Commands for starting React TypeScript Project](#step-1-basic-commands-for-starting-react-typescript-project)


---

## Step 1: Basic Commands for starting React TypeScript Project

Basic commands needed to start a React TS project either with Vite or without Vite.
  \
  \
**With Vite:**

```bash
npx create-vite my-react-app --template react-ts
```

Navigate to the project folder and install dependencies:
```bash
cd my-react-app
npm install
```
Start the development server:
```bash
    npm run dev
```
  \
  \
**Without Vite:**

```bash
npx create-react-app my-react-app --template typescript
```

Navigate to the project folder:

```bash
cd my-react-app
npm start
```
  \
  \
One can also start a React project with TypeScript using **Yarn**:

**Without Vite**

```bash
yarn create react-app my-app --template typescript
```
  \
  \
**With Vite**
```bash
yarn create vite my-app --template react-ts
```

After creating either project:
```bash
cd my-app
```
Then, to install dependencies and start the development server:
```bash
yarn
yarn dev
```
  \
  \
Vite is preferred for modern, fast development environments, especially if you want a lean, flexible setup with great performance.\
CRA is better if you prefer stability, community support, and a React-centric approach, especially for smaller or less complex projects.

For most new projects, Vite is the recommended choice given its speed and flexibility.However, if you’re working on a project that will be shared widely with beginner developers or needs a very stable, widely supported setup, CRA is still viable.
