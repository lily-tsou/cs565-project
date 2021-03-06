import React from 'react'
import Navbar from './Navbar'
import {FaReact, FaNodeJs,FaGoogle} from 'react-icons/fa'
import {SiKubernetes, SiMongodb} from 'react-icons/si'
const bootstrap = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css';

function About() {
    return (
        <div className = "my-container">
            <link rel="stylesheet" type="text/css" href={bootstrap}/>
            <Navbar/>
            <div className = "about-container">
                <p className = "about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus integer feugiat scelerisque varius morbi. Morbi tristique senectus et netus et malesuada fames. Sem et tortor consequat id porta nibh venenatis. Nec ullamcorper sit amet risus nullam eget felis eget. 
                Ac tortor vitae purus faucibus ornare. Egestas congue quisque egestas diam in arcu cursus euismod quis. Morbi tristique senectus et netus et malesuada. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Blandit massa enim nec dui nunc mattis. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. 
                Penatibus et magnis dis parturient montes nascetur ridiculus mus. Donec adipiscing tristique risus nec feugiat in. Ultrices dui sapien eget mi proin sed libero. Neque gravida in fermentum et sollicitudin ac orci phasellus. Eu turpis egestas pretium aenean pharetra. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. 
                Malesuada fames ac turpis egestas sed tempus urna et pharetra. Purus non enim praesent elementum. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Ut sem viverra aliquet eget sit amet tellus cras. Purus non enim praesent elementum facilisis. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. 
                Quisque id diam vel quam elementum. Lorem donec massa sapien faucibus et molestie ac feugiat. Nunc sed blandit libero volutpat sed. Ullamcorper malesuada proin libero nunc consequat. Mi tempus imperdiet nulla malesuada. Elit eget gravida cum sociis natoque penatibus. Blandit cursus risus at ultrices mi tempus. 
                Nec tincidunt praesent semper feugiat nibh sed. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Sed felis eget velit aliquet sagittis id consectetur. Arcu ac tortor dignissim convallis aenean et tortor. Risus commodo viverra maecenas accumsan lacus vel facilisis. Erat nam at lectus urna duis convallis convallis tellus id. 
                At consectetur lorem donec massa sapien faucibus.
                </p>
            </div>
            <footer className = "about-footer">
                <div className = "about-icon"><FaReact/></div>
                <div className = "about-icon"><SiMongodb/></div>
                <div className = "about-icon"><FaNodeJs/></div>
                <div className = "about-icon"><SiKubernetes/></div>
                <div className = "about-icon"><FaGoogle/></div>
            </footer>
        </div>
    )
}

export default About
