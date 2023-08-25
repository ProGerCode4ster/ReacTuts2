import Navbar from './Components/Navbar/navbar'
import Header from './Components/Header/header';
import About from './Components/About/about'
import Creator from './Components/Creators/creator';
import Footer from './Components/Footer/footer';
import Service from './Components/Services/service';
import Profile from './Components/Profiles/profile';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <Header/>
    <About/>
    <Creator/>
    <Service/>
    <Profile/>
    <Footer/>
  
      </div>
  );
}

export default App;
