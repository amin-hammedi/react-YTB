import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaveBare from "./Components/NaveBare";
import MainVideo from "./Components/MainVideo";
import Comments from "./Components/Comments";
import SuggestionList from "./Components/SuggestionList";

function App() {
  return (
    <div className="App">
      <NaveBare />
      <div class="row">
        <div class="col-8">
          <MainVideo />
          <Comments />
        </div>
        <div class="col-4">
          <SuggestionList />
        </div>
      </div>
    </div>
  );
}

export default App;
