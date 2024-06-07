import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./component/Topbar";

import Home from "./component/Home";
import Skills from "./component/Skills";
import Projects from "./component/projects";
import Contact from "./component/Contact";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
   
      <Toaster position="top-center" />

      <Topbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
     
    </>
  );
}

export default App;
