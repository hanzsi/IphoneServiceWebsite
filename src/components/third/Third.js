import React, {useState} from 'react'
import "./Third.css"
import logo from "../../assets/logo1.png";
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';


const Third = () => {

    //showMenu alap értéke false
    const[showMenu, setShowMenu] = useState(false)

    //Ha kattintva van az ikon (onClick a divben), akkor állítsa át a showMenut az ellentétre
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }


return(
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
        <section className='container faq-site'>
                <p className='question'>Postai úton szeretném beküldeni, ennek mi a menete?</p>
                <p className='answer'>Első és legfontosabb hogy a weboldalon válaszd ki a telefont és a javítást, majd a “Postán küldöm be” opciót. Igénylés leadása után egy visszaigazoló e-mailt kapsz a javítással kapcsolatban, ahol minden lényeges információ szerepelni fog a csomag feladással kapcsolatban. A csomagod feladást követően nyomon tudod követni.</p>
                <p className='question'>Miért jó a futárszolgálat?</p>
                <p className='answer'>A futárszolgálat azért kedvező mindenki számára mert a te idődhöz szabunk mindent. Igénylés leadása után a szerviz telefonon egyeztet veled az időpontról. Szervizbe való beérkezést követő 24 órán belül kiszállítjuk neked telefonod, neked ki sem kell mozdulnod otthonról.</p>
                <p className='question'>Mikor érdemes akkumulátort cserélni?</p>
                <p className='answer'>Ez függ attól milyen sokat használod a telefonod, kibír-e 1 napot, vagy 3-4 óránként azt kell nézegetned hol tudod tölteni. Ha úgy érzed gyorsan merül mindenképp keress fel egy szervizt! 80%-os akksinál a telefon ki fogja írni hogy vidd szervizbe, de nem érdemes addig várni, hiszed olyan meghibásodásokhoz vezethet ami nagyban megnövelheti a javítás költségét.</p>
                <p className='question'>Milyen javítást tartalmaz egy kijelző csere?</p>
                <p className='answer'>A telefont gondosan felmelegítjük, és a ragasztó feloldását követően szétnyitjuk. Miután eltávolítottuk a kijelzőt, megkezdődhet a tesztelése és annak adatainak átmásolása az új kijelzőbe. A True Tone funkció nem fog elveszni! Javítás befejeztével visszahelyezzük a vízzáró réteget, összecsukjuk a telefont, és végeztünk is, a futár már úton is van a telefonnal hozzád.</p>
                <p className='question'>Mi történik ha a javítás igénylését nyitvatartási időn kívül adom le?</p>
                <p className='answer'>Semmi gond nem történik, a szerviz másnap nyitvatartási időben felkeres téged és megbeszélitek mikor mehet a telefonodért.</p>
                <p className='question'>Hol tudok tájékozódni az árakról?</p>
                <p className='answer'>A telefon kiválasztását követően tudod megkeresni/és kiválasztani a javítást, amelynél az árak fel vannak tüntetve.</p>
                <p className='last-text'>Amennyiben további kérdésed van keress minket telefonon: +36203284934</p>
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

)}

export default Third