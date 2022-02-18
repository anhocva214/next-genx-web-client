import { alertActions } from '@actions/alert.action'
import { userActions } from '@actions/user.action'
import { userSelector } from '@store/slices/user.slice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import TeamsPage from '@components/teams'


export default function Home() {

  const { users } = useSelector(userSelector)

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <>
      <div>
        {/* PRELOADER */}
        <div className="waxon_tm_preloader">
          <div className="spinner_wrap">
            <div className="spinner" />
          </div>
        </div>
        {/* /PRELOADER */}
        {/* WRAPPER ALL */}
        {/* MAGIC CURSOR VALUES: show, hide */}
        {/* COLOR VALUES: blue, green, brown, pink, orange, black, white, purple, sky, cadetBlue, crimson, olive, red */}
        <div className="waxon_tm_all_wrap" data-magic-cursor="show" data-color="black">
          {/* SETTINGS */}
          <div style={{ display: 'none' }} className="waxon_tm_settings">
            <div className="icon">
              <img className="svg" src="img/svg/setting.svg" alt="" />
              <a className="link" href="index.html#" />
            </div>
            <div className="wrapper">
              <span className="title">Unlimited Colors</span>
              <ul className="colors">
                <li><a className="blue" href="index.html#" /></li>
                <li><a className="green" href="index.html#" /></li>
                <li><a className="brown" href="index.html#" /></li>
                <li><a className="pink" href="index.html#" /></li>
                <li><a className="orange" href="index.html#" /></li>
                <li className="bl"><a className="black" href="index.html#" /></li>
                <li className="wh"><a className="white" href="index.html#" /></li>
                <li><a className="purple" href="index.html#" /></li>
                <li><a className="sky" href="index.html#" /></li>
                <li><a className="cadetBlue" href="index.html#" /></li>
                <li><a className="crimson" href="index.html#" /></li>
                <li><a className="olive" href="index.html#" /></li>
                <li><a className="red" href="index.html#" /></li>
              </ul>
              <span className="title">Magic Cursor</span>
              <ul className="cursor">
                <li><a className="showme show" href="index.html#" /></li>
                <li><a className="hide" href="index.html#"><img className="svg" src="img/svg/arrow.svg" alt="" /></a></li>
              </ul>
            </div>
          </div>
          {/* /SETTINGS */}
          {/* MODALBOX NEWS */}
          <div className="waxon_tm_modalbox_news">
            <div className="box_inner">
              <div className="close">
                <a href="index.html#"><img className="svg" src="img/svg/cancel.svg" alt="" /></a>
              </div>
              <div className="description_wrap scrollable" />
            </div>
          </div>
          {/* /MODALBOX NEWS */}
          {/* MODALBOX ABOUT */}
          <div className="waxon_tm_modalbox_about">
            <div className="box_inner">
              <div className="close">
                <a href="index.html#"><img className="svg" src="img/svg/cancel.svg" alt="" /></a>
              </div>
              <div className="description_wrap scrollable">
                <div className="my_box">
                  <div className="left">
                    <div className="about_title">
                      <h3>Programming Skills</h3>
                    </div>
                    <div className="waxon_progress">
                      <div className="progress_inner" data-value={95}>
                        <span><span className="label">Wordpress &amp; PHP</span><span className="number">95%</span></span>
                        <div className="background"><div className="bar"><div className="bar_in" /></div></div>
                      </div>
                      <div className="progress_inner" data-value={80}>
                        <span><span className="label">Javascript &amp; React</span><span className="number">80%</span></span>
                        <div className="background"><div className="bar"><div className="bar_in" /></div></div>
                      </div>
                      <div className="progress_inner" data-value={90}>
                        <span><span className="label">HTML &amp; CSS</span><span className="number">90%</span></span>
                        <div className="background"><div className="bar"><div className="bar_in" /></div></div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="about_title">
                      <h3>Language Skills</h3>
                    </div>
                    <div className="waxon_progress">
                      <div className="progress_inner" data-value={95}>
                        <span><span className="label">English</span><span className="number">95%</span></span>
                        <div className="background"><div className="bar"><div className="bar_in" /></div></div>
                      </div>
                      <div className="progress_inner" data-value={90}>
                        <span><span className="label">Japanese</span><span className="number">90%</span></span>
                        <div className="background"><div className="bar"><div className="bar_in" /></div></div>
                      </div>
                      <div className="progress_inner" data-value={85}>
                        <span><span className="label">Arabian</span><span className="number">85%</span></span>
                        <div className="background"><div className="bar"><div className="bar_in" /></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="counter">
                  <div className="about_title">
                    <h3>Fun Facts</h3>
                  </div>
                  <ul>
                    <li>
                      <div className="list_inner">
                        <h3>777+</h3>
                        <span>Projects Completed</span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>3K+</h3>
                        <span>Happy Clients</span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>9K+</h3>
                        <span>Lines of Code</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="partners">
                  <div className="about_title">
                    <h3>Our Partners</h3>
                  </div>
                  <ul className="owl-carousel">
                    <li className="item"><a href="index.html#"><img src="img/partners/1.png" alt="" /></a></li>
                    <li className="item"><a href="index.html#"><img src="img/partners/2.png" alt="" /></a></li>
                    <li className="item"><a href="index.html#"><img src="img/partners/3.png" alt="" /></a></li>
                    <li className="item"><a href="index.html#"><img src="img/partners/4.png" alt="" /></a></li>
                    <li className="item"><a href="index.html#"><img src="img/partners/5.png" alt="" /></a></li>
                    <li className="item"><a href="index.html#"><img src="img/partners/6.png" alt="" /></a></li>
                    <li className="item"><a href="index.html#"><img src="img/partners/7.png" alt="" /></a></li>
                    <li className="item"><a href="index.html#"><img src="img/partners/8.png" alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /MODALBOX ABOUT */}


          {/* TOPBAR */}
          <div className="waxon_tm_topbar">
            <div className="container">
              <div className="topbar_inner">
                <div className="logo">
                  <a href="index.html#">
                    <img src="https://res.cloudinary.com/ds3bxudlr/image/upload/v1640161667/GenX_ecsimm.png" style={{maxWidth: 85}} alt="" />
                  </a>
                </div>
                <div className="menu">
                  <div className="links">
                    <ul className="anchor_nav">
                      <li className="current">
                        <a href="index.html#home">
                          <span className="first">Home</span>
                          <span className="second">Home</span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html#about">
                          <span className="first">About</span>
                          <span className="second">About</span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html#portfolio">
                          <span className="first">Portfolio</span>
                          <span className="second">Portfolio</span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html#news">
                          <span className="first">News</span>
                          <span className="second">News</span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html#contact">
                          <span className="first">Contact</span>
                          <span className="second">Contact</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /TOPBAR */}
          {/* MOBILE MENU */}
          <div className="waxon_tm_mobile_menu">
            <div className="topbar_inner">
              <div className="container bigger">
                <div className="topbar_in">
                  <div className="logo">
                    <a href="index.html#"><img src="https://res.cloudinary.com/ds3bxudlr/image/upload/v1640161667/GenX_ecsimm.png" alt="" /></a>
                  </div>
                  <div className="my_trigger">
                    <div className="hamburger hamburger--collapse-r">
                      <div className="hamburger-box">
                        <div className="hamburger-inner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div className="container">
                <div className="dropdown_inner">
                  <ul className="anchor_nav">
                    <li><a href="index.html#home">Home</a></li>
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#portfolio">Portfolio</a></li>
                    <li><a href="index.html#news">News</a></li>
                    <li><a href="index.html#contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /MOBILE MENU */}
          {/* HERO */}
          <div className="waxon_tm_hero" id="home">
            <div className="background">
              <div className="leftpart" />
              <div className="rightpart">
                <div className="inner">
                  <div className="image" data-img-url="/img/banner.png" />
                  <div className="overlay_image" />
                  <div className="myOverlay" />
                </div>
              </div>
            </div>
            <div className="content">
              <div className="container">
                <div className="content_inner">
                  <div className="name"> {/* If you can't see clearly your texts with hero image, please open style.css and search this word " .waxon_tm_hero .background .overlay_image " with CTRL+F and enable comment */}
                    <h3 className="stroke">Next</h3>
                    <h3 style={{ paddingLeft: 50, color: "#111", textTransform: 'none' }}>GenX</h3>
                    <span>
                      Combine cutting-edge Technology and hight Fashion <br /> to create eye-focused smart glass for everyone
                    </span>
                  </div>
                </div>
                <div className="waxon_tm_down" data-skin="dark" data-position>  {/* Skin: "", dark */}  {/* Position: left, center, right */}
                  <div className="line_wrapper">
                    <div className="line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /HERO */}
          {/* ABOUT */}
          <div className="waxon_tm_about" id="about">
            <div className="container">
              <div className="about_inner">
                <div className="left">
                  <img className="thumbnail" src="img/about/2.jpg" alt="" />  {/* Animation Image classes: thumbnail, thumbnail-2, thumbnail-3, thumbnail-4,*/}
                </div>
                <div className="right">
                  <div className="name">
                    <h3>From the great passion of technology...</h3>
                  </div>
                  <div className="text">
                    <p>
                      Young. Dynamic. Passionate. They are the words that you can describe the co-founders of Next GenX.
                      <br />
                      Beginning with a continuous wonder: "How will the technology break the barrier of human beings in the future?", Next GenX - a group of curious technophile has started the adventure to seek the answer to that question.
                      <br />
                      And the journey begins...
                    </p>
                  </div>
                  {/* <div className="waxon_tm_button" data-position="left">
                    <a href="index.html#">
                      <span>Learn More</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* /ABOUT */}
          {/* SERVICES */}
          <div className="waxon_tm_service">
            <div className="container">
              <div className="service_inner">
                {/* <ul className="owl-carousel">
                  <li className="item">
                    <div className="list_inner">
                      <img className="svg" src="img/svg/code.svg" alt="" />
                      <div className="details">
                        <h3>Web Development</h3>
                        <p>Web design is a similar process of creation, with the intention intention of the pre presenting...</p>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="list_inner">
                      <img className="svg" src="img/svg/creativity.svg" alt="" />
                      <div className="details">
                        <h3>Creative Design</h3>
                        <p>Web design is a similar process of creation, with the intention intention of the pre presenting...</p>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="list_inner">
                      <img className="svg" src="img/svg/telegram.svg" alt="" />
                      <div className="details">
                        <h3>Brand Identity</h3>
                        <p>Web design is a similar process of creation, with the intention intention of the pre presenting...</p>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="list_inner">
                      <img className="svg" src="img/svg/photoshop.svg" alt="" />
                      <div className="details">
                        <h3>Adobe Photoshop</h3>
                        <p>Web design is a similar process of creation, with the intention intention of the pre presenting...</p>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          {/* /SERVICES */}
          {/* PORTFOLIO */}
          <div className="waxon_tm_portoflio" id="portfolio">
            <div className="container">
              <div className="waxon_tm_main_title">
                <div className="title">
                  <h3>Coming soon...</h3>
                </div>
                
              </div>

              <div className="portfolio_inner">

                <ul className="gallery_zoom">
                  <li className="vimeo">
                    <div className="list_inner">
                      <div className="image">
                        <img src="https://res.cloudinary.com/ds3bxudlr/image/upload/v1639973323/yw5rcarlvo4nddksfqjs.png" alt="" />
                        <div className="main" data-img-url="https://res.cloudinary.com/ds3bxudlr/image/upload/v1639973323/yw5rcarlvo4nddksfqjs.png" />
                        <a className="full_link popup-vimeo" href="https://res.cloudinary.com/ds3bxudlr/image/upload/v1639973323/yw5rcarlvo4nddksfqjs.png" />
                      </div>
                      <div className="title">
                        <h3><a href="index.html#">Foresy Glass No.1</a></h3>
                        {/* <span><a href="index.html#">Vimeo</a></span> */}
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          {/* /PORTFOLIO */}
          {/* TESTIMONIALS */}
          <div className="waxon_tm_testimonials">
            <div className="container">
              <div className="waxon_tm_main_title">
                <div className="title">
                  <h3>Foresy</h3>
                </div>
              </div>
              <div className="waxon_tm_service" style={{ marginTop: 100, marginBottom: 0 }}>
                <div className="service_inner">
                  <ul className="owl-carousel">
                    <li className="item">
                      <div className="list_inner">
                        <div className="details" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                          <h3>Innovative</h3>
                          <p>With the aid of high-tech chips integrated, Foresy can help you to improve your eyesight over time !</p>
                        </div>
                      </div>
                    </li>

                    <li className="item">
                      <div className="list_inner">
                        <div className="details" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                          <h3>Safe</h3>
                          <p>No harm element for your health, especially your eye, Foresy promises to be the reliable partner for your vision !</p>
                        </div>
                      </div>
                    </li>

                    <li className="item">
                      <div className="list_inner">
                        <div className="details" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                          <h3>Fashionable</h3>
                          <p>Wonderful design that helps you to enjoy all the moment with Foresy !</p>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
          {/* /TESTIMONIALS */}


          <TeamsPage />
         



          {/* NEWS */}
          {/* <div className="waxon_tm_news" id="news">
            <div className="container">
              <div className="waxon_tm_main_title">
                <div className="title">
                  <h3>Latest News<span className="bg">News</span></h3>
                </div>
              </div>
              <div className="news_inner">
                <ul>
                  <li className="wow fadeInDown" data-wow-duration="0.8s">
                    <div className="list_inner">
                      <div className="image">
                        <img src="./img/thumbs/4-3.jpg" alt="" />
                        <div className="main" data-img-url="img/news/1.jpg" />
                        <a className="full_link" href="index.html#" />
                      </div>
                      <div className="details">
                        <div className="extra">
                          <p className="date">By <a href="index.html#">Alex Watson</a> <span>10 May 2021</span></p>
                        </div>
                        <h3 className="title"><a href="index.html#">Developers watch out for these burnout symptoms</a></h3>
                      </div>
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.</p>
                          <p>Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over.</p>
                          <p>Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be.</p>
                          <div className="quotebox">
                            <div className="icon">
                              <img className="svg" src="img/svg/quote.svg" alt="" />
                            </div>
                            <p>Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.</p>
                          </div>
                          <p>Pretend everything is new and that you haven’t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off.</p>
                          <p>The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again.</p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <ul>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/facebook.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/twitter.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/instagram.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/dribbble.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/tik-tok.svg" alt="" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/4-3.jpg" alt="" />
                        <div className="main" data-img-url="img/news/2.jpg" />
                        <a className="full_link" href="index.html#" />
                      </div>
                      <div className="details">
                        <div className="extra">
                          <p className="date">By <a href="index.html#">Bona Green</a> <span>05 April 2021</span></p>
                        </div>
                        <h3 className="title"><a href="index.html#">How to be appreciated for your hard work as a developer</a></h3>
                      </div>
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.</p>
                          <p>Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over.</p>
                          <p>Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be.</p>
                          <div className="quotebox">
                            <div className="icon">
                              <img className="svg" src="img/svg/quote.svg" alt="" />
                            </div>
                            <p>Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.</p>
                          </div>
                          <p>Pretend everything is new and that you haven’t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off.</p>
                          <p>The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again.</p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <ul>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/facebook.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/twitter.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/instagram.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/dribbble.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/tik-tok.svg" alt="" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.4s">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/4-3.jpg" alt="" />
                        <div className="main" data-img-url="img/news/3.jpg" />
                        <a className="full_link" href="index.html#" />
                      </div>
                      <div className="details">
                        <div className="extra">
                          <p className="date">By <a href="index.html#">Ave Smith</a> <span>22 March 2021</span></p>
                        </div>
                        <h3 className="title"><a href="index.html#">How designers and developers can collaborate better</a></h3>
                      </div>
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.</p>
                          <p>Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over.</p>
                          <p>Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be.</p>
                          <div className="quotebox">
                            <div className="icon">
                              <img className="svg" src="img/svg/quote.svg" alt="" />
                            </div>
                            <p>Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.</p>
                          </div>
                          <p>Pretend everything is new and that you haven’t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off.</p>
                          <p>The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again.</p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <ul>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/facebook.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/twitter.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/instagram.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/dribbble.svg" alt="" /></a></li>
                            <li><a href="index.html#"><img className="svg" src="img/svg/social/tik-tok.svg" alt="" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          {/* /NEWS */}
          {/* CONTACT */}
          <div className="waxon_tm_contact" id="contact" style={{paddingTop: 0}}>
            <div className="bg_image" />
            <div className="container">
              <div className="contact_inner">
                <div className="waxon_tm_main_title">
                  <div className="title">
                    <h3>Get in Touch<span className="bg">Contact</span></h3>
                  </div>
                </div>
                <div className="desc">
                  <p>How can we help? Let's fill out the form and we will contact you as soon as possible!</p>
                </div>
                <div className="wrapper">
                  <div className="left wow fadeInLeft" data-wow-duration="0.8s">
                    <div className="fields">
                      <form action="https://marketifythemes.net/" method="post" className="contact_form" id="contact_form" autoComplete="off">
                        <div className="returnmessage" data-success="Your message has been received, We will contact you soon." />
                        <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                        <div className="first">
                          <ul>
                            <li>
                              <input id="name" type="text" placeholder="Name" />
                            </li>
                            <li>
                              <input id="email" type="text" placeholder="Email" />
                            </li>
                          </ul>
                        </div>
                        <div className="last">
                          <textarea id="message" placeholder="Message" defaultValue={""} />
                        </div>
                        <div className="waxon_tm_button" data-position="left">
                          <a id="send_message" href="index.html#">
                            <span>Send Message</span>
                          </a>
                        </div>
                        {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
                      </form>
                    </div>
                  </div>
                  <div className="right wow fadeInRight" data-wow-duration="0.8s">
                    <div className="map_wrap">
                      <div className="map d-none" id="ieatmaps" />

                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.730175107987!2d105.84786741493222!3d21.00345048601215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac74001d7041%3A0x30e9b4e55b5a8783!2zMzYgTMOqIFRoYW5oIE5naOG7iywgQsOhY2ggS2hvYSwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1640191623431!5m2!1svi!2s" width={'100%'} height={400} style={{border: 0}} allowFullScreen loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /CONTACT */}
          {/* COPYRIGHT */}
          <div className="waxon_tm_copyright">
            <div className="container">
              <div className="copyright_inner">
                <ul>
                  <li className="wow fadeInDown" data-wow-duration="0.8s">
                    <span>Next GenX</span>
                    <span>Copyright@2021</span>
                  </li>
                  <li className="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    <span>36 Lê Thanh Nghị,</span>
                    <span>Bách Khoa, Đống Đa, Hà Nội</span>
                  </li>
                  <li className="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.4s">
                    <span><a role="button"><span className="__cf_email__" data-cfemail="nextgenx.co@gmail.com">nextgenx.co@gmail.com</span></a></span>
                    <span>(+84) 971 866 909</span>
                  </li>
                  <li className="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.6s">
                    <div className="social">
                      <ul>
                        <li>
                          <a href="index.html#">
                            <span className="first"><img className="svg" src="img/svg/social/facebook.svg" alt="" /></span>
                            <span className="second"><img className="svg" src="img/svg/social/facebook.svg" alt="" /></span>
                          </a>
                        </li>
                        <li>
                          <a href="index.html#">
                            <span className="first"><img className="svg" src="img/svg/social/twitter.svg" alt="" /></span>
                            <span className="second"><img className="svg" src="img/svg/social/twitter.svg" alt="" /></span>
                          </a>
                        </li>
                        <li>
                          <a href="index.html#">
                            <span className="first"><img className="svg" src="img/svg/social/instagram.svg" alt="" /></span>
                            <span className="second"><img className="svg" src="img/svg/social/instagram.svg" alt="" /></span>
                          </a>
                        </li>
                        <li>
                          <a href="index.html#">
                            <span className="first"><img className="svg" src="img/svg/social/soundcloud.svg" alt="" /></span>
                            <span className="second"><img className="svg" src="img/svg/social/soundcloud.svg" alt="" /></span>
                          </a>
                        </li>
                        <li>
                          <a href="index.html#">
                            <span className="first"><img className="svg" src="img/svg/social/youtube.svg" alt="" /></span>
                            <span className="second"><img className="svg" src="img/svg/social/youtube.svg" alt="" /></span>
                          </a>
                        </li>
                        <li>
                          <a href="index.html#">
                            <span className="first"><img className="svg" src="img/svg/social/vk.svg" alt="" /></span>
                            <span className="second"><img className="svg" src="img/svg/social/vk.svg" alt="" /></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /COPYRIGHT */}
          {/* MAGIC CURSOR */}
          <div className="mouse-cursor cursor-outer" />
          <div className="mouse-cursor cursor-inner" />
          {/* /MAGIC CURSOR */}
        </div>
        {/* / WRAPPER ALL */}
      </div>

    </>
  )
}
