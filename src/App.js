import "./styles.css";
import equilibrium from './images/equilibrium.jpg';
import view from './images/icon-view.svg';
import avatar from './images/avatar.png';
import clock from './images/icon-clock.svg';
import ethereum from './images/icon-ethereum.svg';


function App() {
  return (
    <div className="card">
      <div className="box">
      <img  src={equilibrium} className='cube' alt=""/>
      <img  src={view} className='view' alt=""/>
      </div>
      <div className="text">
      <div className="equilibrium-h1">
        <h1>Equilibrium #3429</h1>
      </div>
      <div className="information-p">
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>
      <div className="icons-and-p">
        <div className="ethereum">
        <img  src={ethereum} alt=""/>
        <p>0.041 ETH</p>
      </div>
      <div className='clock'>
      <img  src={clock} alt=""/>
      <p>3 days left</p>
      </div>
      </div>
      <hr></hr>
      <div class="creator">
      <img  src={avatar} className='avatar' alt=""/>
        <p> Creation of <span> Jules Wyern</span> </p>
      </div>
     </div>
   </div>
  );
}
export default App;


