import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
           {isAuth  && authRoutes.map(({path, Component}) =>
           <Route key={path} path={path} component={Component} exact/>
           )}
            {publicRoutes.map(({path, Component}) =>
           <Route key={path} path={path} component={Component} exact/>
           )}
      </Routes>
    );
};

export default AppRouter;