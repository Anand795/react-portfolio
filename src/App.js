import "./App.css";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MyWork from "./components/MyWork";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";

function App() {
  
  // TODO -> learn useLocation
  const location = useLocation();

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {/* <h1>Hello World</h1> */}
      {/* For Framer-motion animation on page change*/}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/mywork" element={<MyWork />} />
          <Route exact path="/blogs" element={<BlogPage />} />
          <Route exact path="/skills" element={<MySkillsPage />} />
        </Routes>
      </AnimatePresence> 
    </ThemeProvider>
  );
}

export default App;
