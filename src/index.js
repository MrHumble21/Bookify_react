import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllBooks from './comonents/AllBooks';
import MenuCustom from './comonents/MenuCustom';
import { ChakraProvider } from '@chakra-ui/react';
import SearchBook from './comonents/SearchBook';
import Description from './comonents/Description';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider>
    <BrowserRouter>
    <MenuCustom />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/search-books" element={<SearchBook />} />
        <Route path="/book/:id" element={<Description />} />
       
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
