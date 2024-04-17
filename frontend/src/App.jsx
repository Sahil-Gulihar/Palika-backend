
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import Contact from "./pages/Contact";
import { Categories } from "./pages/Categories";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { Terms } from "./pages/Terms";
import { Shops } from "./pages/Shops";
function App() {
  
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path='/about' element={<About />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/shop' element={<Shops />} />
        <Route path='/xyz' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

      
    </>
  );
}

export default App;
