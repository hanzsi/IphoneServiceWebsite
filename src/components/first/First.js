import React, {useState} from 'react'
import "./First.css"
import logo from "../../assets/logo1.png";
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri'; 
import logo1 from "../../assets/fooldal.png";
import repair from "../../assets/repair.png";
import logo2 from "../../assets/logo2.png"
import open from "../../assets/24.png";
import guarantee from "../../assets/garancia.png"
import success from "../../assets/org.png"
import express from "../../assets/express.jpg"
import couponPic from "../../assets/kupon.jpg"
import mailPic from "../../assets/mail.png"
import fb from "../../assets/fb.png"
import ReactGA from 'react-ga'


ReactGA.initialize('UA-223670576-1')
ReactGA.pageview(window.location.pathname);

const First = () => {
    //showMenu alap értéke false
    const[showMenu, setShowMenu] = useState(false)

    //Ha kattintva van az ikon (onClick a divben), akkor állítsa át a showMenut az ellentétre
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    ReactGA.initialize('UA-223670576-1')
    ReactGA.pageview(window.location.pathname);

    return (
      <main> 
       <header className="header-bg">
        <main>
          <nav className='container navbar'>
            <div className='logo'>
                <img src={logo} alt="Iphone Zugló logó"/>
            </div>
            <menu>
                {
                //Ha a showMenu true (hamburger ikon), akkor nav-links-mobile hozzáadva id-hez
                }
                <ul className='nav-links' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
                    <li><a href='/'>Főoldal</a></li>
                    <li><a href='/szerviz'>Szerviz</a></li>
                    <li><a href='/faq'>FAQ</a></li>
                </ul>
                
            </menu>
            <div className='menu-icons' onClick={toggleMenu}>
                {
                    //Ha igaz: X, ha nem: Hamburger menu
                    showMenu ? ( <RiCloseLine color="#377ef0" size={30}/> ) : ( <AiOutlineBars color="#377ef0" size={27}/> )
                }
            </div>
          </nav>

          <section id="header">
          <div className='container header'>
            <div className='header-left'>
              <h1>
                <span>Tönkrement készüléked?</span>
                <span>Mi megjavítjuk!</span>
              </h1>
              <p className='service-text-medium'>
                A Zugló iPhone szervizfutár már indul is hozzád a telefonodért, melyet megjavítunk, és 24 órán belül kiszállítunk neked.
              </p>
              <div className='header-cta'>
                <li><a href='/szerviz' className='btn-dark'>Szerviz</a></li>
                <p className='u-text-small'>
                Kattints a Szerviz gombra és igényeld a szerviz futárszolgálatunkat. Hamarosan felvesszük veled a kapcsolatot!
                </p>
              </div>
            </div>
            <div className='header-right'>
              <img src={logo1} alt='Telefonok'/>
            </div>
          </div>
        </section>

        <section id="features">
              <div className='container features'>
                  <div className='features-content'>
                      <div className='features-left'>
                        <img src={repair} alt="Törött telefon"/>
                      </div>
                      <div className='features-right'>
                          <span className='repair-header'>
                              Miért a Zugló iPhone szerviz?
                          </span>
                        <p className='repair-text'>
                        Zuglói vagy és szervizt keresel? Netán a környező kerületekből vagy itt? A legjobb helyen jársz! Zugló iPhone szervizfutár igénylésed leadása után telefonon egyeztet veled arról neked mikor jó. Mi érte megyünk és megjavítjuk a készüléked, melyet 24 órán belül kiszállítunk neked.
                        </p>
                        <p className='shipment-text'>
                        Jelenleg a szervizfutár a következő kerületekben vehető igénybe:
                        </p>
                        <div class='list-div'>
                            <ul className='list-kerulet'>
                                <li>XIV. Kerület (ingyenes)</li>
                                <li>IV. Kerület</li>
                                <li>XIII. Kerület</li>
                                <li>XV. Kerület</li>
                                <li>XVI. Kerület</li>
                                <li>X. Kerület</li>
                            </ul>
                        </div>
                        <div className='photo-div'>
                            <img src={logo2} alt="Zugló iPhone Szerviz logó"/>
                        </div>
                      </div>
                  </div>
              </div>
          </section>

          <section id="minilogos">
              <div className='container minilogo'>
                  <div className='first-logo'>
                    <img src={open} alt="0-24 nyitvatartás"/>
                    <span className='logo-text'>Javítás 24 órán belül</span>
                  </div>
                  <div className='second-logo'>
                    <img src={guarantee} alt="Garancia"/>
                    <span className='logo-text'>6 hónap garancia</span>
                  </div>
                  <div className='third-logo'>
                    <img src={express} alt="Kiszállítás"/>
                    <span className='logo-text'>Villámgyors szervizfutár</span>
                  </div>
                  <div className='fourth-logo'>
                    <img src={success} alt="Sikeres"/>
                    <span className='logo-text'>Minőségi alkatrészek</span>
                  </div>
              </div>
          </section>

          <section id="coupon">
            <div className='container coupon'>
                <div className='first-inline-div'>
                    <div className='first-div'>
                        <p className='first-text'>
                            Személyesen hoznád be készüléked? Természetesen erre is van lehetőség, de minden esetben előtte keress minket telefonon!
                            <br/>Az első szerviz igénybevétele után 10% os kuponkódot kap minden vásárlónk, melyet felhasználhatsz egy esetleges javítás alkalmával.
                        </p>
                    </div>
                    <div className='first-img'>
                        <img src={couponPic} alt="Kupon logó"/>
                    </div>
                </div>
                <div className='second-div'>
                    <p className='second-text'>
                        Kérdésed van? Keress minket telefonon, vagy e-mailben!
                    </p>
                </div>
                <div className='third-inline-div'>
                    <div className='third-img'>
                        <img src={mailPic} alt="Email logó"/>
                    </div>
                    <div className='third-div'>
                        <p className='third-text'>
                            iphonezuglo@gmail.com<br/>
                            +36203284934
                        </p>
                    </div>
                </div>
            </div>
          </section>
          <footer id='footer'>
            <div className='container footer'>
                <div className='footer-box1'>
                    <p><a href='/aszf'>&bull; Általános szerződési feltételek</a></p>
                    <p><a href='/adatvedelmi'>&bull; Adatvédelmi tájékoztató</a></p>
                    <p><a href='/garancia'>&bull; Garancia</a></p>
                    <p><a href='/faq'>&bull; Gyakori kérdések</a></p>
                </div>
                <div className='footer-box2'>
                    <p>Nyitvatartás<br /><br/>
                        Hétfőtől - Péntekig: 09:00 - 18:00<br />
                        Szombat és Vasárnap: Zárva<br /><br />
                        Cím: 1148 Budapest, Adria Sétány 10/g<br />
                        (Ügyfélfogadás, telefonos egyeztetés alapján)
                    </p>
                </div>
                <div className='footer-box3'>
                  <p><a href='https://www.facebook.com/iphonezuglo' target='_blank'>www.facebook.com/iphonezuglo</a><br/><br/>
                  Email: iphonezuglo@gmail.com<br/><br/>
                  Tel.: +36203284934
                  </p>
                </div>
            </div>
        </footer>
          
        </main>
      </header>
    </main>
    )
}

export default First