import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from '../Header/Header'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster position="top-right" />
    </>
  )
}
