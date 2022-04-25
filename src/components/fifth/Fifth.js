import React, {useState} from 'react'
import "./Fifth.css"
import logo from "../../assets/logo1.png";
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';


const Fifth = () => {

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

        <section className='container aszf'>
            <p>
                ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK (ÁSZF)<br /><br />
www.iphonezuglo.hu<br /><br />
hatályos ettől a naptól: 2022.03.23.<br />
<br /><br />
<br />
Impresszum: a Szolgáltató (Eladó, Vállalkozás) adatai
<br /><br />
Név: Bódog Krisztián Mihály E.V
<br /><br />
Székhely: 9407, Sopron Csalánkerti út 34.
<br /><br />
  Levelezési cím: 1148 Budapest Adria sétány 10/g 4/11
  <br /><br />
Nyilvántartásba vevő hatóság: Fővárosi Törvényszék Cégbírósága<br />Nyilvántartási szám: 52933183<br />
Adószám: 69264414-1-28
<br /><br />
Képviselő: Bódog Krisztián
<br /><br />
Telefonszám: +36203284934
<br /><br />
E-mail: iphonezuglo@gmail.com
<br /><br />
Honlap: www.iphonezuglo.hu<br />
Bankszámlaszám: 11600006-00000000-82164267<br />
Tárhelyszolgáltató adatai
<br /><br />
Név: C - Host Kft
<br /><br />
Székhely: 1115 Budapest, Halmi utca 29.
<br /><br />
Elérhetőség: , info@nethely.hu
<br /><br />
Fogalmak
<br /><br />
Felek: Eladó és Vevő együttesen
<br /><br />
Fogyasztó: a szakmája, önálló foglalkozása vagy üzleti tevékenysége körén kívül eljáró természetes személy
<br /><br />
Fogyasztói szerződés: olyan szerződés, melynek egyik alanya fogyasztónak minősül Honlap: a jelen weboldal, amely a szerződés megkötésére szolgál<br />
Szerződés: Eladó és Vevő között a Honlap és elektronikus levelezés igénybevételével létrejövő adásvételi szerződés
<br /><br />
Távollévők közötti kommunikációt lehetővé tévő eszköz: olyan eszköz, amely alkalmas a felek távollétében – szerződés megkötése érdekében – szerződési nyilatkozat megtételére. Ilyen eszköz különösen a címzett vagy a címzés nélküli nyomtatvány, a szabványlevél, a sajtótermékben közzétett hirdetés megrendelőlappal, a katalógus, a telefon, a telefax és az internetes hozzáférést biztosító eszköz
<br /><br />
Távollévők között kötött szerződés: olyan fogyasztói szerződés, amelyet a szerződés szerinti termék vagy szolgáltatás nyújtására szervezett távértékesítési rendszer keretében a felek egyidejű fizikai jelenléte nélkül úgy kötnek meg, hogy a szerződés megkötése érdekében a szerződő felek kizárólag távollévők közötti kommunikációt lehetővé tévő eszközt alkalmaznak
<br /><br />
Termék: a Honlap kínálatában szereplő, a Honlapon értékesítésre szánt minden birtokba vehető forgalomképes ingó dolog, mely a Szerződés tárgyát képezi
<br /><br />
Vállalkozás: a szakmája, önálló foglalkozása vagy üzleti tevékenysége körében eljáró személy Vevő/Ön: a Honlapon keresztül vételi ajánlatot tevő szerződést kötő személy
Jótállás: A fogyasztó és a vállalkozás között kötött szerződések esetén (a továbbiakban: fogyasztói szerződés) a Polgári Törvénykönyv szerinti,
<br /><br />
1.	a) a szerződés teljesítéséért vállalt jótállás, amelyet a vállalkozás a szerződés megfelelő teljesítéséért a jogszabályi kötelezettségén túlmenően vagy annak hiányában önként vállal, valamint<br />
2.	b) a jogszabályon alapuló kötelező jótállás
<br /><br />
Vonatkozó jogszabályok
<br /><br />
A Szerződésre a magyar jog előírásai az irányadóak, és különösen az alábbi jogszabályok vonatkoznak:
<br /><br />
1997. évi CLV. törvény a fogyasztóvédelemről
<br /><br />
2001. évi CVIII. törvény az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről
<br /><br />
2013. évi V. törvény a Polgári Törvénykönyvről
<br /><br />
151/2003. (IX.22.) kormányrendelet a tartós fogyasztási cikkekre vonatkozó kötelező jótállásról
<br /><br />
45/2014. (II.26.) kormányrendelet a fogyasztó és a vállalkozás közötti szerződések részletes szabályairól
<br /><br />
19/2014. (IV.29.) NGM rendelet a fogyasztó és vállalkozás közötti szerződés keretében eladott dolgokra vonatkozó szavatossági és jótállási igények intézésének eljárási szabályairól
<br /><br />
1999. évi LXXVI. törvény a szerzői jogról
<br /><br />
2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról
<br /><br />
AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2018/302 RENDELETE (2018. február 28.) a
belső piacon belül a vevő állampolgársága, lakóhelye vagy letelepedési helye alapján történő indokolatlan területi alapú tartalomkorlátozással és a megkülönböztetés egyéb formáival szembeni fellépésről, valamint a 2006/2004/EK és az (EU) 2017/2394 rendelet, továbbá a 2009/22/EK irányelv módosításáról
<br /><br />
AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.) a
természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi rendelet)
<br /><br />
Az ÁSZF hatálya, elfogadása
<br /><br />
A közöttünk létrejövő szerződés tartalmát – a vonatkozó kötelező érvényű jogszabályok rendelkezései mellett – a jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) határozzák meg. Ennek megfelelően tartalmazza a jelen ÁSZF az Önt és bennünket illető jogokat és kötelezettségeket, a szerződés létrejöttének feltételeit, a teljesítési határidőket, a szállítási és fizetési feltételeket, a felelősségi szabályokat, valamint az elállási jog gyakorlásának feltételeit.
<br /><br />
A Honlap használatához szükséges azon technikai tájékoztatást, melyet jelen ÁSZF nem tartalmaz, a Honlapon elérhető egyéb tájékoztatások nyújtják.
<br /><br />
Ön a megrendelése véglegesítése előtt köteles megismerni a jelen ÁSZF rendelkezéseit. A webáruházunkon keresztül történő vásárlással Ön elfogadja a jelen ÁSZF rendelkezéseit, és az ÁSZF maradéktalanul az Ön és az Eladó között létrejövő szerződés részét képezi.
<br /><br />
A szerződés nyelve, a szerződés formája
<br /><br />
A jelen ÁSZF hatálya alá tartozó szerződések nyelve a magyar nyelv.
<br /><br />
A jelen ÁSZF hatálya alá tartozó szerződések nem minősülnek írásba foglalt szerződéseknek, azokat az Eladó nem iktatja.<br /><br />
Árak
<br /><br />
Az árak forintban értendők, tartalmazzák a 27%-os ÁFÁ-t. Az árak tájékoztató jellegűek. Nem zárható ki annak a lehetősége, hogy üzletpolitikai okból az Eladó az árakat módosítsa. Az árak módosítása nem terjed ki a már megkötött szerződésekre. Amennyiben Eladó az árat hibásan tüntette fel, a már megkötött szerződések esetében az ÁSZF „Eljárás hibás ár” pontja alapján jár el.
<br /><br />
Az árak forintban értendők. Az áruházban megjelenített bruttó árak 0%-os ÁFA tartalommal rendelkeznek. Az árak tájékoztató jellegűek. Nem zárható ki annak a lehetősége, hogy üzletpolitikai okból az Eladó az árakat módosítsa. Az árak módosítása nem terjed ki a már megkötött szerződésekre. Amennyiben Eladó az árat hibásan tüntette fel, a már megkötött szerződések esetében az ÁSZF „Eljárás hibás ár” pontja alapján jár el.<br />
Panaszügyintézés és jogérvényesítési lehetőségek
<br /><br />
A fogyasztó a termékkel vagy az Eladó tevékenységével kapcsolatos fogyasztói kifogásait az alábbi elérhetőségeken terjesztheti elő:
<br /><br />
Telefon: +36203284934<br />
Internet cím: www.iphonezuglo.hu<br />
e-mail: iphonezuglo@gmail.com<br />
<br /><br /><br />

