import React from 'react'
import { Outlet } from 'react-router-dom';
import NavbarWeb from '../components/NavbarWeb';
import HeaderWeb from '../components/HeaderWeb';
import FooterWeb from '../components/FooterWeb';
import ModalSignin from '../components/modal/ModalSignin';
import ModalSignup from '../components/modal/ModalSignup';

const LayoutWeb = () => {
    return (
        <div class="wrapper">
            <NavbarWeb />
            <Outlet />
            <FooterWeb/>
            <ModalSignin/>
            <ModalSignup/>
        </div>
    )
}

export default LayoutWeb;
