import {React, useState, useRef} from 'react';
import './styles.css';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fb from './img/fb.png';
import fiverr from './img/fiverr.jpg';
import p1 from './img/p1.jpeg';
import p2 from './img/p2.jpeg';
import p3 from './img/pp.png';
import p3_ from './img/pp3.png';
import mern from './img/mern.jpg';
import pp from './img/pf.jpg';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
// import HeadShake from 'react-reveal/HeadShake';
import Jello from 'react-reveal/Jello';

const App = () => {

    const myRef1 = useRef(null);
    const executeScroll1 = () => myRef1.current.scrollIntoView();    
    
    const myRef2 = useRef(null);
    const executeScroll2 = () => myRef2.current.scrollIntoView();    
    
    const myRef3 = useRef(null);
    const executeScroll3 = () => myRef3.current.scrollIntoView();    

    const [navActive, setNavActive] = useState(false);

    const openFb = () => {
        const url = 'https://web.facebook.com/shahfahad.dev/';
        window.open(url, '_blank');
    }
    const openFiverr = () => {
        const url = 'https://www.fiverr.com/shahfahadk?up_rollout=true';
        window.open(url, '_blank');
    }
    return (
        <div className="res">
        <main>
            <nav className={`${navActive?"active":null}`}>
                <ul className="navelements">
                    <li onClick={executeScroll1} className="element">Main</li>
                    <li onClick={executeScroll2} className="element">Projects</li>
                    <li onClick={executeScroll3} className="element">Contact</li>
                </ul>

            </nav>
            <button className="navbtn" onClick={() => {setNavActive(!navActive)}} > {navActive?<FontAwesomeIcon icon={faAngleLeft} />:<FontAwesomeIcon icon={faAngleRight} />}</button>
            
            <head>
                <span>Fahad.</span>
                <span>EN.</span>
            </head>
            <div ref={myRef1} className="intro">
                <Fade left>
                    <div className="bg"></div>
                </Fade>
                <Tada>
                    <div className="text">
                        <div className="one">
                            <h3>convert</h3>
                            <h3>ideas</h3>
                        </div>
                        <h3>into reality!</h3>
                    </div>
                </Tada>
                <Fade top>
                    <div className="links">
                        <div onClick={openFb} className="fb">
                            <img src={fb} alt="fb" />
                        </div>
                        <div onClick={openFiverr} className="fiverr">
                            <img src={fiverr} alt="fiverr" />
                        </div>
                    </div>
                </Fade>
            </div>

            <div ref={myRef2} className="projects">
                <Jello>

                <div className="dots">
                    <div className="d1"></div>
                    <div className="d2"></div>
                </div>
                {/* <HeadShake> */}

                <h3>Projects</h3>
                </Jello>
                {/* </HeadShake> */}
                <div className="port">
                    <Fade left>

                    <div className="project mern">
                        <img src={mern} alt="" />
                        <div className="showonhover">
                            <h3>Chat Application</h3>
                            <div className="images">
                                <img src={p3} alt="" />
                                <img src={p3_} alt="" />
                            </div>
                            <p>I designed this real-time chat application using mern stack and socket.io</p>
                        </div>
                    </div>
                    </Fade>
                    <Fade left>

                    <div className="project p1">
                        <img src={p2} alt="" />
                        <div className="showonhover">
                            <h3>Psd Conversion</h3>
                            <p>This project was selected from an online inspiration, I converted the image to responsive html/css</p>
                        </div>
                    </div>
                    </Fade>

                    <Fade left>

                    <div className="project p2">
                        <img src={p1} alt="" />
                        <div className="showonhover">
                            <h3>Psd Conversion</h3>
                            <p>This project was selected from an online inspiration, I converted the image to responsive html/css</p>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
            <div ref={myRef3} className="contact">
                <Fade left>
                <h3>Contact <br/> Me.</h3>
                </Fade>
                <Fade right>
                <div className="info">
                    <div className="dp">
                        <img src={pp} alt="" />
                    </div>
                    <div className="name">
                        <span>Name: </span>
                        <span>Shah Fahad</span>
                    </div>
                    
                    <div className="skills">
                        <h4>Skills</h4>
                        <div className="skill">
                            <div className="per per1"></div>
                            <span>Mern</span>
                        </div>
                        <div className="skill">
                            <div className="per per2"></div>
                            <span>Psd conversion</span>
                        </div>
                        <div className="skill">
                            <div className="per per3"></div>
                            <span>Html/css/js</span>
                        </div>
                    </div>
                </div>
                </Fade>
                <div className="social">
                    <Fade left>

                    <div onClick={openFb} className="face">
                        <img src={fb} alt="" />
                    </div>
                    </Fade>
                    <Fade left>
                        
                    <div onClick={openFiverr} className="fiverr_">
                        <img src={fiverr} alt="" />
                    </div>
                    </Fade>
                </div>
            </div>
        </main>
        </div>
    )
}

export default App;
