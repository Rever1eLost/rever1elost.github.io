import './App.css';
import './Block.css'; // Импорт файла стилей для блоков
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './footer'; // Импорт компонента подвала
import './footer.css';
import backgroundImage from './banner.webp';
import HomeWithNews from './Blocks';
import About from './About';
import Teams from './Teams';
import News from './News';
import Forum from './Forum'; 
import Login from './login'; // Импортируем компонент формы входа
import ResponsiveStyles from './ResponsiveStyles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  Outlet,
} from "react-router-dom";

<ResponsiveStyles /> 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
          element: <HomeWithNews/>,
        },
      {
        path: "/login",
          element: <Login />,
        },
        {
        path: "/about",
          element: <About />,
        },
        {
          path: "/teams",
            element: <Teams />,
        },
        {
          path: "/news",
            element: <News />,
        },
        {
          path: "/forum",
            element: <Forum />,
        },
    ]

  },
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}



function Root() {
  return (
    <>
    <div style={styles}>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>
  );
}

const styles = {
  backgroundImage: `url(${backgroundImage})`, 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '60vh', 
};


export default App;
