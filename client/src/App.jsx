import { useLocation, useOutlet, } from 'react-router-dom';
import { routes } from './routes.jsx'

//components
import Header from './components/Navigation/Header.jsx'
import Footer from './components/Footer'
import Navbar from './components/Navigation/Navigation.jsx';

//styling
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './App.css'

function App() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <>
      <Header />
      <main>
      <Navbar />
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </main>
      <Footer />
    </>
  )
}

export default App;
