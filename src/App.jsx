import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserContext";
import "./App.css";
import { UploadProvider } from "./UpLoadContext";
import "./UploadImages.css"
import { AdminSidebar } from "./AdminSidebar"

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <UploadProvider>
          <UserProvider>
            <div>
              <AdminSidebar className="sidebar-container" />
            </div>
            <div className ="header">
              <Header />
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