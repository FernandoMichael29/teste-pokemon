import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { Home } from '../pages/Home';

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        {/* <Route path="/teste" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
