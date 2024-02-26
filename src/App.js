import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Dummy from "./components/Dummy";
import Delivery from "./components/Delivery";
import Contacts from "./components/Contacts";
import AllItems from "./components/AllItems";
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="catalog" element={<Catalog/>}>
      <Route index element={<AllItems/>}/>
      </Route>
      <Route path="category" element={<Catalog/>}>
      <Route path=":id" element={<Dummy/>}/>
      </Route>
      <Route path="delivery" element={<Delivery/>}/>
      <Route path="contacts" element={<Contacts/>}/>
      

    </Route>

    
  )
)
function App() {

  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
