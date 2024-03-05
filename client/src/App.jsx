import './App.css';
import Profile  from './pages/Profile';
import Chats from './pages/Chats';
import Players from './pages/Players';
import Games from './pages/Games';
import Scheduler from './pages/Scheduler';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Chats" element={<Chats />} />
          <Route path="/Players" element={<Players />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Scheduler" element={<Scheduler />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;