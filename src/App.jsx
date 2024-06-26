import './App.css'
import Navbar from "./Components/NavBar/index.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import CreatePost from "./pages/CreatePost/index.jsx";
import Post from "./pages/Post/index.jsx";

function App() {


    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/add-post"} element={<CreatePost />} />
                <Route path={"/post/:postId"} element={<Post />}/>
            </Routes>
        </>
    )
}

export default App
