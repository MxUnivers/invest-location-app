import React from 'react'
import { routing } from '../config/routing'
import { useLocation, useNavigate } from 'react-router-dom'
import { profilePictureDefault } from '../config/dataApi';
import { MdEdit, MdExitToApp, MdOutlineSearch, MdPerson } from "react-icons/md";
import { getAndCheckLocalStorage, handleClearLocalStorage } from '../config/localvalueFuction';
import { localStorageKeys } from '../config/localvalue';



const NavbarWeb = () => {


    const navigate = useNavigate();

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
                        {
                            !getAndCheckLocalStorage(localStorageKeys.userId) &&
                            <li class="no-pd dropdown">
                                <a href="javascript:void(0)" data-toggle="modal" data-target="#signin" class="addlist"><img src={profilePictureDefault}
                                    class="img-responsive img-circle avater-img" alt="" /><strong style={{ opacity: "0" }}>{"Profile"}</strong></a>
                            </li>
                        }


                        {

                            getAndCheckLocalStorage(localStorageKeys.userId) &&
                            <li class="dropdown">
                                {
                                    getAndCheckLocalStorage(localStorageKeys.userId) &&
                                    <a href="#" onClick={() => { navigate(`/${routing.profile_edit}`) }} data-toggle="dropdown" class=" dropdown-toggle addlist"><img src={profilePictureDefault}
                                        class="img-responsive img-circle avater-img" alt="" /><strong style={{}}>{"Profile"}</strong></a>
                                }

                                <ul class="dropdown-menu animated fadeOutUp">
                                    <li class="" style={{ border: "0px 0px 1px 0px " }}><a href="#" onClick={() => { navigate(`/${routing.profile_edit}`) }}  style={{ display:"flex", flexDirection:"flex" }} ><MdPerson size={25} /> <span>Mettre à jour profile </span></a></li>
                                    <li class="" style={{ border: "0px 0px 1px 0px " }}><a href="#" class="text-danger" style={{ display:"flex", flexDirection:"flex" }} onClick={handleClearLocalStorage}><MdExitToApp size={25} /> <span className="text-danger">Déconnexion </span></a></li>
                                </ul>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarWeb