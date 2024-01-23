import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Four0Four from './404';

function App() {
  // Check if the DISABLE_APP environment variable is set
  const isAppDisabled = process.env.REACT_APP_DISABLE_APP;
  return (
    <Router>
      <div className="App h-full">
        <div className="content">
          {isAppDisabled ? (
            <p>App is temporarily disabled.</p>
          ) : (
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/404' element={<Four0Four/>}/>
          	<Route path="*" element={<Navigate to="/404" />}/>
          </Routes>
          )}
        </div>        
      </div>
    </Router>
  );
}

export default App;
