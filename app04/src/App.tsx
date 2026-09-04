import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import ConsumersList from "./components/ConsumersList";

function App() {
  return (    
    <BrowserRouter>
      <Header appTitle="AddressBook 1.0" />
      <Container fluid className="m-0 p-4" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cmrs" element={<ConsumersList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App