A fogyasztó szóban vagy írásban közölheti a vállalkozással a panaszát, amely a vállalkozásnak, illetve a vállalkozás érdekében vagy javára eljáró személynek az áru fogyasztók részére történő forgalmazásával, illetve értékesítésével közvetlen kapcsolatban álló magatartására, tevékenységére vagy mulasztására vonatkozik.
<br /><br />
A szóbeli panaszt a vállalkozás köteles azonnal megvizsgálni, és szükség szerint orvosolni. Ha a fogyasztó a panasz kezelésével nem ért egyet, vagy a panasz azonnali kivizsgálása nem lehetséges, a vállalkozás a panaszról és az azzal kapcsolatos álláspontjáról haladéktalanul köteles jegyzőkönyvet felvenni, és annak egy másolati példányát személyesen közölt szóbeli panasz esetén helyben a fogyasztónak átadni. Telefonon vagy egyéb elektronikus	hírközlési	szolgáltatás	felhasználásával	közölt	szóbeli	panasz	esetén	a fogyasztónak legkésőbb 30 napon belül - az írásbeli panaszra adott válaszra vonatkozó előírásoknak megfelelően - az érdemi válasszal egyidejűleg megküldeni. Egyebekben pedig az írásbeli panaszra vonatkozóan az alábbiak szerint köteles eljárni. Az írásbeli panaszt a vállalkozás- ha az Európai Unió közvetlenül alkalmazandó jogi aktusa eltérően nem rendelkezik - a beérkezését követően harminc napon belül köteles írásban érdemben

megválaszolni és intézkedni annak közlése iránt. Ennél rövidebb határidőt jogszabály, hosszabb határidőt törvény állapíthat meg. A panaszt elutasító álláspontját a vállalkozás indokolni köteles. A telefonon vagy elektronikus hírközlési szolgáltatás felhasználásával közölt szóbeli panaszt a vállalkozás köteles egyedi azonosítószámmal ellátni.
<br /><br />
A panaszról felvett jegyzőkönyvnek tartalmaznia kell az alábbiakat:
<br /><br />
1.	a fogyasztó neve, lakcíme,<br />
2.	a panasz előterjesztésének helye, ideje, módja,<br />
3.	a fogyasztó panaszának részletes leírása, a fogyasztó által bemutatott iratok, dokumentumok és egyéb bizonyítékok jegyzéke,<br />
4.	a	vállalkozás	nyilatkozata	a	fogyasztó	panaszával	kapcsolatos	álláspontjáról, amennyiben a panasz azonnali kivizsgálása lehetséges,<br />
5.	a jegyzőkönyvet felvevő személy és - telefonon vagy egyéb elektronikus hírközlési szolgáltatás felhasználásával közölt szóbeli panasz kivételével - a fogyasztó aláírása,<br />
6.	a jegyzőkönyv felvételének helye, ideje,<br />
7.	telefonon vagy egyéb elektronikus hírközlési szolgáltatás felhasználásával közölt szóbeli panasz esetén a panasz egyedi azonosítószáma.<br />
<br /><br />
A vállalkozás a panaszról felvett jegyzőkönyvet és a válasz másolati példányát öt évig köteles megőrizni, és azt az ellenőrző hatóságoknak kérésükre bemutatni.
<br /><br />
A panasz elutasítása esetén a vállalkozás köteles a fogyasztót írásban tájékoztatni arról, hogy panaszával - annak jellege szerint - mely hatóság vagy békéltető testület eljárását kezdeményezheti. A tájékoztatásnak tartalmaznia kell továbbá az illetékes hatóság, illetve a fogyasztó lakóhelye vagy tartózkodási helye szerinti békéltető testület székhelyét, telefonos és internetes elérhetőségét, valamint levelezési címét. A tájékoztatásnak arra is ki kell terjednie, hogy a vállalkozás a fogyasztói jogvita rendezése érdekében igénybe veszi-e a békéltető testületi eljárást.
<br /><br />
Amennyiben az Eladó és a fogyasztó között esetlegesen fennálló fogyasztói jogvita a tárgyalások során nem rendeződik, az alábbi jogérvényesítési lehetőségek állnak nyitva a fogyasztó számára:
<br />Panasztétel a fogyasztóvédelmi hatóságoknál. Amennyiben a fogyasztó fogyasztói jogainak megsértését észleli, jogosult panasszal fordulni a lakóhelye szerint illetékes fogyasztóvédelmi hatósághoz. A panasz elbírálását követően a hatóság dönt a fogyasztóvédelmi eljárás lefolytatásáról. A fogyasztóvédelmi elsőfokú hatósági feladatokat a fogyasztó lakóhelye szerint illetékes    fővárosi    és    megyei    kormányhivatalok    látják    el,    ezek    listája     itt található: http://www.kormanyhivatal.hu/
<br /><br />
Bírósági eljárás.Ügyfél jogosult a fogyasztói jogvitából származó követelésének bíróság előtti érvényesítésére polgári eljárás keretében a Polgári Törvénykönyvről szóló 2013. évi V. törvény, valamint a Polgári Perrendtartásról szóló 2016. évi CXXX. törvény rendelkezései szerint.
<br /><br />
Tájékoztatjuk, hogy Ön velünk szemben fogyasztói panasszal élhet. Amennyiben az Ön fogyasztói panaszát elutasítjuk, úgy Ön jogosult az Ön lakóhelye vagy tartózkodási helye szerint illetékes Békéltető Testülethez is fordulni: a békéltető testület eljárása megindításának feltétele, hogy a fogyasztó az érintett vállalkozással közvetlenül megkísérelje a vitás ügy rendezését. Az eljárásra - a fogyasztó erre irányuló kérelme alapján - az illetékes testület helyett

a fogyasztó kérelmében megjelölt békéltető testület illetékes.
<br /><br />
A vállalkozást a békéltető testületi eljárásban együttműködési kötelezettség terheli.
<br /><br />
Ennek keretében fennáll a vállalkozásoknak a békéltető testület felhívására történő válaszirat megküldési kötelezettsége, továbbá kötelezettségként kerül rögzítésre a békéltető testület előtti megjelenési kötelezettség(„meghallgatáson egyezség létrehozatalára feljogosított személy részvételének biztosítása”).
<br /><br />
Amennyiben a vállalkozás székhelye vagy telephelye nem a területileg illetékes békéltető testületet működtető kamara szerinti megyébe van bejegyezve, a vállalkozás együttműködési kötelezettsége a fogyasztó igényének megfelelő írásbeli egyezségkötés lehetőségének felajánlására terjed ki.
<br /><br /><br />

A fenti együttműködési kötelezettség megszegése esetén a fogyasztóvédelmi hatóság rendelkezik hatáskörrel, amely alapján a jogszabályváltozás következtében a vállalkozások jogsértő	magatartása	esetén	kötelező	bírságkiszabásalkalmazandó,	bírságtól	való eltekintésre nincs lehetőség. A fogyasztóvédelemről szóló törvény mellett módosításra került a kis- és középvállalkozásokról szóló törvény vonatkozó rendelkezése is, így a kis- és középvállalkozások esetén sem mellőzhető majd a bírság kiszabása.
<br /><br />
A bírság mértéke kis- és középvállalkozások esetén 15 ezer forinttól 500 ezer forintig terjedhet, míg a számviteli törvény hatálya alá tartozó, 100 millió forintot meghaladó éves nettó árbevétellel rendelkező, nem kis- és középvállalkozás esetén 15 ezer forinttól, a vállalkozás éves nettó árbevételének 5%-áig, de legfeljebb 500 millió forintig terjedhet. A kötelező bírság bevezetésével a jogalkotó a békéltető testületekkel való együttműködés nyomatékosítását, illetve a vállalkozásoknak a békéltető testületi eljárásban való aktív részvételének biztosítását célozza.
<br /><br /><br />

