import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PageOne } from './Components/Pages/PageOne/PageOne';
import { PageThree } from './Components/Pages/PageThree/PageThree';
import { PageTwo } from './Components/Pages/PageTwo/PageTwo';
import { ProductsList } from './Components/ProductsList/ProductsList';


export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="pageTwo" element={<PageTwo />} />
        <Route path="pageThree" element={<PageThree />} />
        <Route path="pageProducts" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
