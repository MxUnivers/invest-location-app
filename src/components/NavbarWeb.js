import React from 'react'
import { routing } from '../config/routing'
import { useLocation } from 'react-router-dom'
import { profilePictureDefault } from '../config/dataApi';
import {MdOutlineSearch} from "react-icons/md";



const NavbarWeb = () => {
    const location = useLocation();


    return (
        <nav class="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
            <div class="container-fluid">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i class="ti-align-left"></i>
                </button>

                <div class="navbar-header">
                    <a class="navbar-brand" href="/">
                        <img src="assets/img/logo.png" class="logo logo-display" alt="" />
                        <img src="assets/img/logo.png" class="logo logo-scrolled" alt="" />
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                        {/*<li class={` ${location.pathname === `/` ? "active" : ""}`}>
                            <a href="/" class="dropdown-toggle" >Accueil</a>
                        </li> */}
                        <li class={` ${location.pathname === `/${routing.search}` ? "active" : ""}`}>
                            <a href={`/${routing.search}`} class="dropdown-toggle" ><MdOutlineSearch size={25} /></a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
						<li class="no-pd dropdown">
							<a  href="javascript:void(0)" data-toggle="modal" data-target="#signin" class="addlist"><img src={profilePictureDefault}
									class="img-responsive img-circle avater-img" alt="" /><strong style={{ opacity:"0" }}>{"Profile"}</strong></a>
                                    </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarWeb