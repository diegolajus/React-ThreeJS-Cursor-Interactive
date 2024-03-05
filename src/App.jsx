import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
          <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;