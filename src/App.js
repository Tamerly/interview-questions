import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Content } from './components/Content/Content'

function App() {
  return (
    <div className="app">
            <div className='app-header'>
                <Header />
            </div>
            <div className='app-body'>
                <div className='app-body-navbar'>
                    <Navbar />
                </div>
                <div className='app-body-content'>
                    <Content />
                </div>
            </div>
    </div>
  );
}

export default App;
