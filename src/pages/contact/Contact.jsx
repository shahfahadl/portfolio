import React, {useState} from 'react';
import './styles/style.css';
import contactBg from '../../img/contactbg.jpg';
import fiverr from '../../img/fiverr.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import profilePic from '../../img/pf.jpg'

const Contact = () => {

    const [date, setDate] = useState(new Date());

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];


    return (
        <div className="contact-container">
            <div className="bgContact" style={{
                backgroundImage: `url(${contactBg})`
            }} ></div>
            {console.log(date.getDate())}
            <div className="contactGradient"></div>
            <div className="_contactGradient"></div>
            <div className='contact'>
                <div className="Bgtext">
                    <h1>{monthNames[date.getMonth()]}</h1>
                    <h1>/</h1>
                    <h1>{date.getDate()}</h1>
                </div>
                <h2>Contact</h2>
                <div className="links">
                    <div className="card">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="card">
                        <img src={fiverr} alt="" />
                    </div>
                    <div className="card">
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <div className="services">
                    <div className="coll1">
                        <div className="pf">
                            <img src={profilePic} alt="" />
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="coll2">
                        <div className="service-text">
                            <h3>SERVICES</h3>
                            <h3>SERVICES</h3>
                            <h3>SERVICES</h3>
                        </div>
                        <ul>
                            <li className="service">
                                <p>Designing a portfolio</p>
                            </li>
                            <li className="service">
                                <p>UX inspection</p>
                            </li>
                            <li className="service">
                                <p>Full stack development</p>
                            </li>
                            <li className="service">
                                <p>MERN stack</p>
                            </li>
                            <li className="service">
                                <p>React js</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
