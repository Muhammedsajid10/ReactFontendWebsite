import './App.css';
import Navbar from './Navbar';
import MainBody from './MainBody';
import Section from './Section';
import HeadingSect from './HeadingSect';
import Article from './Article';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainBody/>
      <HeadingSect/>
      <Section/>
      <Article/>
      <Contact/>
      
    </div>
  );
}

export default App;
