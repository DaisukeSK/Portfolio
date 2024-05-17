import imgPath from '../../../../public/me.png'

function Home() {

    return (

        <div className='home'>

            <h1>Hi, I'm Daisuke</h1>
            <h2>Full Stack Developer</h2>
            <img src={imgPath}/>
        </div>

    )
};

export default Home;