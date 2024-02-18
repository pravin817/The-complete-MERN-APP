import { BrowserRouter, Routes, Route } from "react-router-dom";

// import All components
import UserName from "./components/UserName";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserName />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/password" element={<Password />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/recovery" element={<Recovery />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
