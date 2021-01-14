import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"


const ThemeApp = () => {
  return (
    <ChakraProvider>
            <App />
    </ChakraProvider>
  )
}

ReactDOM.render(<ThemeApp />, document.getElementById('root'))