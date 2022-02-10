import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {comedy,horror,action,originals, romance, documentaries} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall={true}/>
      <RowPost url={horror} title='Horror' isSmall={true}/>
      <RowPost url={comedy} title='Comedy' isSmall={true}/>
      <RowPost url={romance} title='Romance' isSmall={true}/>
      <RowPost url={documentaries} title='Documentary' isSmall={true}/>
    </div>
  );
}

export default App;