A békéltető testület hatáskörébe tartozik a fogyasztói jogvita bírósági eljáráson kívüli rendezése. A békéltető testület feladata, hogy megkísérelje a fogyasztói jogvita rendezése céljából egyezség létrehozását a felek között, ennek eredménytelensége esetén az ügyben döntést hoz a fogyasztói jogok egyszerű, gyors, hatékony és költségkímélő érvényesítésének biztosítása érdekében. A békéltető testület a fogyasztó vagy a vállalkozás kérésére tanácsot ad a fogyasztót megillető jogokkal és a fogyasztót terhelő kötelezettségekkel kapcsolatban.
<br /><br />
A békéltető testület eljárása a fogyasztó kérelmére indul. A kérelmet a békéltető testület elnökéhez kell írásban benyújtani: az írásbeliség követelményének levél, távirat, távgépíró vagy telefax útján, továbbá bármely egyéb olyan eszközzel is eleget lehet tenni, amely a címzett számára lehetővé teszi a neki címzett adatoknak az adat céljának megfelelő ideig történő tartós tárolását, és a tárolt adatok változatlan formában és tartalommal történő megjelenítését.
<br /><br />
A kérelemnek tartalmaznia kell
<br /><br />
a.	a fogyasztó nevét, lakóhelyét vagy tartózkodási helyét,<br />
b.	a fogyasztói jogvitával érintett vállalkozás nevét, székhelyét vagy érintett telephelyét,<br />
c.	ha a fogyasztó az illetékességet az illetékes békéltető testület helyett kérelmezett testület megjelölését,<br />
d.	a fogyasztó álláspontjának rövid leírását, az azt alátámasztó tényeket és azok bizonyítékait,<br />
e.	a fogyasztó nyilatkozatát arról, hogy a fogyasztó az érintett vállalkozással közvetlenül megkísérelte a vitás ügy rendezését<br />
<br />f.	a fogyasztó nyilatkozatát arra nézve, hogy az ügyben más békéltető testület eljárását nem kezdeményezte, közvetítői eljárás nem indult, keresetlevél beadására, illetve fizetési meghagyás kibocsátása iránti kérelemelőterjesztésére nem került sor,
g.	a testület döntésére irányuló indítványt,<br />
h.	a fogyasztó aláírását.<br />
<br /><br />
A kérelemhez csatolni kell azt az okiratot, illetve annak másolatát (kivonatát), amelynek tartalmára a fogyasztó bizonyítékként hivatkozik, így különösen a vállalkozás írásbeli nyilatkozatát a panasz elutasításáról, ennek hiányában a fogyasztó rendelkezésére álló egyéb írásos bizonyítékot az előírt egyeztetés megkísérléséről.
<br /><br />
Ha a fogyasztó meghatalmazott útján jár el, a kérelemhez csatolni kell a meghatalmazást. A Békéltető Testületekről bővebb információ itt érhető el: http://www.bekeltetes.hu
<br />A területileg illetékes Békéltető Testületekről bővebb információ itt érhető el: https://bekeltetes.hu/index.php?id=testuletek
<br /><br />
Az egyes területileg illetékes Békéltető Testületek elérhetőségei:
<br /><br /><br />


Baranya Megyei Békéltető Testület Cím: 7625 Pécs, Majorossy I. u. 36. Telefonszám: 06-72-507-154<br />
Fax: 06-72-507-152<br />
E-mail: abeck@pbkik.hu; mbonyar@pbkik.hu<br />

Bács-Kiskun Megyei Békéltető Testület<br />
Cím: 6000 Kecskemét, Árpád krt. 4.<br />
Telefonszám: 06-76-501-500; 06-76-501-525, 06-76-501-523<br />
Fax: 06-76-501-538<br />
E-mail: bekeltetes@bacsbekeltetes.hu; mariann.matyus@bkmkik.hu Honlap: www.bacsbekeltetes.hu<br />
<br /><br />
Békés Megyei Békéltető Testület<br />
Cím: 5600 Békéscsaba, Penza ltp. 5.<br />
Telefonszám: 06-66-324-976<br />
Fax: 06-66-324-976<br />
E-mail: eva.toth@bmkik.hu
<br /><br />
Borsod-Abaúj-Zemplén Megyei Békéltető Testület<br />
Cím: 3525 Miskolc, Szentpáli u. 1. <br />
Telefonszám:06-46-501-091;06-46-501-870<br />
Fax: 06-46-501-099<br />
E-mail: kalna.zsuzsa@bokik.hu<br />
<br /><br />
Budapesti Békéltető Testület<br />
Cím: 1016 Budapest, Krisztina krt. 99. III. em. 310.<br />
Telefonszám: 06-1-488-2131<br />
Fax: 06-1-488-2186<br />
E-mail: bekelteto.testulet@bkik.hu<br />
<br />
Csongrád Megyei Békéltető Testület<br />
Cím: 6721 Szeged, Párizsi krt. 8-12. Telefonszám: 06-62-554-250/118 Fax: 06-62-426-149<br />
E-mail: bekelteto.testulet@csmkik.hu<br />
<br />
Fejér Megyei Békéltető Testület<br />
Cím: 8000 Székesfehérvár, Hosszúsétatér 4-6. Telefonszám:06-22-510-310<br />
Fax: 06-22-510-312<br />
E-mail: fmkik@fmkik.hu<br />
<br />
Győr-Moson-Sopron Megyei Békéltető Testület<br />
Cím: 9021 Győr, Szent István út 10/a. Telefonszám: 06-96-520-217<br />
Fax: 06-96-520-218<br />
E-mail: bekeltetotestulet@gymskik.hu<br />
<br />
Hajdú-Bihar Megyei Békéltető Testület<br />
Cím: 4025 Debrecen, Vörösmarty u. 13-15.<br />
Telefonszám: 06-52-500-710<br />
Fax: 06-52-500-720<br />
E-mail: korosi.vanda@hbkik.hu<br />
<br />
Heves Megyei Békéltető Testület<br />
Cím: 3300 Eger, Faiskola út 15.<br />
Telefonszám: 06-36-429-612<br />
Fax: 06-36-323-615<br />
E-mail: hkik@hkik.hu<br />
<br />
Jász-Nagykun-Szolnok Megyei Békéltető Testület<br />
Cím: 5000 Szolnok, Verseghy park 8. III. emelet 305-306.<br />
Telefonszám: 06-56-510-621, 06-20-373-2570<br />
Fax: 06-56-510-628<br />
E-mail: bekeltetotestulet@jnszmkik.hu<br />
<br />
Komárom-Esztergom Megyei Békéltető Testület<br />
Cím: 2800 Tatabánya, Fő tér 36.<br />
Telefonszám: 06-34-513-027<br />
Fax: 06-34-316-259<br />
E-mail: szilvi@kemkik.hu<br />
<br />
Nógrád Megyei Békéltető Testület Cím: 3100 Salgótarján, Alkotmány út 9/A. Telefonszám: 06-32-520-860<br />
Fax: 06-32-520-862<br />
E-mail: nkik@nkik.hu<br />
<br />
Pest Megyei Békéltető Testület<br />
Cím: 1119 Budapest, Etele út 59-61. II. emelet 240.<br />
Levelezési cím: 1364 Budapest, Pf.: 81<br />
Telefonszám: 06-1-269-0703<br />
Fax: 06-1-474-7921<br />
E-mail: pmbekelteto@pmkik.hu<br />
<br />
Somogy Megyei Békéltető Testület<br />
Cím: 7400 Kaposvár, Anna u.6. Telefonszám: 06-82-501-026<br />
Fax: 06-82-501-046<br />
E-mail: skik@skik.hu<br />
<br />
Szabolcs-Szatmár-Bereg Megyei Békéltető Testület<br />
Cím: 4400 Nyíregyháza, Széchenyi u. 2.<br />
Telefonszám: 06-42-311-544<br />
Fax: 06-42-311-750<br />
E-mail: bekelteto@szabkam.hu<br />
<br />
Tolna Megyei Békéltető Testület<br />
Cím: 7100 Szekszárd, Arany J. u. 23-25. III. emelet Telefonszám: 06-74-411-661<br />
Fax: 06-74-411-456<br />
E-mail: kamara@tmkik.hu<br />
<br />
Vas Megyei Békéltető Testület<br />
Cím: 9700 Szombathely, Honvéd tér 2.<br />
Telefonszám: 06-94-312-356<br />
Fax: 06-94-316-936<br />
E-mail: vmkik@vmkik.hu<br />
<br />
Veszprém Megyei Békéltető Testület<br />
Cím: 8200 Veszprém, Radnóti tér 1. földszint 116.<br />
Telefonszám: 06-88-429-008<br />
Fax: 06-88-412-150<br />
E-mail: bekelteto@veszpremikamara.hu<br />
<br />
Zala Megyei Békéltető Testület<br />
Cím: 8900 Zalaegerszeg, Petőfi u. 24.<br />
Telefonszám: 06-92-550-513<br />
Fax: 06-92-550-525<br />
E-mail: zmbekelteto@zmkik.hu<br />
<br /><br />


Online vitarendezési platform<br />
<br />
Az Európai Bizottság létrehozott egy honlapot, amelybe a fogyasztók beregisztrálhatnak, így ezen keresztül lehetőségük nyílik arra, hogy online vásárláshoz kapcsolódó jogvitáikat ezen keresztül rendezzék egy kérelem kitöltésével, elkerülve a bírósági eljárást. Így a fogyasztók
<br /><br />
tudják érvényesíteni jogaikat anélkül, hogy például a távolság meggátolná őket ebben.
<br /><br />
Ha Ön panaszt kíván tenni egy, az interneten vásárolt termékkel vagy szolgáltatással kapcsolatban, és nem akar feltétlenül bírósághoz fordulni, igénybe veheti az online vitarendezés eszközét.
<br /><br />
A portálon Ön és a kereskedő, akivel szemben panasszal élt, közösen kiválaszthatják a panasz kezelésével megbízni kívánt vitarendezési testületet.
<br /><br />
Az	online	vitarendezési	platform	itt	érhető	el: https://webgate.ec.europa.eu/odr/main/?event=main.home.show&lng=HU
<br /><br />
Szerzői jogok
<br /><br />
A szerzői jogról szóló 1999. évi LXXVI. törvény (továbbiakban: Szjt.) 1. § (1) bekezdése értelmében a weboldal szerzői műnek minősül, így annak minden része szerzői jogi védelem alatt áll. Az Szjt. 16. § (1) bekezdése alapján tilos a weboldalon található grafikai és szoftveres megoldások, számítógépi programalkotások engedély nélküli felhasználása, illetve bármely olyan alkalmazás használata, amellyel a weboldal, vagy annak bármely része módosítható. A weboldalról és annak adatbázisából bármilyen anyagot átvenni a jogtulajdonos írásos hozzájárulása esetén is csak a weboldalra való hivatkozással, forrás feltüntetésével lehet. A jogtulajdonos: Mobil-Repair Kft
<br /><br />
Részleges érvénytelenség, magatartási kódex
<br /><br />
Ha az ÁSZF valamely pontja jogilag hiányos vagy hatálytalan, attól még a szerződés további pontjai érvényben maradnak és a hatálytalan vagy hibás rész helyett a vonatkozó jogszabályok rendelkezései alkalmazandóak.
<br /><br />
Az Eladónak nincs a fogyasztókkal szembeni tisztességtelen kereskedelmi gyakorlat tilalmáról szóló törvény szerinti magatartási kódexe.
<br /><br />
A digitális adattartalom működése, műszaki védelmi intézkedések
<br /><br />
A weboldalon megjelenő adatokat szolgáltató szerverek elérhetősége évi 99,9% feletti. Rendszeresen mentés készül a teljes adattartalomról, így probléma esetén az eredeti adattartalom	visszaállítható.A	weboldalon	megjelenő	adatokat	MSSQL	és	MySQL adatbázisban tároljuk. Az érzékeny adatok megfelelő erősségű titkosítással vannak tárolva, kódolásukhoz processzorba épített hardveres támogatást használunk.
<br /><br />
A termékek lényeges tulajdonságaira vonatkozó tájékoztatás
<br /><br />
A honlapon a megvásárolható termékek lényeges tulajdonságairól az egyes termékeknél szereplő leírásokban adunk tájékoztatást.
<br /><br />
Az adatbeviteli hibák javítása - Felelősség a megadott adatok valóságáért
<br /><br />
Önnek a megrendelés során a megrendelés véglegesítése előtt folyamatosan lehetősége van az Ön által bevitt adatok módosítására (a böngészőben a vissza gombra kattintva az előző oldal nyílik meg, így akkor is javíthatóak a bevitt adatok, ha Ön már a következő oldalra lépett). Felhívjuk a figyelmét, hogy az Ön felelőssége, hogy az Ön által megadott adatok pontosan kerüljenek bevitelre, hiszen az Ön által megadott adatok alapján kerül számlázásra, illetve szállításra a termék. Ön a megrendelésével tudomásul veszi, hogy az Eladó jogosult az Ön hibás adatbeviteléből, a pontatlanul megadott adatokból eredő minden kárát és költségét Önre hárítani. Az Eladó a pontatlan adatbevitel alapján történő teljesítésért felelősségét kizárja. Felhívjuk a figyelmét arra, hogy a rosszul megadott e-mail cím vagy a postafiókhoz tartozó tárhely telítettsége a visszaigazolás kézbesítésének hiányát eredményezheti és meggátolhatja a szerződés létrejöttét.
<br /><br />
Eljárás hibás ár esetén<br />
Nyilvánvalóan hibásan feltüntetett árnak minősül: 0 Ft-os ár,<br />
kedvezménnyel csökkentett, de a kedvezményt tévesen feltüntető ár (pl.: 1000 Ft-os termék esetén a 20 %-os kedvezmény feltüntetése mellett 500 Ft-ért kínált termék).<br />
<br />
Hibás ár feltüntetése esetén Eladó felajánlja a termék valós áron történő megvásárlásának lehetőségét, mely információ birtokában a Vásárló eldöntheti, hogy megrendeli valós áron a terméket vagy minden hátrányos jogkövetkezmény nélkül lemondja a megrendelést.
<br /><br />
A honlap használata A vásárlás folyamata<br />
A Termék kiválasztása<br />
<br /><br />
A honlapon szereplő termékkategóriákra kattintva választhatja ki a kívánt termékcsaládot, és ezen belül az egyes termékeket. Az egyes termékekre kattintva találja a termék fotóját, cikkszámát, ismertetőjét, árát. Önnek vásárlás esetén a honlapon szereplő árat kell megfizetnie. A termékeket illusztrált fényképpel jelöltük. A fényképeken látható kiegészítők, dekorációs elemek nem részei a terméknek, kivéve ha az a termékleírásban külön kiemelésre kerül. Felhívjuk figyelmét, hogy az esetleges elírásokért, téves adatokért felelősséget nem vállalunk!
<br /><br />
Kosárba helyezés<br />
<br />
A Termék kiválasztása után Ön a "Kosárba" gombra kattintva helyezhet - tetszőleges számú - terméket a kosárba anélkül, hogy ezzel Önnek vásárlási- vagy fizetési kötelezettsége keletkezne, mivel a kosárba helyezés nem minősül ajánlattételnek.
<br /><br />
Javasoljuk, hogy akkor is helyezze a kosárba a terméket, ha nem biztos abban, hogy az adott terméket meg kívánja vásárolni, mert ezzel az Ön számára egy kattintással áttekinthetővé válik, hogy az adott pillanatban melyek az Ön által kiválasztott termékek, és azokat egy képernyőn megjelenítve tudja megtekinteni és összehasonlítani. A Kosár tartalma a megrendelés
<br /><br />
véglegesítéséig – a "Rendelés véglegesítése" gomb megnyomásáig – szabadon módosítható, a kosárból tetszés szerinti termékek eltávolíthatóak, a kosárba tetszés szerint újabb termékek helyezhetőek, illetve a kíván termékszám megváltoztatható.
<br /><br />
Amennyiben Ön a kiválasztott terméket a Kosárba helyezi, úgy külön ablak ugrik fel a
<br />„Terméket hozzáadtuk a kosárhoz” szöveggel. Amennyiben Ön nem kíván több terméket kiválasztani, úgy kattintson a „Tovább a kosárhoz” gombra! Amennyiben a kiválasztott terméket szeretné ismét megnézni, vagy újabb terméket szeretne a kosárba helyezni, úgy kattintson a
<br />„Vissza a termékhez” gombra! A Kosár megtekintése
<br />A honlap használata során Ön a honlap tetején található „Kosár megtekintése” ikonra kattintva bármikor ellenőrizheti a kosár tartalmát. Itt lehetősége van a kiválasztott termékeket eltávolítani a kosárból, illetve a termék darabszámát megváltoztatni. A rendszer a „Kosár frissítése” gomb megnyomását követően megjeleníti az Ön által megváltoztatott adatoknak megfelelő információkat, ideértve a kosárba tett termékek árát is.
<br />Amennyiben Ön nem kíván további termékeket kiválasztani és a kosárba helyezni, úgy a
<br />„Megrendelés” gomb lenyomásával folytathatja a vásárlást. Vásárlói adatok megadása
<br />„Megrendelés” gomb lenyomását követően megjelenik a kosár tartalma, illetve az Ön által kiválasztott termékek megvásárlása esetén az Ön által fizetendő teljes vételár. A „Szállítási szolgáltatás” dobozban kell bejelölnie, hogy a megrendelt terméket személyesen kívánja átvenni (személyes átvétel), vagy kiszállítást kér. Kiszállítás esetén a rendszer jelzi a kiszállítás díját, melyet Ön köteles megfizetni megrendelés esetén.
<br /><br />
A „Felhasználói adatok” szövegdobozban e-mail címét, a „Számlázási információ” szövegdobozban teljes nevét, címét, telefonszámát tudja megadni. A ”Szállítási információ” szövegdobozban a rendszer automatikusan a „Számlázási információ” során megadott adatokat tárolja. Amennyiben Ön eltérő címre kéri a szállítást, kérjük távolítsa el a pipát. A „Megjegyzés” szövegdobozban” Ön tetszőlegesen adhat meg további információt.
<br /><br />
A rendelés áttekintése
<br /><br />
A fenti szövegdobozok kitöltését követően Ön a „Folytatás a következő lépéssel” gombra kattintva folytathatja a megrendelési folyamatot, illetve a „Mégsem” gombra kattintva törölheti/javíthatja az eddig bevitt adatokat, és visszaléphet a Kosár tartalmához. A „Folytatás a következő lépéssel” gombra kattintás esetén Ön a „Rendelés áttekintése” oldalra érkezik. Itt láthatja összegezve az Ön által korábban megadott adatokat, így a Kosár tartalmát, a felhasználói, számlázási és szállítási adatokat és az Ön által fizetendő összeget (ezeken az adatokon itt már nem változtathat, csak ha a „Vissza” gombra kattint).
<br /><br />
A rendelés véglegesítése (ajánlattétel)
<br /><br />
Amennyiben Ön meggyőződött arról, hogy a kosár tartalma megfelel az Ön által megrendelni
<br /><br />
kívánt termékeknek, valamint az Ön adatai helyesen szerepelnek, úgy a „Megrendelem” gombra kattintva zárhatja le megrendelését. A honlapon közölt információk nem minősülnek az Eladó részéről szerződés megkötésére vonatkozó ajánlatnak. A jelen ÁSZF hatálya alá tartozó megrendelések esetén Ön minősül ajánlattevőnek.
<br /><br />
Ön a „Megrendelem” gomb megnyomásával kifejezetten tudomásul veszi, hogy ajánlatát megtettnek kell tekinteni, és nyilatkozata – az Eladó jelen ÁSZF szerinti visszaigazolása esetén
- fizetési kötelezettséget von maga után. Önt az ajánlata 48 órás időtartamban köti. Amennyiben az Ön ajánlatát a jelen általános szerződési feltételek szerint 48 órán belül nem igazolja vissza az Eladó, Ön mentesül az ajánlati kötöttsége alól.
<br /><br />
Rendelés feldolgozása, a szerződés létrejötte
<br /><br />
A rendelések feldolgozása két lépcsőben történik. Önnek bármilyen időpontban lehetősége van a megrendelés leadására. A rendelésről először egy automata visszajelzést kap, ami csak annak tényét rögzíti, hogy az Ön megrendelése a honlapon keresztül megérkezett, de ez a visszaigazolás nem minősül az Ön ajánlata elfogadásának. Amennyiben Ön azt észleli, hogy az automata visszaigazoló e-mail értesítés az Ön adatait tévesen tartalmazza (pl. név, szállítási cím, telefonszám, stb.), úgy Ön köteles ennek tényét – a helyes adatok megadásával egyidejűleg – velünk e-mail útján haladéktalanul közölni. Amennyiben Ön a megrendelésétől számított 24 órán belül nem kapja meg az automata visszaigazoló e-mailt, úgy kérjük, vegye fel velünk a kapcsolatot, mert elképzelhető, hogy megrendelése technikai okok miatt nem érkezett meg rendszerünkbe.
<br /><br />
Az Eladó az Ön ajánlatának elküldését követően egy második e-mail útján visszaigazolja az Ön ajánlatát. A szerződés akkor jön létre, amikor az Eladó által küldött visszaigazoló email az Ön számára a levelezőrendszerében hozzáférhetővé válik (második visszaigazolás).
<br /><br />
Fizetési módok<br />
Banki átutalás<br />
<br />
A termékek ellenértékét banki átutalás útján is rendezheti.
<br /><br />
Utánvétel
<br /><br />
Amennyiben a rendelés értékét a csomag kézhezvételekor kívánja kiegyenlíteni, akkor válassza az "Utánvétel" fizetési módot.
<br /><br />
Átvételi módok, átvételi díjak<br />
Szerviz futárszolgálat<br />
A futárszolgálat az Ön által megadott szállítási címre viszi a megrendelt terméket ahol azt helyben, személyesen veheti át.<br />
  XIV. kerül teljes területén ingyenes a futárszolgálat.<br />
Egyéb kerületek szállítási mód díja bruttó 2500 Ft.<br />
<br />
Teljesítési határidő<br />
<br /><br />
A megrendelésre vonatkozóan az általános teljesítési határidő a rendelés visszaigazolásától számított legfeljebb 30 nap.<br />
<br />
Jogfenntartás, tulajdonjogi kikötés
<br /><br />
Amennyiben Ön korábban már úgy rendelt terméket, hogy azt a kiszállítás során nem vette át (ide nem értve azt az esetet, amikor elállási jogával élt), vagy a Termék nem kereste jelzéssel érkezett vissza az eladóhoz, az Eladó a megrendelés teljesítését a vételár és a szállítási költségek előre történő megfizetéséhez köti.
<br /><br />
Eladó visszatarthatja a Termék átadását, ameddig nem győződik meg arról, hogy a Termék árának kifizetése sikeresen megtörtént az elektronikus fizetési megoldás használatával (ideértve azt az esetet is, amikor az átutalással fizetett termék esetén Vásárló a tagállama szerinti pénznemben utalja el a vételárat és az átváltás, valamint a banki jutalékok, költségek miatt Eladó nem kapja meg teljes mértékben a vételár és aszállítási díj összegét). Amennyiben a Termék ára nem került teljes mértékben kifizetésre, az Eladó a vételár kiegészítésére hívhatja fel a Vásárlót.
<br /><br /><br />


Külföldre történő értékesítés
<br /><br />
Eladó nem különbözteti meg a Honlap használatával Magyarország területén és az azon kívül az Európai Unió területén belüli vásárókat. A jelen ÁSZF eltérő rendelkezése hiányában az Eladó Magyarország területén biztosítja a megrendelt termékek kiszállítását/átvételét.
<br /><br />
A Magyarországon kívüli vásárlásra is jelen ÁSZF rendelkezései az irányadóak azzal, hogy a vonatkozó rendelet előírásai alapján jelen pont értelmezésében vevőnek az a fogyasztó minősül, aki valamely tagállam állampolgára, vagy valamely tagállamban lakóhellyel rendelkezik, vagy az a vállalkozás, amely valamely tagállamban letelepedési hellyel rendelkezik, és az Európai Unión belül kizárólag végfelhasználás céljából vásárol árut vagy vesz igénybe szolgáltatást, vagy ilyen szándékkal jár el. Fogyasztónak az a természetes személy minősül, aki olyan célból jár el, amely kívül esik kereskedelmi, ipari, kézműipari vagy szakmai tevékenysége körén.
<br /><br />
A kommunikáció és a vásárlás nyelve elsősorban a magyar nyelv, Eladó nem köteles a vásárló tagállami szerinti nyelven kommunikálni Vásárlóval.
<br /><br />
Eladó nem köteles megfeleljen a Vásárló tagállama szerinti nemzeti jogban az érintett Termékkel kapcsolatban meghatározott szerződésen kívüli követelményeknek, például címkézési vagy ágazatspecifikus követelményeknek, vagy hogy tájékoztassa a Vásárlót ezekről a követelményekről.
<br /><br />
Eladó eltérő rendelkezése hiányában Magyarországi ÁFÁ-t alkalmazza minden Termék esetében.
<br /><br />
Vásárló a jelen ÁSZF szerint élhet jogérvényesítési lehetőségeivel.
<br /><br />
Elektronikus fizetési megoldás alkalmazása esetén a fizetés az Eladó által meghatározott pénznemben valósul meg,
<br /><br />
Eladó visszatarthatja a Termék átadását ameddig nem győződik meg arról, hogy a Termék árának és a szállítási díjnak kifizetése sikeresen és maradéktalanul megtörtént az elektronikus fizetési megoldás használatával (ideértve azt az esetet is, amikor az átutalással fizetett termék esetén Vásárló a tagállama szerinti pénznemben utalja el a vételárat (szállítási díjat) és az átváltás, valamint a banki jutalékok, költségek miatt Eladó nem kapja meg teljes mértékben a vételár összegét). Amennyiben a Termék ára nem került teljes mértékben kifizetésre, az Eladó a vételár kiegészítésére hívhatja fel a Vásárlót.
<br /><br />
Eladó a Termék átadása érdekében a magyar vásárlókat megillető átadási lehetőségeket biztosítja a nem magyarországi vásárlóknak is.
<br /><br />
Amennyiben Vásárló az ÁSZF szerint kérheti a Termék szállítását Magyarország területére, vagy bármely más Európai Uniós tagállam területére, ezt kérheti a nem magyarországi vásárló is bármely az ÁSZF-ben megjelölt szállítási módon.
<br /><br />
Amennyiben Vásárló az ÁSZF szerint választhatja a Termék személyes átvételét az Eladónál, ezzel élhet a nem magyarországi vásárló is.
<br /><br />
Egyebekben a Vásárló kérheti, hogy a Termék szállítását saját költségén oldhassa meg külföldre. Magyar vásárlót ez a jog nem illet meg.
<br /><br />
Eladó a szállítási díj megfizetését követően teljesíti a megrendelést, amennyiben Vásárló a szállítási díjat nem fizeti meg Eladó számára, vagy a saját szállítást nem oldja meg az előre egyezetetett időpontig, Eladó a szerződést felmondja és az előre megfizetett vételárat visszafizeti Vásárló számára.
<br /><br />
Fogyasztói tájékoztató a 45/2014. (II. 26.) Korm. rendelet alapján
<br /><br /><br />

