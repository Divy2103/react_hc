import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'click me to visit google'
}

function MyApp() {
  return (
    <div>
      <h1>custom react app</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const AreactElement = React.createElement(
  'a',  // element
  { href: 'https://google.com', target: '_blank' }, // attributes

  /*
  userName, 
  2 + 2  // working
  // if(userName === 'divy') ? 'yes' : 'no',   // not working
  */

  'click me to visit google', // children
  " ",
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
  // <MyApp />
  // AnotherElement
)
