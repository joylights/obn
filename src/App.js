import './App.css';
import Creating from './component/Creating/Creating';
import Faq from './component/Faq/Faq';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar'
import Services from './component/services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './component/Team/Team';
import Contact from './component/Contact/Contact';
import Transform from './component/Transform/Transform';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <Creating/>
      <Faq/>
      <Team/>
      <Contact/>
      <Transform/>
    </div>
  );
}

export default App;