Tájékoztató a fogyasztó vevőt megillető elállási jogról
<br /><br />
Fogyasztónak a Ptk. 8:1. § 1. bekezdés 3. pontja szerint csak a szakmája, önálló foglalkozása
<br /><br />
vagy üzleti tevékenysége körén kívül eljáró természetes személy minősül, így jogi személyek nem élhetnek az indokolás nélküli elállási joggal!
<br /><br />
A fogyasztót a 45/2014. (II. 26.) Korm. rendelet 20. § szerint megilleti az indokolás nélküli elállás joga. A fogyasztó az elállási jogát
<br /><br />
a) termék adásvételére irányuló szerződés esetén aa) a terméknek,<br />
ab) több termék adásvételekor, ha az egyes termékek szolgáltatása eltérő időpontban történik,az utoljára szolgáltatott terméknek,<br />
a fogyasztó vagy az általa megjelölt, a fuvarozótól eltérő harmadik személy általi átvételének napjától számított határidőn belül gyakorolhatja, mely határidő 14 nap.<br />
<br />
A jelen pontban foglaltak nem érintik a fogyasztó azon jogát, hogy az e pontban meghatározott elállási jogát a szerződés megkötésének napja és a termék átvételének napja közötti időszakban is gyakorolja.
<br /><br />
Ha a szerződés megkötésére a fogyasztó tett ajánlatot, a fogyasztót a szerződés megkötése előtt megilleti az ajánlat visszavonásának joga, ami a szerződés megkötésére kiterjedő ajánlati kötöttséget megszünteti.
<br /><br />
Elállási nyilatkozat, a fogyasztót megillető elállási vagy felmondási jog gyakorlása<br />
A fogyasztó a 45/2014. (II. 26.) Korm. rendelet 20. § -ban biztosított jogát az erre vonatkozó egyértelmű nyilatkozat útján, vagy a honlapról is letölthető nyilatkozat-minta felhasználásával gyakorolhatja.
<br /><br />
A fogyasztó elállási nyilatkozatának érvényessége
<br /><br />
Az elállási jogot határidőben érvényesítettnek kell   tekinteni,   ha   a   fogyasztó nyilatkozatát határidőn belül elküldi. A határidő 14 nap.
<br /><br />
A fogyasztót terheli annak bizonyítása, hogy az elállás jogát e rendelkezéssel összhangban gyakorolta.
<br /><br />
Az Eladó a fogyasztó elállási nyilatkozatát annak megérkezését követően köteles elektronikus adathordozón haladéktalanul visszaigazolni, amennyiben az internetes honlapján is biztosítja a fogyasztó számára az elállási jog gyakorlását.
<br /><br />
Az Eladó kötelezettségei a fogyasztó elállása esetén<br />
Az Eladó visszatérítési kötelezettsége<br />
<br />
Ha a fogyasztó a 45/2014. (II. 26.) Korm. rendelet 22. § -nak megfelelően eláll a szerződéstől, az Eladó legkésőbb az elállásról való tudomásszerzésétől számított tizennégy napon belül visszatéríti a fogyasztó által ellenszolgáltatásként megfizetett teljes összeget, ideértve a teljesítéssel összefüggésben felmerült költségeket, így a szállítási díjat is. Felhívjuk a figyelmét, hogy ez a rendelkezés nem vonatkozik a legkevésbé költséges szokásos fuvarozási módtól eltérő fuvarozási mód választásával okozott többletköltségekre.
<br /><br />
Az Eladó visszatérítési kötelezettségének módja
<br /><br />
A 45/2014. (II. 26.) Korm. rendelet 22. § -nak megfelelő elállás vagy felmondás esetén az Eladó a fogyasztónak visszajáró összeget a fogyasztó által igénybe vett fizetési móddal megegyező módon téríti vissza. A fogyasztó kifejezett beleegyezése alapján az Eladó a visszatérítésre más fizetési módot is alkalmazhat, de a fogyasztót ebből adódóan semmilyen többletdíj nem terhelheti. A Fogyasztó által hibásan és/vagy pontatlanul megadott bankszámlaszám vagy postai cím következtében történő késedelem miatt az Eladó-t felelősség nem terheli.
<br /><br />
Többletköltségek
<br /><br />
Ha a fogyasztó kifejezetten a legkevésbé költséges szokásos fuvarozási módtól eltérő fuvarozási módot választ, az Eladó nem köteles visszatéríteni az ebből eredő többletköltségeket. Ilyen esetben a feltüntetett általános szállítási díjtételek erejéig áll fenn visszatérítési kötelezettségünk.
<br /><br />
Visszatartási jog
<br /><br />
Az Eladó mindaddig visszatarthatja a fogyasztónak visszajáró összeget, amíg a fogyasztó a terméket vissza nem szolgáltatta, vagy kétséget kizáróan nem igazolta, hogy azt visszaküldte; a kettő közül a korábbi időpontot kell figyelembe venni. Utánvéttel vagy portósan feladott küldeményeket nem áll módunkban elfogadni.
<br /><br />
A fogyasztó kötelezettségei elállása vagy felmondása esetén<br />
A termék visszaszolgáltatása
<br /><br />
Ha a fogyasztó a 45/2014. (II. 26.) Korm. rendelet 22. § -nak megfelelően eláll a szerződéstől, köteles a terméket haladéktalanul, de legkésőbb az elállás közlésétől számított tizennégy napon belül visszaküldeni, illetve az Eladónak vagy az Eladó által a termék átvételére meghatalmazott személynek átadni. A visszaküldés határidőben teljesítettnek minősül, ha a fogyasztó a terméket a határidő lejárta előtt elküldi.
<br /><br />
A termék visszaszolgáltatásával kapcsolatos költségek viselése
<br /><br />
A fogyasztó viseli a termék visszaküldésének költségét. A terméket az Eladó címére kell visszaküldeni. Ha a fogyasztó a teljesítés megkezdését követően felmondja az üzlethelyiségen kívül vagy távollévők között kötött - szolgáltatás nyújtásra vonatkozó - szerződést, köteles a felmondás vállalkozással való közlése időpontjáig teljesített szolgáltatással arányos díjat a vállalkozás számára megfizetni. A fogyasztó által arányosan fizetendő összeget a szerződésben megállapított ellenszolgáltatás adóval növelt teljes összege alapján kell
<br /><br />
megállapítani. Ha a fogyasztó bizonyítja, hogy az ily módon megállapított teljes összeg túlzottan magas, az arányos összeget a szerződés megszűnésének időpontjáig teljesített szolgáltatások piaci értéke alapján kell kiszámítani. Kérjük vegye figyelembe, hogy utánvéttel vagy portósan visszaküldött terméket nem áll módunkban átvenni.
<br /><br />
Fogyasztó felelőssége az értékcsökkenésért
<br /><br />
A fogyasztó a termék jellegének, tulajdonságainak és működésének megállapításához szükséges használatot meghaladó használatból eredő értékcsökkenésért felel.
<br /><br />
Az elállási jog az alábbi esetekben nem gyakorolható
<br /><br />
Az Eladó kifejezetten felhívja az Ön figyelmét, hogy Ön nem gyakorolhatja elállási jogát a 45/2014 (II.26.) Korm. Rendelet 29. § . (1) bekezdésében foglalt esetekben:
<br /><br />
a)	a szolgáltatás nyújtására irányuló szerződés esetében a szolgáltatás egészének teljesítését követően, ha a vállalkozás a teljesítést a fogyasztó kifejezett, előzetes beleegyezésével kezdte meg, és a fogyasztó tudomásul vette, hogy a szolgáltatás egészének teljesítését követően felmondási jogát elveszíti;
<br /><br />
b)	olyan termék vagy szolgáltatás tekintetében, amelynek ára, illetve díja a pénzpiac vállalkozás által nem befolyásolható, az elállási jog gyakorlására meghatározott határidő alatt is lehetséges ingadozásától függ;
<br /><br />
c)	olyan nem előre gyártott termék esetében, amelyet a fogyasztó utasítása alapján vagy kifejezett kérésére állítottak elő, vagy olyan termék esetében, amelyet egyértelműen a fogyasztó személyére szabtak;
<br /><br />
d)	romlandó vagy minőségét rövid ideig megőrző termék tekintetében;
<br /><br />
e)	olyan zárt csomagolású termék tekintetében, amely egészségvédelmi vagy higiéniai okokból az átadást követő felbontása után nem küldhető vissza;
<br /><br />
f)	olyan termék tekintetében, amely jellegénél fogva az átadást követően elválaszthatatlanul vegyül más termékkel;
<br /><br />
g)	olyan alkoholtartalmú ital tekintetében, amelynek tényleges értéke a vállalkozás által nem befolyásolható módon a piaci ingadozásoktól függ, és amelynek áráról a felek az adásvételi szerződés megkötésekor állapodtak meg, azonban a szerződés teljesítésére csak a megkötéstől számított harmincadik napot követően kerül sor;
<br /><br />
h)	olyan vállalkozási szerződés esetében, amelynél a vállalkozás a fogyasztó kifejezett kérésére keresi fel a fogyasztót sürgős javítási vagy karbantartási munkálatok elvégzése céljából;
<br /><br />
i)	lezárt csomagolású hang-, illetve képfelvétel, valamint számítógépes szoftver példányának adásvétele tekintetében, ha az átadást követően a fogyasztó a csomagolást felbontotta;
<br /><br />
j)	hírlap, folyóirat és időszaki lap tekintetében, az előfizetéses szerződések kivételével;
<br /><br />
k)	nyilvános árverésen megkötött szerződések esetében;
<br /><br />
l)	lakáscélú szolgáltatás kivételével szállásnyújtásra irányuló szerződés, fuvarozás, személygépjármű-kölcsönzés, étkeztetés vagy szabadidős tevékenységekhez kapcsolódó szolgáltatásra irányuló szerződés esetében, ha a szerződésben meghatározott teljesítési határnapot vagy határidőt kötöttek ki;
<br /><br />
m)	a nem tárgyi adathordozón nyújtott digitális adattartalom tekintetében, ha a vállalkozás a fogyasztó kifejezett, előzetes beleegyezésével kezdte meg a teljesítést, és a fogyasztó e beleegyezésével egyidejűleg nyilatkozott annak tudomásul vételéről, hogy a teljesítés megkezdését követően elveszíti az elállási jogát.
<br /><br />
Kellékszavatosság, termékszavatosság, jótállás
<br /><br />
A fogyasztói tájékoztató jelen pontja a 45/2014 (II.26.) Korm. rendelet 9. § (3) bekezdése felhatalmazása alapján a 45/2014 (II.26.) Korm. rendelet 3. számú melléklete alkalmazásával készült.
<br /><br />
Kellékszavatosság
<br /><br />
Milyen esetben élhet Ön a kellékszavatossági jogával?
<br /><br />
Ön az Eladó hibás teljesítése esetén az Eladóval szemben kellékszavatossági igényt érvényesíthet a Polgári Törvénykönyv szabályai szerint.
<br /><br />
Milyen jogok illetik meg Önt kellékszavatossági igénye alapján?
<br /><br />
Ön – választása szerint–az alábbi kellékszavatossági igényekkel élhet:
<br /><br />
Kérhet kijavítást vagy kicserélést, kivéve, ha az ezek közül az Ön által választott igény teljesítése lehetetlen vagy az Eladó számára más igénye teljesítéséhez képest aránytalan többletköltséggel járna. Ha a kijavítást vagy a kicserélést nem kérte, illetve nem kérhette, úgy igényelheti az ellenszolgáltatás arányos leszállítását vagy a hibát az Eladó költségére Ön is kijavíthatja, illetve mással kijavíttathatja vagy – végső esetben – a szerződéstől is elállhat.
<br /><br />
Választott kellékszavatossági jogáról egy másikra is áttérhet, az áttérés költségét azonban Ön viseli, kivéve, ha az indokolt volt, vagy arra az Eladó adott okot.
<br /><br />
Milyen határidőben érvényesítheti Ön kellékszavatossági igényét?
<br /><br />
Ön köteles a hibát annak felfedezése után haladéktalanul, de nem később, mint a hiba felfedezésétől számított kettő hónapon belül közölni. Ugyanakkor felhívjuk a figyelmét, hogy a szerződés teljesítésétől számított két éves elévülési határidőn túl kellékszavatossági jogait már nem érvényesítheti.
<br />Ha a fogyasztó és a vállalkozás közötti szerződés tárgya használt dolog, a felek rövidebb
elévülési időben is megállapodhatnak; egy évnél rövidebb elévülési határidő ebben az esetben sem köthető ki érvényesen.
<br /><br />
Kivel szemben érvényesítheti kellékszavatossági igényét?
<br /><br />
Ön az Eladóval szemben érvényesítheti kellékszavatossági igényét.
<br /><br />
Milyen egyéb feltétele van kellékszavatossági jogai érvényesítésének?
<br /><br />
A teljesítéstől számított hat hónapon belül a kellékszavatossági igénye érvényesítésének a hiba közlésén túl nincs egyéb feltétele, ha Ön igazolja, hogy a terméket, illetve a szolgáltatást az Eladó nyújtotta. A teljesítéstől számított hat hónap eltelte után azonban már Ön köteles bizonyítani, hogy az Ön által felismert hiba már a teljesítés időpontjában is megvolt.
<br /><br />
Használt termékek esetén alapesetben az általános szabályoktól eltérően alakulnak a szavatossági, jótállási jogok. A használt termékek esetében is beszélhetünk hibás teljesítésről, azonban figyelembe kell venni azokat a körülményeket, amelyek alapján a Vásárló bizonyos hibák előfordulására számíthatott. Az avulás folytán ugyanis egyes hibák jelentkezései egyre gyakoribbakká válnak, amelyek következtében azt, hogy egy használt termék ugyanolyan minőséggel rendelkezhet, mint egy újonnan vásárolt, nem lehet feltételezni. Ennek alapján a Vásárló csak az olyan hiányosságok tekintetében érvényesítheti a szavatossági jogait, amelyek a használtságból eredő hibákon felüliek, és azoktól függetlenül keletkeztek. Ha a használt termék hibás és erről a Fogyasztónak minősülő Vásárló a vásárláskor tájékoztatást kapott, az ismert hiba vonatkozásában a Szolgáltatónak nincs felelőssége.
<br /><br />
Termékszavatosság
<br /><br />
Milyen esetben élhet Ön a termékszavatossági jogával?
<br /><br />
Ingó dolog (termék) hibája esetén Ön – választása szerint – a kellékszavatossági igényt vagy termékszavatossági igényt érvényesíthet.
<br /><br />
Milyen jogok illetik meg Önt termékszavatossági igénye alapján?
<br /><br />
Termékszavatossági igényként Ön kizárólag a hibás termék kijavítását vagy kicserélését kérheti.
<br /><br />
Milyen esetben minősül a termék hibásnak?
<br /><br />
A termék akkor hibás, ha az nem felel meg a forgalomba hozatalakor hatályos minőségi követelményeknek vagy pedig, ha nem rendelkezik a gyártó által adott leírásban szereplő tulajdonságokkal.
<br /><br />
Milyen határidőben érvényesítheti Ön termékszavatossági igényét?
<br /><br />
Termékszavatossági igényét Ön a termék gyártó általi forgalomba hozatalától számított két éven belül érvényesítheti. E határidő elteltével e jogosultságát elveszti.
<br /><br />
Kivel szemben és milyen egyéb feltétellel érvényesítheti termékszavatossági igényét?
<br /><br />
Termékszavatossági igényét kizárólag az ingó dolog gyártójával vagy forgalmazójával szemben gyakorolhatja. A termék hibáját termékszavatossági igény érvényesítése esetén Önnek kell bizonyítania.
<br /><br />
A gyártó (forgalmazó) milyen esetben mentesül termékszavatossági kötelezettsége alól?
<br /><br />
A gyártó (forgalmazó) kizárólag akkor mentesül termékszavatossági kötelezettsége alól, ha bizonyítani tudja, hogy:
<br /><br />
a terméket nem üzleti tevékenysége körében gyártotta, illetve hozta forgalomba, vagy<br />
a hiba a tudomány és a technika állása szerint a forgalomba hozatal időpontjában nem volt felismerhető vagy<br />
a termék hibája jogszabály vagy kötelező hatósági előírás alkalmazásából ered.<br />
<br />
A gyártónak (forgalmazónak) a mentesüléshez elegendő egy okot bizonyítania.
<br /><br />
Felhívom figyelmét, hogy ugyanazon hiba miatt kellékszavatossági és termékszavatossági igényt egyszerre, egymással párhuzamosan nem érvényesíthet. Termékszavatossági igényének eredményes érvényesítése esetén azonban a kicserélt termékre, illetve kijavított részre vonatkozó kellékszavatossági igényét a gyártóval szemben érvényesítheti.
<br /><br />
Jótállás<br />
Milyen esetben élhet Ön a jótállási jogával?<br />
<br />
Hibás teljesítés esetén az egyes tartós fogyasztási cikkekre vonatkozó kötelező jótállásról szóló 151/2003. (IX. 22.) Korm. rendelet alapján az Eladó jótállásra köteles.
<br /><br />
Jogszabály írja elő a jótállás biztosítását az olyan tartós fogyasztási cikkek (pl.: műszaki cikkek, szerszámok, gépek) és alkatrészeik esetében, amelyek vásárlási értéke a 10 000 Ft-ot meghaladja.
<br /><br />
Önt milyen jogok és milyen határidőn belül illetik meg jótállás alapján?
<br /><br />
Az egyes tartós fogyasztási cikkekre vonatkozó kötelező jótállásról szóló 151/2003. (IX. 22.) Korm. rendelet határozza meg a kötelező jótállás eseteit. Az ezen esetkörbe nem tartozó Termékek esetén az Eladó jótállást nem vállal. A jótállási igény a jótállási határidőben érvényesíthető. Ha a jótállásra kötelezett kötelezettségének a jogosult felhívására - megfelelő határidőben - nem tesz eleget, a jótállási igény a felhívásban tűzött határidő elteltétől számított három hónapon belül akkor is érvényesíthető bíróság előtt, ha a jótállási idő már eltelt. E határidő elmulasztása jogvesztéssel jár. A jótállási igény érvényesítésére egyebekben a kellékszavatossági jogok gyakorlására vonatkozó szabályokat kell megfelelően alkalmazni. A jótállás időtartama egy év. E határidő elmulasztása jogvesztéssel jár. A jótállási határidő a fogyasztási cikk fogyasztó részére történő átadása, vagy ha az üzembe helyezést a vállalkozás vagy annak megbízottja végzi, az üzembe helyezés napjával kezdődik. Az egy éven túli esetleges jótállási igényekkel kapcsolatban szíveskedjen a gyártóhoz fordulni!
<br /><br />
Mi a viszonya a jótállásnak más szavatossági jogokkal?
<br /><br />
A jótállás a szavatossági jogok (termék és kellékszavatosság) mellett érvényesül, alapvető különbség az általános szavatossági jogok és a jótállás között, hogy a jótállás esetén a fogyasztónak kedvezőbb a bizonyítási teher.
<br /><br />
A 151/2003 Korm. Rendelet szerinti kötelező jótállás alá eső rögzített bekötésű, illetve a 10 kg- nál súlyosabb, vagy tömegközlekedési eszközön kézi csomagként nem szállítható fogyasztási cikket - a járművek kivételével - az üzemeltetés helyén kell megjavítani. Ha a kijavítás az üzemeltetés helyén nem végezhető el, a le- és felszerelésről, valamint az el- és visszaszállításról a vállalkozás, vagy - a javítószolgálatnál közvetlenül érvényesített kijavítás iránti igény esetén - a javítószolgálat gondoskodik.
<br /><br />
Az eladó vállalása a kötelező jótállás időtartama alatt nem tartalmazhat a fogyasztóra nézve olyan feltételeket, amelyek hátrányosabbak azoknál a jogoknál, amelyeket a kötelező jótállás szabályai biztosítanak. Ezt követően (1 év után) azonban az önkéntes jótállás feltételei szabadon állapíthatóak meg, azonban a jótállás ebben az esetben sem érintheti a fogyasztó jogszabályból eredő -így köztük a kellékszavatosságon alapuló jogainak fennállását.
<br /><br />
Három munkanapon belüli csereigény
<br /><br />
Webáruházon keresztüli értékesítés esetén is érvényesül a három munkanapon belüli csereigény intézménye. Három munkanapon belüli csereigényt a 151/2003. (IX. 22.) Korm. rendelet alá tartozó tartós fogyasztási cikkek esetében lehet érvényesíteni, amely szerint, ha a 3 munkanapon belül érvényesíti valaki a csereigény intézményét, akkor az eladónak ezt úgy kell értelmeznie, hogy a termék az eladáskor már hibás volt és minden további nélkül a terméket ki kell cserélnie.
<br /><br />
Mikor mentesül az Eladó a jótállási kötelezettsége alól?
<br /><br />
Az Eladó a jótállási kötelezettsége alól csak abban az esetben mentesül, ha bizonyítja, hogy a hiba oka a teljesítés után keletkezett.
<br /><br />
Felhívjuk a figyelmét, hogy ugyanazon hiba miatt kellékszavatossági és jótállási igényt, illetve termékszavatossági és jótállási igényt egyszerre, egymással párhuzamosan nem érvényesíthet, egyébként viszont Önt a jótállásból fakadó jogok a szavatossági jogosultságoktól függetlenül megilletik.
<br /><br />
A jelen ÁSZF-ben írt szavatossági és jótállási jogok gyakorlásának határideje attól a naptól indul, amikor a Vásárló a terméket átveszi.

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

export default Fifth