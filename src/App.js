import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./pages/Landing"; 
import Header from "./components/ui/Header";
import Projects from "./components/ui/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <ChakraProvider>
        <Header />
      <LandingPage name={"LayMui"} />
    
      <Projects />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
