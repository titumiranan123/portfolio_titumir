
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './Route/route'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <RouterProvider router={route} />
  </div>
)
