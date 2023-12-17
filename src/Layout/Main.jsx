import React from 'react';
import Nav from '../Pages/Shared/Navbar/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
           <Outlet></Outlet> 
        </div>
    );
};

export default Main;