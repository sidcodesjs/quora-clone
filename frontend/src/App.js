
import './App.css';
import Navbar from './Navbar';
import Sidebaropt from './Sidebaropt';
import Box from './Box';
import Feed from './Feed';
// import Modal from './Modal';

function App() {


  return (
    <div className="App">
      {/* <h2>Hi this is fucking react</h2> */}
      <Navbar />
      <Sidebaropt />
      <Box />
      <Feed />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
