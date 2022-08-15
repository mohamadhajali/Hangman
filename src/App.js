import logo from "./logo.svg";
import "./App.css";
import Letters from "./components/Letters";
import Letter from "./components/Letter";
import Score from "./components/Score";
function App() {
  return (
    <div>
      <Score />
      <div id="undeScoure">
        <Letter />
      </div>
      <div id="letters">
        <Letters />
      </div>
    </div>
  );
}

export default App;
