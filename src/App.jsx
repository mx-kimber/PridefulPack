import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserContext";
import "./App.css";
import { UploadProvider } from "./UpLoadContext";
import "./UploadImages.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <UploadProvider>
          <UserProvider>
            <div>
              <Header className= "header" />
            </div>
            <div className = "content">
              <Content />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </UserProvider>
        </UploadProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;