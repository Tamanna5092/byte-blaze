import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'
import Layout from './Layout/Layout.jsx'
import Blog from './Pages/Blog.jsx'
import Content from './components/Content.jsx'
import Author from './components/Author.jsx'
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
            },
            {
                path: '/blog/:id',
                element: <Blog></Blog>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                    index: true,
                    element: <Content></Content>,
                    loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
                    },
                    {
                        path: 'author',
                        element: <Author></Author>,
                        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
                    }
                ]
            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    </> 
)
