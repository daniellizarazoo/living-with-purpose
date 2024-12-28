import LandingPage from './pages/LandingPage'
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
      <LandingPage/>
      <Analytics />
    </>
  )
}

export default App
