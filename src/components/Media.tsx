import HTML from './icons/HTML';
import CSS from './icons/CSS';
import Sass from './icons/Sass';
import JS from './icons/JS';
import TS from './icons/TS';
import Jquery from './icons/Jquery';
import React from './icons/React';
import MySQL from './icons/MySQL';
import PHP from './icons/PHP';
import NodeJS from './icons/NodeJS';
import PostgreSQL from './icons/PostgreSQL';
import FireBase from './icons/FireBase';
import NextJS from './icons/NextJS';
import Fortran from './icons/Fortran';
import Git from './icons/Git';
import Github from './icons/Github';
import VSCode from './icons/VSCode';
import Inkscape from './icons/Inkscape';
import Render from './icons/Render';
import Vercel from './icons/Vercel';
import Hostinger from './icons/Hostinger';

import cccVideo from '../../public/projectsVideos/Color Code Converter.mp4'
import ecommerceVideo from '../../public/projectsVideos/Fake Shop.mp4'
import satelliteVideo from '../../public/projectsVideos/Satellite Launch simulation.mp4'
import animationVideo from '../../public/projectsVideos/SVG Animation Gallery.mp4'
import memolisVideo from '../../public/projectsVideos/memolis.mp4'
import dnnVideo from '../../public/projectsVideos/DNN.mp4'
import fridgefyVideo from '../../public/projectsVideos/Fridgefy.mp4'

import portfolioPic from '../../public/projectsPics/portfolio.png';
import cccPic from '../../public/projectsPics/ccc.png';
import ecommercePic from '../../public/projectsPics/ecommerce.png';
import satellitePic from '../../public/projectsPics/satellite.png';
import animationPic from '../../public/projectsPics/animation.png';
import memolisPic from '../../public/projectsPics/memolis.png';
import cornerstoneConectPic from '../../public/projectsPics/cornerstone-connect.png';
import dnnPic from '../../public/projectsPics/dnn.png';
import fridgefyPic from '../../public/projectsPics/fridgefy.png';

export const iconObj:{[key:string]:JSX.Element} = {
    'HTML': <HTML/>,
    'CSS': <CSS/>,
    'Sass': <Sass/>,
    'JavaScript':<JS/>,
    'TypeScript':<TS/>,
    'jQuery':<Jquery strokeColor={'#000000'}/>,
    '@jQuery': <Jquery strokeColor={'#ffffff'}/>,
    'React':<React/>,
    'MySQL':<MySQL/>,
    'PHP':<PHP/>,
    'PostgreSQL':<PostgreSQL strokeColor={'#000000'}/>,
    '@PostgreSQL':<PostgreSQL strokeColor={'#ffffff'}/>,
    'Node.js':<NodeJS/>,
    'FireBase':<FireBase/>,
    'NextJS':<NextJS/>,
    'Github': <Github where='about'/>,
    'Git': <Git/>,
    'VSCode': <VSCode/>,
    'Inkscape': <Inkscape/>,
    'Render': <Render/>,
    'Vercel': <Vercel/>,
    'Hostinger': <Hostinger/>,
    'Fortran': <Fortran/>,
}

export const videoPaths:{[key:string]:string} = {
    'memolis':memolisVideo,
    'ccc':cccVideo,
    'e-commerce':ecommerceVideo,
    'satellite':satelliteVideo,
    'animation':animationVideo,
    'dnn':dnnVideo,
    'fridgefy':fridgefyVideo
}

export const imagePaths:{[key:string]:string} = {
    'memolis':memolisPic,
    'ccc':cccPic,
    'e-commerce':ecommercePic,
    'satellite':satellitePic,
    'animation':animationPic,
    'dnn':dnnPic,
    'portfolio': portfolioPic,
    'fridgefy': fridgefyPic,
    'coenerstone-connect':cornerstoneConectPic
}