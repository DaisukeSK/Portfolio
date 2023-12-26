import { useState } from 'react'
import { Main } from '../StyledComponents'
// import pathName from '../../../public/me9.png'
import pathName from '../../../public/me2.svg'

function Sunglasses() {
  const [position, setPosition] = useState([0,0])

// console.log("coordinate:",window.offset)

document.onmousemove=(e)=>{
   console.log(
      (e.clientX/window.innerWidth),
      (e.clientY/window.innerHeight)
      )

      if(e.clientY/window.innerHeight*359+180>=359){

         setPosition([e.clientX/window.innerWidth*359, e.clientY/window.innerHeight*359-180])
      }else{
         setPosition([e.clientX/window.innerWidth*359, e.clientY/window.innerHeight*359+180])
      }
}

  return (
    <svg
   version="1.1"
   id="svg6198"
   // width="681"
   // height="1334"
   viewBox="0 0 681 1334"
   sodipodi:docname="me2a.svg"
   inkscape:version="1.2.2 (732a01da63, 2022-12-09)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlnsXlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs6202">
    <linearGradient
       inkscape:collect="always"
       id="linearGradient8180">
      <stop
         style={{
            // stopColor:`hsl(${position[0]}, 100%, 50%)`,
            stopColor:`hsl(240, 100%, 50%)`,
            stopOpacity:1
         }}
         offset="0"
         id="stop8176" />
      <stop
         style={{
            // stopColor:`hsl(${position[1]}, 100%, 50%)`,
            stopColor:`hsl(0, 100%, 50%)`,
            stopOpacity:1
         }}
         offset="1"
         id="stop8178" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       id="linearGradient8172">
      <stop
         style={{
            // stopColor:`hsl(${position[0]}, 100%, 50%)`,
            stopColor:`hsl(240, 100%, 50%)`,
            stopOpacity:1
         }}
         offset="0"
         id="stop8168"
         />
      <stop
         style={{
            // stopColor:`hsl(${position[1]}, 100%, 50%)`,
            stopColor:`hsl(0, 100%, 50%)`,
            stopOpacity:1
         }}
         offset="1"
         id="stop8170" />
    </linearGradient>
    <filter
       style={{colorInterpolationFilters:"sRGB"}}
       inkscape:label="Soft Colors"
       id="filter7481"
       x="-0.017621145"
       y="-0.0089955022"
       width="1.0352423"
       height="1.017991"
       inkscape:menu="Color"
       inkscape:menu-tooltip="Adds a colorizable edges glow inside objects and pictures">
      <feComponentTransfer
         in="blur"
         result="fbSourceGraphic"
         id="feComponentTransfer7479">
        <feFuncR
           type="gamma"
           amplitude="20"
           exponent="5.02"
           offset="-0.221184"
           id="feFuncR7473" />
        <feFuncG
           type="gamma"
           amplitude="20"
           exponent="5.02"
           offset="-0.221184"
           id="feFuncG7475" />
        <feFuncB
           type="gamma"
           amplitude="20"
           exponent="5.02"
           offset="-0.221184"
           id="feFuncB7477" />
      </feComponentTransfer>
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix7483" />
      <feColorMatrix
         id="feColorMatrix7485"
         type="saturate"
         values="1"
         result="result91"
         in="fbSourceGraphic" />
      <feComposite
         in2="result91"
         id="feComposite7487"
         result="result15"
         operator="arithmetic"
         k2="0.4"
         k1="0.3"
         k3="0.3" />
      <feGaussianBlur
         id="feGaussianBlur7489"
         in="result15"
         result="result8"
         stdDeviation="5" />
      <feColorMatrix
         id="feColorMatrix7491"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 "
         result="result92" />
      <feComposite
         in2="fbSourceGraphic"
         id="feComposite7493"
         operator="in"
         result="result13" />
      <feComposite
         in2="result13"
         id="feComposite7495"
         k3="0.3"
         k1="0.3"
         k2="0.4"
         operator="arithmetic"
         in="result15"
         result="result6" />
      <feFlood
         id="feFlood7497"
         floodColor="rgb(128,172,0)"
         floodOpacity="1"
         result="result10" />
      <feBlend
         in2="result10"
         id="feBlend7499"
         result="result12"
         in="result6"
         mode="darken" />
      <feBlend
         in2="result6"
         id="feBlend7501"
         result="result14"
         mode="screen" />
      <feComposite
         in2="fbSourceGraphic"
         id="feComposite7503"
         in="result14"
         operator="in" />
    </filter>
    <linearGradient
       inkscape:collect="always"
       xlinkHref="#linearGradient8172"
       id="linearGradient8174"
       x1="370.66565"
       y1="722.74988"
       x2="429.78348"
       y2="793.06238"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlinkHref="#linearGradient8180"
       id="linearGradient8182"
      //  x1="526.64001"
       x1="526.64001"
       y1="712.08472"
       x2="588.54675"
       y2="787.60553"
       gradientUnits="userSpaceOnUse" />
  </defs>
  <sodipodi:namedview
     id="namedview6200"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     showgrid="false"
     showguides="true"
     inkscape:zoom="0.384"
     inkscape:cx="186.19792"
     inkscape:cy="755.20833"
     inkscape:window-width="1366"
     inkscape:window-height="705"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="g6204" />
  <g
     inkscape:groupmode="layer"
     inkscape:label="Image"
     id="g6204">
    <path
       style={{
         fill:"url(#linearGradient8174)",
         fillOpacity:1,
         stroke:"#18b2ff",
         strokeWidth:0,
         strokeLinejoin:"round",
         strokeDasharray:"none",
         strokeOpacity:0.5
      }}
       d="m 409.475,700.26964 c 17.57944,-0.54241 32.40507,0.8942 40.98111,12.10054 5.07446,6.63081 6.63937,9.80372 7.54227,16.2147 1.63496,11.60898 -1.7062,23.17574 -4.59157,33.49842 -1.94845,6.97077 -3.51515,10.71763 -8.27533,17.11413 -5.88722,7.91096 -7.34918,9.83901 -14.92051,16.36872 -7.34607,6.33544 -9.97835,9.30567 -21.7116,13.92051 -9.77463,3.84448 -18.0202,3.98578 -29.3079,3.10202 -14.71421,-1.15203 -20.21475,-7.97991 -29.78515,-20.23924 -5.07455,-6.50031 -7.64633,-16.20044 -7.36577,-32.68804 0.19852,-11.66638 3.09707,-15.6977 5.66649,-23.17717 2.16246,-6.29484 6.30282,-10.42404 11.27228,-18.35067 2.85332,-4.55122 9.82608,-10.78508 16.79016,-13.39412 15.20519,-5.69651 18.44295,-3.99888 33.70552,-4.4698 z"
       id="path7559"
       sodipodi:nodetypes="ssssssssssssss" />
    <path
       style={{
         fill:"url(#linearGradient8182)",
         fillOpacity:1,
         stroke:"#18b2ff",
         strokeWidth:0,
         strokeLinejoin:"round",
         strokeDasharray:"none",
         strokeOpacity:0.5
      }}
       d="m 573.88679,696.93278 c 17.91053,-0.51351 13.77132,-0.2294 26.50735,0.50986 9.06931,6.73549 9.74757,9.88098 14.25498,21.09601 3.11375,7.74741 2.47047,7.94571 2.51901,16.73945 0.008,1.40567 -1.2025,9.70486 -2.92426,18.32908 -0.81202,4.06737 -6.23646,16.73874 -11.1562,23.60872 -12.23404,17.08374 -26.23747,25.3779 -40.6706,27.72329 -7.67909,1.24785 -16.84461,0.98415 -26.841,-2.46125 -2.92461,-1.00801 -10.4441,-8.42016 -12.95265,-12.08281 -3.95253,-5.77095 -7.53118,-11.11756 -9.66346,-19.97759 -2.49452,-10.36519 -2.37987,-17.33284 -0.83829,-28.03258 1.22141,-8.47753 4.74428,-12.57246 7.93372,-16.62746 9.92996,-12.6248 15.83266,-17.19694 22.00062,-23.8192 11.42118,-3.96586 16.56722,-4.5679 31.83078,-5.00552 z"
       id="path7559-2"
       sodipodi:nodetypes="scsssssssssscs" />
  </g>
</svg>
  )
}

export default Sunglasses
