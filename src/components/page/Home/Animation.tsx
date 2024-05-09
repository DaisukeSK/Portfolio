import { useEffect, useState } from 'react'
import { AnimationDiv, G3 } from '../../StyledComponents';
import G3_bg1 from '../../../../public/bg8.png';

function Animation() {

    const [animeState, setAnimeState]=useState<number>(0)

    let insert4=[]
    for(let i=0; i<6; i++){
        insert4.push(
            <text y='170' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff97' fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic' key={i}>
                <animate attributeName='x' values='20%;50%' fill='freeze' calcMode="spline" keySplines='0 .5 .5 1' begin={`${3+i*0.1}s`} dur='1.5s' repeatCount="1"/>
                <animate attributeName='opacity' values='0;1' begin={`${3+i*0.1}s`} dur='3s' repeatCount="1"/>
                Vancouver
            </text>
        )
    }

    let insert5=[]
    for(let i=0; i<6; i++){
        insert5.push(
            <text y='170' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff97' fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic' key={i}>
                <animate attributeName='x' values='80%;50%' fill='freeze' calcMode="spline" keySplines='0 .5 .5 1' begin={`${3+i*0.1}s`} dur='1.5s' repeatCount="1"/>
                <animate attributeName='opacity' values='0;1' begin={`${3+i*0.1}s`} dur='3s' repeatCount="1"/>
                Vancouver
            </text>
        )
    }

    useEffect(()=>{

        [1,2,10,13.5,14.5,16].map((num:number)=>{
            setTimeout(()=>setAnimeState(num),num*1000)
        })
        
    },[])

    return (

        <AnimationDiv anime={animeState}>

            <svg width='100%' height='100%'>

                <defs>

                    <pattern id="g3_1" width="100%" height="100%">
                        <image opacity='0' href={G3_bg1} y="110" width="450px">
                        <animate attributeName="x" values="0;-50" dur="8s" begin='8s' repeatCount="1"/>
                        <animate attributeName="opacity" values="0;1" dur="1s" fill='freeze' begin='8s' repeatCount="1"/>
                        <animate attributeName="opacity" values="1;0" dur="1s" fill='freeze' begin='15s' repeatCount="1"/>
                        </image>
                    </pattern>

                    <clipPath id="g3_clip">
                        <text x='50%' y='170' dominantBaseline="middle" textAnchor="middle" fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic'>
                        Vancouver
                        </text>
                    </clipPath>

                    <linearGradient id="linearG" x1="0%" y1="0%" x2="110%" y2="22%">
                        <stop stopColor='#ffffff97'>
                        <animate attributeName="offset" dur="1s" values="0;1" fill='freeze' begin='1s' repeatCount="1" />
                        </stop>
                        <stop stopColor='#000055'>
                        <animate attributeName="offset" dur="1s" values="0;1" fill='freeze' begin='1s' repeatCount="1" />
                        </stop>
                        <stop stopColor='#000055' offset="1"/>
                    </linearGradient>

                </defs>

                <G3 anime={animeState}>
                    <text className='g3_text1' x="50%" y="50" dominantBaseline="middle" textAnchor="middle" fill='url(#linearG)' fontFamily='Times' fontSize='45' fontWeight='bold' fontStyle='italic'>
                        Based
                    </text>

                    <text className='g3_text2' x='50%' y='110' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff97' fontFamily='serif' fontSize='50' fontWeight='bold' fontStyle='italic'>
                        in
                    </text>

                    <text className='g3_text3' y='170' opacity='0' dominantBaseline="middle" textAnchor="middle" fill='#ffffff97' fontFamily='arial' fontSize='65' fontWeight='900' fontStyle='italic'>
                        <animate attributeName='x' values='20%;50%' fill='freeze' calcMode="spline" keySplines='0 .5 .5 1' begin='3s' dur='1.5s' repeatCount="1"/>
                        <animate attributeName='opacity' values='0;1' fill='freeze' begin='3s' dur='3s' repeatCount="1"/>
                        <animate attributeName='opacity' values='1;0' fill='freeze' begin='7.2s' dur='1s' repeatCount="1"/>
                        <animate attributeName='opacity' values='0;1' fill='freeze' begin='15.5s' dur='.5s' repeatCount="1"/>
                        <animate attributeName='opacity' values='1;0' fill='freeze' begin='16s' dur='.5s' repeatCount="1"/>
                        Vancouver
                    </text>

                    <rect x='0' y='0' width='100%' height='200px' fill='url(#g3_1)' clipPath='url(#g3_clip)'/>
                    
                    {insert4}{insert5}
                </G3>

            </svg>

        </AnimationDiv>
    )
};

export default Animation;