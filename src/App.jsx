import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import List from "./pages/list";
import Map from "./pages/map";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
