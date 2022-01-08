import React, { useState } from 'react'
import reactDom from "react-dom";

//background style when accessbility menu is open
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000
}
export default function Modal({ open, onClose, onPos, pos }) {

    const [isLeft, setIsLeft] = useState(true);
    const [isOn, setIsOn] = useState(false);
    const [language, setLanguage] = useState("English");


    function switchStyles(e) {
        e.preventDefault();

        if (isLeft) {
            document.getElementById('modal').style.left = null;
            document.getElementById('modal').style.right = 0;
            onPos()
            setIsLeft(false);
        } else {
            document.getElementById('modal').style.left = 0;
            document.getElementById('modal').style.right = null;
            onPos()
            setIsLeft(true);
        }
    }

    //changes the class name inorder to change the style using bootstrap
    function toggleOn(e) {
        e.preventDefault();

        if (isOn) {
            document.getElementById("toggle").className = "btn btn-danger"
            setIsOn(false);
        } else {
            document.getElementById("toggle").className = "btn btn-success"
            setIsOn(true);
        }
    }



    function setLang(e){
        e.preventDefault();

        setLanguage(e.target.id)

    }

    //reset settings function
    function reset(e) {
        e.preventDefault();

        let elems = document.getElementsByClassName('active');

        for(let i=elems.length-1;i>=0;i--){
            elems[i].classList.remove('active')
        }

        document.getElementById('searchbar').value=""
    }

    if (!open){ 
        return null
    }else{
        let left = pos ? 0 : null;
        let right = pos ?null : 0;
    return reactDom.createPortal(
        <div style={OVERLAY_STYLES}>
            <div className="container-fluid" >
                <div id="modal" style={{
                    position: 'fixed',
                    top: '50%',
                    transform: 'translate(0, -50%)',
                    backgroundColor: '#FFF',
                    zIndex: 1000,
                    padding: '10px',
                    width: '500px',
                    height: '85vh',
                    left: left,
                    right: right,
                    overflowY: 'scroll'
                }}>
                    <div className='d-flex flex-column bd-highlight'>
                        <div className='p-2 d-flex flex-row bd-highlight justify-content-evenly align-items-center'>

                            <button className='p-2 bd-highlight btn btn-primary' onClick={onClose}>Close</button>

                            <button className='p-2 bd-highlight btn btn-primary' onClick={switchStyles}>Switch Position</button>

                            <div className="dropdown">
                                <button className="p-2 btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {language}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" onClick={setLang} href="/" id="English">English</a></li>
                                    <li><a className="dropdown-item" onClick={setLang} href="/" id="French">French</a></li>
                                    <li><a className="dropdown-item" onClick={setLang} href="/" id="Spanish">Spanish</a></li>
                                    <li><a className="dropdown-item" onClick={setLang} href="/" id="Korean">Korean</a></li>
                                </ul>
                            </div>

                            <button className='p-2 bd-highlight btn btn-primary' onClick={reset}>Reset Settings</button>

                            <button id="toggle" className={isOn ? "p-2 btn btn-success" :'p-2 btn btn-danger'} onClick={toggleOn}>{isOn ? "On" : "Off"}</button>

                        </div>
                        <div className='p-2 bd-highlight'>
                            <form className="d-flex flex-row form-inline my-2 my-lg-0">
                                <input id="searchbar" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                        <div className='p-2 bd-highlight'>
                            <h3 style={{color:"lightgreen"}}>Content Adjustments</h3>
                            <div className='d-flex flex-row bd-highlight justify-content-evenly align-items-center border rounded' style={{minHeight:"200px"}}>
                                <div className='p-2 bd-highlight' style={{height:"100%",width:"100%",minHeight:"200px"}}>
                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="button" autoComplete="off" aria-pressed="true" style={{height:"100%",width:"100%",minHeight:"200px"}}>Highlight Titles</button>
                                </div>
                                <div className='p-2 bd-highlight' style={{height:"100%",width:"100%",minHeight:"200px"}}>
                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="button" autoComplete="off" aria-pressed="true" style={{height:"100%",width:"100%",minHeight:"200px"}}>Highlight Links</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 bd-highlight'>
                            <h3 style={{color:"lightgreen"}}>Color Adjustments</h3>
                            <div className='d-flex flex-row bd-highlight justify-content-evenly align-items-center border rounded' style={{minHeight:"200px"}}>
                                <div className='p-2 bd-highlight' style={{height:"100%",width:"100%",minHeight:"200px"}}>
                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="button" autoComplete="off" aria-pressed="true" style={{height:"100%",width:"100%",minHeight:"200px"}}>Dark Contrast</button>
                                </div>
                                <div className='p-2 bd-highlight' style={{height:"100%",width:"100%",minHeight:"200px"}}>
                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="button" autoComplete="off" aria-pressed="true" style={{height:"100%",width:"100%",minHeight:"200px"}}>Light Contrast</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 bd-highlight'>
                            <h3 style={{color:"lightgreen"}}>Orientation Adjustments</h3>
                            <div className='d-flex flex-row bd-highlight justify-content-evenly align-items-center border rounded' style={{minHeight:"200px"}}>
                                <div className='p-2 bd-highlight' style={{height:"100%",width:"100%",minHeight:"200px"}}>
                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="button" autoComplete="off" aria-pressed="true" style={{height:"100%",width:"100%",minHeight:"200px"}}>Mute Sounds</button>
                                </div>
                                <div className='p-2 bd-highlight' style={{height:"100%",width:"100%",minHeight:"200px"}}>
                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="button" autoComplete="off" aria-pressed="true" style={{height:"100%",width:"100%",minHeight:"200px"}}>Hide Images</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
    }
}
