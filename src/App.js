import theFace from './klemen-face.png';
import './App.css';

function App() {
  return (
    <div className="klemenify">
        <img src={theFace} className="klemen-face" alt="the face" />
        <p>
          Everybody needs a bit of Klemen in their lives.
        </p>
    </div>
  );
}

export default App;
