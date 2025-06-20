import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "./components/ui/Toaster";
import LandingPage from "./pages/Landing"; // Your main component or router
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
