import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Detail from "../components/Detail";

function App() {

  return (
            <Routes>
              {/* <Route path={`${process.env.PUBLIC_URL}/`} element={Home}/> */}
              <Route path="/" element={< Home/>}/>
              <Route path="/detail/:id" element={< Detail/>}/>
            </Routes>
        );
}

export default App;
