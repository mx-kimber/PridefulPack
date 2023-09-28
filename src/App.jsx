import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <div className="header">
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