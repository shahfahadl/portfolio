import React, {useEffect, useState} from 'react';
import './styles/styles.css';
import project1 from '../../img/project1.png';
import project2 from '../../img/project2.png';
import project3 from '../../img/project3.png';
import project4 from '../../img/project4.jpg';
import tape from '../../img/tape.png';
import plastic from '../../img/plastic.jpg';
import background from '../../img/background.jpg'



const Main = ({setCurrentPage, setIsPort}) => {
    
    const [projects, setProjects] = useState([
        {fullName: 'Chat Application', power: '1', selected: false, image: project1, link: 'https://chat-fahad.herokuapp.com/', name:'chat-fahad' },
        {fullName: 'Portfolio', power: '2', selected: false, image: project3, link: '#', name:'Fahad- Portfolio' },
        {fullName: 'Online Test (contribution)', power: '3', selected: false, image: project2, link: 'https://tecision.herokuapp.com/', name:'Tecision-app' },
        // {name: 'Clinic Management', power: '4', selected: false, image: project4},
    ]);

    const [currentProject, setCurrentProject] = useState(null);

    const [currentPower, setCurrentPower] = useState('1');

    useEffect(() => {
        setIsPort(true);
        setCurrentPage('Projects');
        setSelected('1');
    }, []);

    const setSelected = (power) => {
        let arr = [...projects]
        for (let index = 0; index < projects.length; index++) {
            const project = projects[index];
            if(project.power === power)
            {
                arr[index] = {...project, selected: true};
                setCurrentProject(arr[index]);
                setCurrentPower(project.power);
            }
            else
            {
                arr[index] = {...project, selected: false};
            }
        }
        setProjects(arr);
    }

    const goToLink = (link) => {
        if(link === '#')
            return;
        window.open(link, "_blank");
    }

    return (
        <>
            <div className="main-page">
                <div className="background" style={{background: `url(${background})`}}></div>
                <div className='gradient plastic' style={{
                    background: `url(${plastic})`
                }}></div>
                <div className="bgtext">
                    <h1>Projects.</h1>
                </div>
                <div className={`gradient var${currentPower}`}></div>
                <div className="main">
                    <div className="container">
                        <div className="img">
                            <img className='portImage' src={currentProject?.image} alt="" />
                        </div>
                        <div className="url" onClick = {() => {goToLink(currentProject?.link)}}>
                            <span>{currentProject?.name}</span>
                        </div>
                        <div className="box"></div>
                    </div>
                    <div className="projects">
                        <h4 className='weird' >My Projects</h4>
                        <ul>
                            {projects.map((project) => (
                                <li key={project.power} className={`item ${(project.selected === true) && 'selected'}`} onClick={() => {setSelected(project.power)}} >
                                    <span className='power'>{project.power}</span>
                                    <h3>{project.fullName}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
