import React, {useState} from 'react';
import Projects from './pages/projects/Projects';
import Header from './Components/Header/Header';
import './styles/styles.css';
import Landing from './pages/landing/Landing';
import Contact from './pages/contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {

    const [currentPage, setCurrentPage] = useState(null);
    const [isPort, setIsPort] = useState(false);

    return (
        <>
            <div className="app">
                <Header/>
                <Landing setIsPort={setIsPort} setCurrentPage={setCurrentPage} />
                <Projects setIsPort={setIsPort} setCurrentPage={setCurrentPage} />
                <Contact/>
                <Footer/>
                <div className="arrow" onClick = {() => {
                    window.scrollTo({
                        top:0,
                        behavior: 'smooth'
                    });
                }} >&#9650;</div>
            </div>
        </>
    )
}

export default App
