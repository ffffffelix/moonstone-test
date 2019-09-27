<h1 align="center">Welcome to moonstone 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/moonstone" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@jahia/moonstone.svg">
  </a>
  <a href="https://contenteditor.jahia.design/moonstone/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> Jahia Design System

### 🏠 [Homepage](https://zeroheight.com/29db18463)

## Install

```sh
yarn add @jahia/moonstone
```

## Import css to your project main JS

```js
import 'moonstone/dist/main.css'
```

## Use the design System

```jsx
import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Typography } from 'moonstone'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <Typography>
                    Edit <code>src/App.js</code> and save to reload.
                </Typography>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
```

## Author

👤 **Jahia**

-   Github: [@Jahia](https://github.com/Jahia)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
