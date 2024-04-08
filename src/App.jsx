import './App.css'
import {BrowserRouter} from "react-router-dom";
import Home from "./Components/Home.jsx";
import CreatePost from "./Components/CreatePost.jsx";

function App() {


  return (
      <BrowserRouter>
        <Home />
          <CreatePost />
      </BrowserRouter>
  )
}

export default App
