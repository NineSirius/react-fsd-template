import { HomePage } from '../../src/pages/home/home-page.ui'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
])
