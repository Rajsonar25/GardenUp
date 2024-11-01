import './App.css';
import Navbar from './Navbar';
import Circles from './Circles';
import Advertisement from './Advertisement';
import Panel from './Panel';
import Products from './Products';
import BigCircles1 from './bigcircles';
import Trends from './trends';
import Panel3 from './Panal3';
import MoreBigCircles from './morecircles';
import BigCircles from './blogs';
import VideoComponent from './video';
import FeedbackForm from './feedback';
import GoogleForm from './googleform';
import Footer from './footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr style={{ border: '1px solid grey' }} />
      <Circles/>
      <hr style={{ border: '1px solid grey' }} />
      <Advertisement/>
      <hr style={{ border: '1px solid grey' }} />
      <Panel/>
      <hr style={{ border: '1px solid grey' }} />
      <Products/>
      <hr style={{ border: '1px solid grey' }} />
      <BigCircles1/>
      <hr style={{ border: '1px solid grey' }} />
      <Trends/>
      <hr style={{ border: '1px solid grey' }} />
      <Panel3/>
      <hr style={{ border: '1px solid grey' }} />
      <MoreBigCircles/>
      <hr style={{ border: '1px solid grey' }} />
      <BigCircles/>
      <hr style={{ border: '1px solid grey' }} />
      <VideoComponent/>
      <hr style={{ border: '1px solid grey' }} />
      <FeedbackForm/>
      <hr style={{ border: '1px solid grey' }} />
      <GoogleForm/>
      <hr style={{ border: '1px solid grey' }} />
      <Footer/>
    </div>
  );
}

export default App;
