import { Main } from '../StyledComponents';
import JS from '../icons/JS';
import TS from '../icons/TS';
import Jquery from '../icons/Jquery';
import React from '../icons/React';
import MySQL from '../icons/MySQL';
import PHP from '../icons/PHP';
import portfolio from '../../../public/portfolio.png';
import ccc from '../../../public/ccc.png';
import satellite from '../../../public/satellite.png';
import animation from '../../../public/animation.png';
import memolis from '../../../public/memolis.png';
import news from '../../../public/news.png';
import { Selected } from '../../App';

type Props = {
  selected:Selected
};

function Works({selected}:Props) {
  return (
    <Main
      className='works'
      show={selected.current==2?1:0}
      direction={selected.current-selected.prev<0?1:0}
      aa={selected.current==2 || selected.prev==2? 1:0}
    >
      <h1>Works</h1>

      <div className='worksFlex'>
        <div className='WFchild'>
          <a href='https://memolis.000webhostapp.com/login/login.php' target='_blank'>
            <img src={memolis}/>
            <h2>memolis</h2>
          </a>
          <p>
            WordBook app. You can create your own account,
            and add pairs of a term and definition that you want to memorize.
          </p>
          <div className='iconFlex'>
            <JS></JS>
            {/* <TS></TS>
            <HTML></HTML>
            <CSS></CSS> */}
            <Jquery></Jquery>
            {/* <React></React> */}
            <PHP></PHP>
            <MySQL></MySQL>
          </div>
        </div>
        <div className='WFchild'>
          <a href='https://color-code-converter.vercel.app/' target='_blank'>
            <img src={ccc}/>
            <h2>Color Code Converter</h2>
          </a>
          <p>
            It provides multiple kinds of color codes of any color that you want.
            You can pick up any color from color space or color bars.
          </p>
          <div className='iconFlex'>
            <JS></JS>
            {/* <TS></TS>
            <HTML></HTML>
            <CSS></CSS>
            <Jquery></Jquery> */}
            <React></React>
            {/* <PHP></PHP>
            <MySQL></MySQL> */}
          </div>
        </div>
      </div>

      <div className='worksFlex'>
        <div className='WFchild'>
          <a href='https://satellite-launch-simulation.vercel.app/' target='_blank'>
            <img src={satellite}/>
            <h2>Satellite Launch Simulation</h2>
          </a>
          <p>
            A numerical simulation of a satellite's behavior going around the planet, created based on a formula for gravity.
            You can try it in various situations.
          </p>
          <div className='iconFlex'>
            <JS></JS>
            {/* <TS></TS>
            <HTML></HTML>
            <CSS></CSS> */}
            <Jquery></Jquery>
            {/* <React></React>
            <PHP></PHP>
            <MySQL></MySQL> */}
          </div>
        </div>
        <div className='WFchild'>
          <a href='https://svg-animation-gallery.vercel.app/' target='_blank'>
            <img src={animation}/>
            <h2>SVG Animation Gallery</h2>
          </a>
          <p>
            You can enjoy many mouse-interactive SVG animations.
            They are all made with only Vanilla JavaScript.
          </p>
          <div className='iconFlex'>
            <JS></JS>
            {/* <TS></TS>
            <HTML></HTML>
            <CSS></CSS>
            <Jquery></Jquery> */}
            {/* <React></React> */}
            {/* <PHP></PHP>
            <MySQL></MySQL> */}
          </div>
        </div>
      </div>

      <div className='worksFlex'>
        <div className='WFchild'>
          <a href='https://news-app2023.vercel.app/' target='_blank'>
            <img src={news}/>
            <h2>News App</h2>
          </a>
          <p>
            API application for news feed.
            You can select news from various categories, and search by keywords too.
          </p>
          <div className='iconFlex'>
            {/* <JS></JS> */}
            <TS></TS>
            {/* <HTML></HTML>
            <CSS></CSS>
            <Jquery></Jquery> */}
            <React></React>
            {/* <PHP></PHP>
            <MySQL></MySQL> */}
          </div>
        </div>
        <div className='WFchild'>
          <img src={portfolio}/>
          <h2>This portfolio</h2>
          <p>
            Portfolio you are browsing right now.<br/>
            Thank you for visiting my portfolio, have fun, I hope you like it.
          </p>
          <div className='iconFlex'>
            {/* <JS></JS> */}
            <TS></TS>
            {/* <HTML></HTML>
            <CSS></CSS>
            <Jquery></Jquery> */}
            <React></React>
            <PHP></PHP>
            <MySQL></MySQL>
          </div>
        </div>
      </div>
    </Main>
  )
};

export default Works;