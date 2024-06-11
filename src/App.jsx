import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./component/Topbar";

import Home from "./component/Home";
import Skills from "./component/Skills";

import Contact from "./component/Contact";
import { Toaster } from "react-hot-toast";
import Projects from "./component/Projects";
function App() {
  return (
    <>
   
      <Toaster position="top-center" />

      <Topbar />
      <Home />
      <Skills />
      <Projects/>
      <Contact />
     
    </>
  );
}

export default App;
