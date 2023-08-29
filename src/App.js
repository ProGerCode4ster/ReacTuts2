import Navbar from './Components/Navbar/navbar'
import Header from './Components/Header/header';
import About from './Components/About/about'
import Creator from './Components/Creators/creator';
import Footer from './Components/Footer/footer';
import Service from './Components/Services/service';
import Profile from './Components/Profiles/profile';
import Test from './Components/Test/test';
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
    <Test/>
      </div>
  );
}

export default App;
