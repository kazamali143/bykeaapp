import React from 'react';
import Header from '../Components/Header/Header';

function Layout({ title, children, backto}) {

    return (
        <>
        <Header title={title} backto={backto} />
        {children}
        
        </>
    )
}

export default Layout;