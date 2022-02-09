import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  useEffect(() => {
    console.log("i fire once");
  }, []);

  return <h1>Hello from React!</h1>;
}

export default App;
