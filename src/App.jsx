import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div>
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;