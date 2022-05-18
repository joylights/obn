import './App.css';
import Creating from './component/Creating/Creating';
import Faq from './component/Faq/Faq';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar'
import Services from './component/services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <Creating/>
      <Faq/>
    </div>
  );
}

export default App;
