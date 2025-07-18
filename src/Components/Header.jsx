

export default function Header(){
    return (
        <>
        <header>
             <div className="picture-holder">
                <img  className="myPic" src="/Image/mypic.JPG"></img>
            </div>
            <h2 className="name">Yongting Shi</h2>
            <p className="title">Frontend Developer</p>
            <a className="btn light-btn website-link"
            href="https://yongtingshi-myportfolio.netlify.app">My Portfolio Website</a>
            <br></br>
            <a className="btn light-btn"href="mailto:Yongtingshi657@gmail.com">
                <img className="button-pic"
                    src="/Image/email.webp"
                    alt="Email icon"
                    />
                Email
            </a>
                
            <a className="btn dark-btn"href="https://www.linkedin.com/in/yongting-shi-668347203">
                <img className="button-pic"
                src="/Image/linkedIn.png"
                alt="LinkedIn icon"
                />
            
            LinkedIn

            </a>


        </header>
        </>
    )
}