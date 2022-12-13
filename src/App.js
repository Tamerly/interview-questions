import './App.css'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'

const App = (props) => {
  console.log('in App', props)

  return (
    <div className="app">
            <div className='app-header'>
                <Header />
            </div>
            <div className='app-body'>
                <div className='app-body-content'>
                    <Content questions={props.state.questions}/>
                </div>
            </div>
    </div>
  );
}

export default App;
