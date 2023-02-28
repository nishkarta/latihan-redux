import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Login from './pages/Login/Login';
import { store } from "./redux/store";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
