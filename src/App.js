import "./App.css";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Blogs from "./components/Blogs";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      
        <GlobalStyle />
        {/* <h1>Hello World</h1> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/mywork" element={<MyWork />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/skills" element={<About />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
