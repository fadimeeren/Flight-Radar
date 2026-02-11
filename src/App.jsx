import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import List from "./pages/list";
import Map from "./pages/map";
import { useEffect } from "react";
import { getFlights } from "./redux/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

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
