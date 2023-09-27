import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="header">
        <Header />
      </div>
      <div>
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;