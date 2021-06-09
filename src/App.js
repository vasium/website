import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
        <About />
      </Main>
    </>
  );
}

export default App;
