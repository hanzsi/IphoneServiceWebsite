import React, {useState} from 'react'
import "./Fourth.css"
import logo from "../../assets/logo1.png";
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';


const Fourth = () => {

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

        <section className='container guarantee'>
            <p className='guarantee-header'>Garanciával kapcsolatos tájékoztató.</p>
            <p className='guarantee-header-bold'>Feltételek</p>
            <p className='guarantee-text'>
            Deformált készülékház esetén NEM TUDUNK GARANCIÁT VÁLLALNI, hiszen ilyen esetekben a vízzáró réteg nem zár jól, és por és víz juthat a készülékbe. Ilyenkor ajánljuk a házcserét, amivel a telefon úgy fog kinézni mint újkorában.
            <br /><br />
            Az általunk végzett szervizelés megszünteti más szolgáltató által nyújtott garanciát!
            A leadó kijelenti hogy a leadott készülék a saját teher - és igénymentes tulajdona, így a készülék eredetéért a leadó vállalja a felelősséget.
            <br /><br />
            Amennyiben a leadott készüléknél egyéb hibák merülnek fel, a szerviz felveszi önnel a kapcsolatot, és beszélnek annak lehetséges javitásáról.
            <br /><br />
            Szervizünk minden javítást szervíz matricával lát el. Amennyiben garanciális ügyintézésnél ez hiányzik vagy sérült, a szerviz nem köteles a garanciális ügyintézés elvégzésére.
            <br /><br />
            Beázás és külső mechanikai sérülés esetén nem tudunk garanciát vállalni, és azt sem tudjuk garantálni hogy szétszedést követően nem lép fel további hibajelenség a már meglévőkön kívül.
            A víz és cseppálló készülékek javítását követő esetleges beázásért, felelősséget és garanciát nem vállalunk. Továbbá az előre nem látható és a javítás során felmerülő alaplapi hibákért (ami szétszedés nélkül a javítandó készülék átvételekor nem állapítható meg) sem felelősséget sem garanciát nem vállalunk.
            <br /><br />
            Készülék adatait nem tároljuk!
            <br /><br />
            Garanciális ügyintézéssel kapcsolatban keressen minket az alábbi telefonszámon.
            +36203284934
            </p>
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

export default Fourth