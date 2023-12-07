import React from 'react'
import {Outlet} from 'react-router-dom'

function Main() {
  return (
    <>
    <header>Hello</header>
        <Outlet/>
        <footer>footer</footer>
    </>
  )
}

export default Main
