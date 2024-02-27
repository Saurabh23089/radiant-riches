import Heading from './components/heading.jsx';
import Bestchoice from './components/bestchoice.jsx';
import Deals from './components/deals.jsx';
import Signup from './components/signup.jsx';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar.jsx';


function App() {

  return (
    <div className='select-none'>
      <Navbar/>
      <Heading/>
      <Bestchoice/>
      <Deals/>
      <Signup/>
      <Footer/>
    </div>
    
  );
}

export default App;
