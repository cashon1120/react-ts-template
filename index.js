// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './src/App'
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App msg="index" />)
