import Intro from "./intro";
import Header from "./header";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Projects/>
    </div>
  );
}

export default App;