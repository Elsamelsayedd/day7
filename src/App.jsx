import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter/Counter'
import DisplayName from './Components/DisplayName/DisplayName'
import Intrval from './Components/Interval/Intrval'
import Width from './Components/Width/Width'
import Mouse from './Components/Mouse/Mouse'
import Comments from './Components/Comments/Comments'
import SingleComment from './Components/SingleComment/SingleComment'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'



let Routes = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Counter /> },
      { path: '/displayname', element: <DisplayName /> },
      { path: '/interval', element: <Intrval /> },
      { path: '/width', element: <Width /> },
      { path: '/mouse', element: <Mouse /> },
      { path: '/comments', element: <Comments /> },
      { path: '/singlecomment', element: <SingleComment /> }
    ]
  }
])

function App() {

  return <RouterProvider router={Routes}></RouterProvider>
}

export default App
