import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserContext";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <div>
            <Header />
          </div>
          <div>
            <Content />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;