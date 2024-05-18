import imgPath from '../../../../public/me.png'

function Home() {

    return (

        <div className='home'>

            <h1>Hi, I'm Daisuke</h1>
            <h2>Full Stack Developer</h2>
            <svg viewBox='0 0 500 300' overflow='visible'>

                <defs>
                    <pattern id="pattern_7" width="100%" height="120%">
                        <image href={imgPath} x='7%' y="0" width="230"/>
                    </pattern>

                    <linearGradient id='grad_1' x1='0' y1='0' x2='100%' y2='100%'>
                        <stop stopColor='#4482FF' offset='.2' stopOpacity='.9'></stop>
                        <stop stopColor='#FFFFFF' offset='.5' stopOpacity='.5'></stop>
                        <stop stopColor='#0042C8' offset='.8' stopOpacity='.9'></stop>
                    </linearGradient>

                </defs>
    
                {/* <path
                    fill='#ffffffCC'
                    stroke='#ffffffCC'
                    strokeWidth='55'
                    d="M400,207 l-150,87 l-150,-87 v-120 l150,-87 l150,87z"
                    className='path1'
                /> */}
                <path
                    fill='url(#grad_1)'
                    stroke='url(#grad_1)'
                    strokeWidth='15'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d="M400,207 l-150,87 l-150,-87 v-120 l150,-87 l150,87z"
                />


                <path
                    fill='url(#pattern_7)'
                    stroke='url(#pattern_7)'
                    strokeWidth='15'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d="M400,208 l-150,87 l-150,-87 v-230 h300z"
                />
            </svg>
        </div>

    )
};

export default Home;