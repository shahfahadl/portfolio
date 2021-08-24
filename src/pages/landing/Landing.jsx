import React, {useEffect} from 'react';
import './styles/style.css';
import back from '../../img/back.jpg';

const Landing = ({setCurrentPage, setIsPort}) => {

    useEffect(() => {
        setIsPort(false);
        setCurrentPage('Home');
    }, [])

    return (
        <>
            <div className='landing'>
                <div className="background" style={{background: `url(${back})`}}></div>
                <div className={`gradient var6`}></div>
                <div className="bgText">
                    <h1>Developer</h1>
                    <h3>React js.</h3>
                    <h6>MongoDB</h6>
                    <h2>Express</h2>
                    <h5>Node js.</h5>
                </div>
                <div className="row1">
                    <div className="text">
                        <div className="line1">
                            <h2>Bringing</h2>
                            <div className="smiles">
                                <h2>Smiles</h2>
                                <h2>Smiles</h2>
                            </div>
                        </div>
                        <div className="line2">
                            <h2>through</h2>
                            <div className="design">
                                <h2 className="designbefore">Designs</h2>
                                <h2>Designs</h2>
                                <h2 className="designafter">Designs</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row2">
                    <div className="sf">
                        <div className="theO" style={{
                            backgroundImage: `url(${back})`
                        }} >
                            SF.
                        </div>
                        <div className="theObefore">
                            SF.
                        </div>
                        <div className="theOafter">
                            SF.
                        </div>
                    </div>
                    <div className="triangles">
                        <div class="triangle1" style={{
                            backgroundImage: `url(${back})`
                        }} >&#9650;</div>
                        <div class="triangle2">&#9650;</div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Landing
