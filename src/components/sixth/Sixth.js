import React, {useState} from 'react'
import "./Sixth.css"
import logo from "../../assets/logo1.png";
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';


const Sixth = () => {

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
Adatkezelési tájékoztató<br />
Elfogadás dátuma: 2022-03-22.
<br /><br />
Adatkezelő<br />
Név:<br />
Zugló iPhone Szerviz<br />
<br />
 

Székhely: 9407, Sopron Csalánkerti út 34.<br /><br />

Levelezési cím, panaszkezelés: 1148 Adria sétány 10/g 4/11<br /><br />

E-mail: iphonezuglo@gmail.com<br />
Telefonszám: +36203284934<br />
Weboldal: http://www.iphonezuglo.hu<br /><br />
Tárhelyszolgáltató<br />

Név: C - Host Kft<br />

Levelezési cím: 1115 Budapest, Halmi utca 29.<br />
E-mail cím: info@nethely.hu <br />
A webshop üzemeltetése során végzett adatkezelések leírása<br />
<br /><br />
A cookie-k használatával kapcsolatos tájékoztatás
<br /><br />
Mi az a cookie?<br />
Az Adatkezelő a honlap látogatása során úgynevezett cookie-kat (sütiket) használ. A cookie betűből és számokból álló információcsomag, amit honlapunk az Ön böngészőjének küld el azzal a céllal, hogy elmentse bizonyos beállításait, megkönnyítse a honlapunk használatát és közreműködik abban, hogy néhány releváns, statisztikai jellegű információt gyűjtsünk a látogatóinkról.
<br /><br />
A cookie-k (sütik) egy része nem tartalmaz személyes információkat, és nem alkalmas az egyéni felhasználó azonosítására, egy részük azonban olyan egyéni azonosítót tartalmaz - egy titkos, véletlenül generált számsort - amelyet az Ön eszköze tárol, ezzel az Ön azonosíthatóságát is biztosítja. Az egyes cookie-k (sütik) működési időtartamát az egyes cookie- k (sütik) vonatkozó leírása tartalmazza.
<br /><br />
A cookie-k jogszabályi háttere és jogalapja:
<br /><br />
Az adatkezelés jogalapja a Rendelet 6. cikk (1) bekezdés a) pontja alapján az Ön hozzájárulása.
<br /><br />
A honlap által használt cookie-k főbb jellemzői:
<br /><br />
Remarketing cookiek-k:A korábbi látogatók vagy felhasználók számára a Google Display Hálózaton	található	egyéb	webhelyeken	való	böngészés,	illetve	termékeivel	vagy szolgáltatásaival kapcsolatos kifejezések keresésekor jelenhetnek meg
<br /><br />
A működéshez szigorúan szükséges cookie-k:Ezek a cookie-k a weboldal használatához nélkülözhetetlenek, és lehetővé teszik a weboldal alapvető funkcióinak használatát. Ezek hiányába az oldal számos funkciója nem lesz elérhető az Ön számára. Ezen típusú cookie-k élettartama kizárólag a munkamenet idejére korlátozódik.
<br /><br />
A felhasználói élmény javítását szolgáló cookie-k: Ezek a cookie-k információkat gyűjtenek a felhasználó weboldalhasználatáról, például, hogy mely oldalakat látogatja leggyakrabban, vagy milyen hibaüzenetet kap a weboldalról. Ezek a cookie-k nem gyűjtenek a látogatót azonosító információkat, vagyis teljesen általános, névtelen információkkal dolgoznak. Az ezekből nyert adatokat a weboldal teljesítményének javítására használjuk. Ezen típusú cookie-k élettartama kizárólag a munkamenet idejére korlátozódik.
<br /><br />
Amennyiben Ön nem fogadja el a cookie-k használatát, akkor bizonyos funkciók nem lesznek elérhetőek az Ön számára. A cookie-k törléséről bővebb tájékoztatást az alábbi linkeken találhat:
<br /><br />
Internet Explorer: http://windows.microsoft.com/en-us/internet-explorer/delete-manage-cookies#ie=ie-11<br />
Firefox:
https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer<br />
Mozilla:
https://support.mozilla.org/hu/kb/weboldalak-altal-elhelyezett-sutik-torlese-szamito<br />
Safari: https://support.apple.com/kb/ph21411?locale=en_US<br />
Chrome: https://support.google.com/chrome/answer/95647<br />
<br /><br />
A szerződéskötés és teljesítés érdekében kezelt adatok
<br />
A szerződéskötés és teljesítés érdekében több adatkezelési eset is megvalósulhat. Tájékoztatjuk, hogy panaszkezeléssel, garanciális ügyintézéssel kapcsolatos adatkezelés csak abban az esetben valósul meg, ha Ön él valamelyik említett jogával.
<br />
Amennyiben a webshopon keresztül Ön nem vásárol, csak látogatója a webshopnak, akkor a marketing célú adatkezelésnél írtak vonatkozhatnak Önre, amennyiben marketing célú hozzájárulást ad számunkra.
<br />
A szerződéskötés és teljesítés érdekében megvalósuló adatkezelések részletesebben:<br /><br /><br />
Kapcsolatfelvétel<br /><br />
 
Ha például emailben, kapcsolatfelvételi űrlapon, vagy telefonon kérdéssel fordul hozzánk valamely termékkel kapcsolatban.
<br />
Az előzetes kapcsolatfelvétel nem kötelező, ezt kihagyva is bármikor rendelhet a webshopból.
<br /><br />
Kezelt adatok<br /><br />

Az Ön által a kapcsolatfelvétel során megadott adatok.
<br />
Az adatkezelés időtartama
<br />
Az adatokat csak a kapcsolatfelvétel lezárultáig kezeljük.
<br />
Az adatkezelés jogalapja
<br />
Az Ön önkéntes hozzájárulása, amit a kapcsolatfelvétellel ad meg Adatkezelő számára. [Rendelet 6. cikk (1) bekezdés a) pont szerinti adatkezelés]
<br /><br /><br />
Regisztráció a weboldalon
<br /><br />
A regisztráció során megadott adatok tárolásával az Adatkezelő kényelmesebb szolgáltatást tud biztosítani (pl. az érintett adatait újabb vásárláskor nem kell ismét megadni). A regisztráció a szerződéskötésnek nem feltétele
<br /><br />
Kezelt adatok
<br /><br />
Az adatkezelés során az Adatkezelő az Ön nevét, lakcímét, telefonszámát, e-mail címét, a megvásárolt termék jellemzőit és a vásárlás időpontját kezeli.
<br />
Az adatkezelés időtartama
<br />
A hozzájárulásának visszavonásáig.
<br />
Az adatkezelés jogalapja
<br />
Az Ön önkéntes hozzájárulása, amit a regisztrációval ad meg az Adatkezelő számára [Rendelet
6. cikk (1) bekezdés a) pont szerinti adatkezelés]
<br /><br /><br />
A rendelés feldolgozása
<br /><br />
A rendelések feldolgozása során a szerződés teljesítése érdekében szükségesek adatkezelési tevékenységek
<br /><br />
Kezelt adatok
<br /><br />
Az adatkezelés során az Adatkezelő az Ön nevét, lakcímét, telefonszámát, e-mail címét, a megvásárolt termék jellemzőit, a megrendelés számát és a vásárlás időpontját kezeli.
<br />
Amennyiben Ön rendelést adott le a webshopban, akkor az adatkezelés és az adatok megadása a szerződés teljesítéséhez elengedhetetlen.
<br />
Az adatkezelés időtartama
<br />
Az adatokat a polgári jogi elévülési idő szerint 5 évig kezeljük.
<br />
Az adatkezelés jogalapja
<br />
A szerződés teljesítése. [Rendelet 6. cikk (1) bekezdés b) pont szerinti adatkezelés]
<br /><br /><br />
A számla kiállítása<br />
Az adatkezelési folyamat a jogszabályoknak megfelelő számla kiállítása és a számviteli bizonylat-megőrzési kötelezettség teljesítése érdekében történik. Az Sztv. 169. § (1)-(2) bekezdése alapján a gazdasági társaságoknak a könyvviteli elszámolást közvetlenül és közvetetten alátámasztó számviteli bizonylatot meg kell őrizniük.
<br /><br />
Kezelt adatok
<br /><br />
Név, cím, e-mail cím, telefonszám.
<br />
Az adatkezelés időtartama
<br />
A kiállított számlákat az Sztv. 169. § (2) bekezdése alapján a számla kiállításától számított 8 évig meg kell őrizni.
<br />
Az adatkezelés jogalapja
<br />
Az általános forgalmi adóról szóló 2007. évi CXXVII. 159. § (1) bekezdése alapján a számla kibocsátása kötelező és azt számvitelről szóló 2000. évi C. törvény 169. § (2) bekezdése alapján 8 évig kell megőrizni [Rendelet 6. cikk (1) bekezdés c) pont szerinti adatkezelés].
<br /><br /><br />
Az áruszállításhoz kapcsolódó adatkezelés<br /><br />
Az adatkezelési folyamat a megrendelt termék kiszállítása érdekében történik.
<br /><br />
Kezelt adatok
<br /><br />
Név, cím, e-mail cím, telefonszám.
<br />
Az adatkezelés időtartama
<br />
Az Adatkezelő az adatokat a megrendelt áru kiszállításának időtartamáig kezeli.
<br />
Az adatkezelés jogalapja
<br />
Szerződés teljesítése [Rendelet 6. cikk (1) bekezdés b) pont szerinti adatkezelés].
<br /><br /><br />
Garanciális ügyintézés<br />
Az adatkezelési folyamat a garanciális panaszok kezelése érdekében történik. Amennyiben Ön garanciális ügyintézés kért, akkor az adatkezelés és az adatok megadása elengedhetetlen.
<br /><br />
Kezelt adatok
<br /><br />
Vásárló neve, telefonszáma, email címe, a panasz tartalma.
<br />
Az adatkezelés időtartama
<br />
A garanciális panaszokat a fogyasztóvédelemről szóló törvény alapján 5 évig őrizzük meg.
<br />
Az adatkezelés jogalapja
<br />
Az, hogy hozzánk fordul-e garanciális ügyintézés esetén az Ön önkéntes döntése, azonban ha hozzánk fordul, a fogyasztóvédelemrő l szóló 1997. évi CLV. törvény 17/A. § (7) bekezdése alapján 5 évig köteles vagyunk a panaszt megő rizni [Rendelet 6. cikk (1) bekezdés c) pont szerinti adatkezelés]
<br /><br /><br />
Egyéb fogyasztóvédelmi panaszok kezelése
<br /><br />
Az adatkezelési folyamat a fogyasztóvédelmi panaszok kezelése érdekében történik. Amennyiben Ön panasszal fordult hozzánk, akkor az adatkezelés és az adatok megadása elengedhetetlen.
<br /><br />
Kezelt adatok
<br /><br />
Vásárló neve, telefonszáma, email címe, panasz tartalma.
<br />
Az adatkezelés időtartama
<br />
A garanciális panaszokat a fogyasztóvédelemről szóló törvény alapján 5 évig őrizzük meg.
<br />
Az adatkezelés jogalapja
<br />
Az, hogy hozzánk fordul-e panasszal az Ön önkéntes döntése, azonban ha hozzánk fordul, a fogyasztóvédelemrő l szóló 1997. évi CLV. törvény 17/A. § (7) bekezdése alapján 5 évig köteles vagyunk a panaszt megő rizni [Rendelet 6. cikk (1) bekezdés c) pont szerinti adatkezelés].
<br /><br /><br />
A hozzájárulás igazolhatóságával kapcsolatban kezelt adatok
<br /><br />
A regisztráció, megrendelés, hírlevélre történő feliratkozás során az informatikai rendszer eltárolja a hozzájárulással kapcsolatos informatikai adatokat a későbbi bizonyíthatóság
 
érdekében.
<br /><br />
Kezelt adatok
<br /><br />
A hozzájárulás időpontja és az érintett IP címe.
<br />
Az adatkezelés időtartama
<br />
A jogszabályi előírások miatt a hozzájárulást később igazolni kell tudni, ezért az adattárolás időtartama az adatkezelés megszűnését követő elévülési ideig kerül tárolásra.
<br />
Az adatkezelés jogalapja
<br />
A Rendelet 7. cikk (1) bekezdése írja elő ezt a kötelezettséget. [Rendelet 6. cikk (1) bekezdés c) pont szerinti adatkezelés]
<br /><br /><br />
Marketing célú adatkezelések Remarketing<br /><br />
Az adatkezelés mint remarketing tevékenység cookie-k segítségével valósul meg.<br />
<br /><br />
Kezelt adatok
<br /><br />
A cookie tájékoztatóban meghatározott cookiek által kezelt adatok.
<br />
Az adatkezelés időtartama
<br />
Az adott cookie adattárolási idötartama, bővebb információ elérhető itt:
<br />
Google általános cookie tájékoztató: https://www.google.com/policies/technologies/types/
<br />
Google	Analitycs	tájékoztató: https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=hu
<br />
Facebook	tájékoztató:
https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
<br />
Az adatkezelés jogalapja
<br />
Az Ön önkéntes hozzájárulása, amit a honlap használatával ad meg Adatkezelő számára [Rendelet 6. cikk (1) bekezdés a) pont szerinti adatkezelés].
<br /><br /><br />
Nyereményjáték<br />
Az adatkezelési folyamat a nyereményjáték lebonyolítása érdekében történik.
<br /><br />
Kezelt adatok<br /><br />

Név, email cím, telefonszám.
<br />
Az adatkezelés időtartama
<br />
Az adatok a nyereményjáték lezárását követően törlésre kerülnek, kivéve a nyertes adatai, amelyeket a számvitelről szóló törvény alapján 8 évig köteles az Adatkezelő megőrizni.
<br />
Az adatkezelés jogalapja
<br />

Az Ön önkéntes hozzájárulása, amit a honlap használatával ad meg Adatkezelő számára. [Rendelet 6. cikk (1) bekezdés a) pont szerinti adatkezelés]
<br /><br /><br />
További adatkezelések
<br /><br />
Amennyiben az Adatkezelő további adatkezelést kíván végezni, akkor előzetes tájékoztatatást nyújt az adatkezelés lényeges körülményeiről (adatkezelés jogszabályi háttere és jogalapja, az adatkezelés célja, a kezelt adatok köre, az adatkezelés időtartama).
<br />
Tájékoztatjuk Önt arról, hogy a hatóságok törvényi felhatalmazáson alapuló, írásbeli adatkéréseit az Adatkezelőnek teljesítenie kell. Az Adatkezelő az adattovábbításokról az Infotv.
15. § (2)-(3) bekezdésével összhangban nyilvántartást vezet (mely hatóságnak, milyen személyes adatot, milyen jogalapon, mikor továbbított az Adatkezelő), amelynek tartalmáról kérésére az Adatkezelő tájékoztatást nyújt, kivéve, ha a tájékoztatását törvény kizárja.
<br />
Adatfeldolgozó igénybevételéről és az adatkezeléshez kapcsolódó tevékenységükről<br />
A személyes adatok tárolására irányuló adatfeldolgozás
<br />
Az adatfeldolgozó megnevezése: C - Host Kft
<br />
E-mail cím: info@nethely.hu
<br />
Székhely: 1115 Budapest, Halmi utca 29.
<br />
Az Adatfeldolgozó az Adatkezelővel kötött szerződés alapján a személyes adatok tárolását végzi. A személyes adatok megismerésére nem jogosult.
<br /><br /><br />
Az adatkezelés során Önt megillető jogok
<br /><br />
Az adatkezelés időtartamán belül Önt a Rendelet előírásai szerint az alábbi jogok illetik meg:
<br />
a hozzájárulás visszavonásának joga<br />
személyes adatokhoz és az adatkezeléssel kapcsolatos információkhoz való hozzáférés helyesbítéshez való jog<br />
adatkezelés korlátozása, törléshez való jog tiltakozáshoz való jog hordozhatósághoz való jog.<br />
<br />
Amennyiben Ön jogaival élni kíván, az az Ön azonosításával jár együtt, valamint az Adatkezelőnek Önnel szükségszeren kommunikálnia kell. Ezért az azonosítás érdekében személyes adatok megadására lesz szükség (de az azonosítás csak olyan adaton alapulhat, amelyet Adatkezelő egyébként is kezel Önről), valamint az Adatkezelő email fiókjában elérhetőek lesz az Ön adatkezeléssel kapcsolatos panasza a jelen tájékoztatóban, a panaszokkal kapcsolatban megjelölt időtartamon belül. Amennyiben Ön vásárlónk volt és panaszügyintézés, vagy garanciális ügyintézés érdekében szeretné magát azonosítani, az azonosításhoz kérjük adja meg rendelési azonosítóját is. Ennek felhasználásával Önt, mint vásárlót is be tudjuk azonosítani.
<br />
Az adatkezeléssel kapcsolatos panaszokat legkésőbb 30 napon belül válaszolja meg Adatkezelő.
<br /><br /><br />
A hozzájárulás visszavonásának joga
<br /><br />
Ön bármikor jogosult az adatkezeléshez adott hozzájárulást visszavonni, ilyen esetben a megadott adatokat rendszereinkből töröljük. Kérjük azonban vegye figyelembe, hogy a még nem teljesített megrendelés esetén a visszavonás azzal a következménnyel járhat, hogy nem tudjuk Ön felé teljesíteni a kiszállítást. Emellett, ha a vásárlás már megvalósult, a számviteli előírások alapján a számlázással kapcsolatos adatokat nem törölhetjük rendszereinkből, valamint ha Önnek tartozása áll fenn felénk, akkor a követelés behajtásával kapcsolatos jogos érdek alapján adatait a hozzájárulás visszavonása esetén is kezelhetjük.
<br /><br /><br />
A személyes adatokhoz való hozzáférés
<br /><br />
Ön jogosult arra, hogy az Adatkezelőtől visszajelzést kapjon arra vonatkozóan, hogy személyes adatainak kezelése folyamatban van-e, és ha adatkezelés folyamatban van, jogosult arra, hogy:
<br />
a kezelt személyes adatokhoz hozzáférést kapjon és<br />
a következő információkról az Adatkezelő tájékoztassa: az adatkezelés céljai;<br />
az Önről kezelt személyes adatok kategóriái;<br />
információ azon címzettekről vagy címzettek kategóriáiról, akikkel, illetve amelyekkel a személyes adatokat Adatkezelő közölte vagy közölni fogja;<br />
a személyes adatok tárolásának tervezett időtartama, vagy ha ez nem lehetséges, ezen időtartam meghatározásának szempontjai;<br />
az Ön azon joga, hogy kérelmezheti az Adatkezelőtől az Önre vonatkozó személyes adatok helyesbítését, törlését vagy kezelésének korlátozását, és jogos érdeken alapuló adatkezelés esetén tiltakozhat az ilyen személyes adatok
kezelése ellen;<br />
a felügyeleti hatósághoz címzett panasz benyújtásának joga;<br />
ha az adatokat nem Öntől gyűjtötték be, a forrásukra vonatkozó minden elérhető információ;<br />
az automatizált döntéshozatal tényéről (ha alkalmazott ilyen eljárás), ideértve a profilalkotást is, valamint legalább ezekben az esetekben az alkalmazott logikára és arra vonatkozóan érthető információkat, hogy az ilyen adatkezelés milyen jelentőséggel, és Önre nézve milyen várható következményekkel bír.
<br />
A jog gyakorlásának célja az adatkezelés jogszerűségének megállapítására és ellenőrzésére irányulhat, ezért többszöri tájékoztatás kérés esetén Adatkezelő méltányos költségtérítést számolhat fel a tájékoztatás teljesítéséért cserébe.
<br />
A személyes adatokhoz való hozzáférést Adatkezelő úgy biztosítja, hogy az Ön azonosítását követően emailben juttatja el Önhöz a kezelt személyes adatokat és az információkat. Amennyiben regisztrációval rendelkezik, akkor a hozzáférést úgy biztosítjuk, hogy a felhasználói fiókjába belépve tudja az Önről kezelt személyes adatokat megtekinteni és ellenőrizni.
<br />
Kérjük, hogy kérelmében jelölje meg, hogy a személyes adatokhoz kér hozzáférést, vagy az adatkezeléssel kapcsolatos információkat kéri.
<br /><br /><br />
Helyesbítéshez való jog
<br /><br />
Ön jogosult arra, hogy kérésére Adatkezelő késedelem nélkül helyesbítse az Önre vonatkozó pontatlan személyes adatokat.
<br /><br /><br />
Adatkezelés korlátozásához való jog
<br /><br />
Ön jogosult arra, hogy kérésére Adatkezelő korlátozza az adatkezelést, ha az alábbiak valamelyike teljesül:
<br />
Ön vitatja a személyes adatok pontosságát, ez esetben a korlátozás arra az időtartamra vonatkozik, amely lehetővé teszi, hogy Adatkezelő ellenőrizze a személyes adatok pontosságát, ha a pontos adat azonnal megállapítható, akkor nem kerül sor a korlátozásra;
<br />

az adatkezelés jogellenes, de Ön ellenzi az adatok törlését bármely okból (például azért mert az Ön számára jogi igény érvényesítése miatt fontosak az adatok), ezért nem az adatok törlését kéri, hanem ehelyett kéri azok felhasználásának korlátozását;
<br />
az Adatkezelőnek már nincs szüksége a személyes adatokra a megjelölt adatkezelés céljából, de Ön igényli azokat jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez; vagy
<br />
Ön tiltakozott az adatkezelés ellen, de Adatkezelő jogos érdeke is megalapozhatja az adatkezelést, ez esetben amíg megállapításra nem kerül, hogy Adatkezelő jogos indokai elsőbbséget élveznek-e az Ön jogos indokaival szemben, az adatkezelést korlátozni
kell.
<br /><br />
Ha az adatkezelés korlátozás alá esik, az ilyen személyes adatokat a tárolás kivételével csak az érintett hozzájárulásával, vagy jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez, vagy más természetes vagy jogi személy jogainak védelme érdekében, vagy az Unió, illetve valamely tagállam fontos közérdekéből lehet kezelni.
<br />
Adatkezelő az adatkezelés korlátozásának feloldásáról előzetesen (legalább a korlátozás feloldását megelőző 3 munkanappal) tájékoztatja Önt.
<br /><br /><br />
Törléshez - elfeledtetéshez való jog
<br /><br />
Ön jogosult arra, hogy Adatkezelő indokolatlan késedelem nélkül törölje az Önre vonatkozó személyes adatokat, ha az alábbi indokok valamelyike fennáll:
<br />
a személyes adatokra már nincs szükség abból a célból, amelyből azokat Adatkezelő gyűjtötte vagy más módon kezelte;
<br />Ön visszavonja hozzájárulását és az adatkezelésnek nincs más jogalapja;
<br />Ön tiltakozik a jogos érdeken alapuló adatkezelés ellen, és nincs elsőbbséget élvező jogszerű ok (azaz jogos érdek) az adatkezelésre,
<br />a személyes adatokat Adatkezelő jogellenesen kezelte és ez a panasz alapján megállapítást nyert,
<br />a személyes adatokat az Adatkezelőre alkalmazandó uniós vagy tagállami jogban előírt jogi kötelezettség teljesítéséhez törölni kell.
<br /><br />
Ha az Adatkezelő bármely jogszerű oknál fogva nyilvánosságra hozta az Önről kezelt személyes adatot, és bármely fent megjelölt okból törölni köteles azt, az elérhető technológia és a megvalósítás költségeinek figyelembevételével köteles megtenni az észszerűen elvárható lépéseket – ideértve technikai intézkedéseket – annak érdekében, hogy tájékoztassa az adatokat kezelő más adatkezelőket, hogy Ön kérelmezte a szóban forgó személyes adatokra mutató linkek vagy e személyes adatok másolatának, illetve másodpéldányának törlését.
<br /><br />
A törlés nem alkalmazandó, amennyiben az adatkezelés szükséges:
<br /><br />
a véleménynyilvánítás szabadságához és a tájékozódáshoz való jog gyakorlása céljából;
<br />a személyes adatok kezelését előíró, az adatkezelőre alkalmazandó uniós vagy tagállami jog szerinti kötelezettség teljesítése (ilyen eset a számlázás keretében megvalósuló adatkezelés, mivel a számla megőrzését jogszabály írja elő), illetve közérdekből vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlása keretében végzett feladat végrehajtása céljából;
<br />jogi igények előterjesztéséhez, érvényesítéséhez, illetve védelméhez (pl.: ha Adatkezelőnek Ön felé követelése áll fenn és azt még nem teljesítette, vagy fogyasztói, adatkezelési panasz intézése van folyamatban).
<br /><br /><br />
Tiltakozáshoz való jog
<br />
Ön jogosult arra, hogy a saját helyzetével kapcsolatos okokból bármikor tiltakozzon személyes adatainak jogos érdeken alapuló kezelése ellen. Ebben az esetben Adatkezelő a személyes
<br />
adatokat nem kezelheti tovább, kivéve, ha az bizonyítja, hogy az adatkezelést olyan kényszerítő erejű jogos okok indokolják, amelyek elsőbbséget élveznek az Ön érdekeivel, jogaival és szabadságaival szemben, vagy amelyek jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez kapcsolódnak.
<br />
Ha a személyes adatok kezelése közvetlen üzletszerzés érdekében történik, Ön jogosult arra, hogy bármikor tiltakozzon az Önre vonatkozó személyes adatok e célból történő kezelése ellen, ideértve a profilalkotást is, amennyiben az a közvetlen üzletszerzéshez kapcsolódik. Ha Ön tiltakozik a személyes adatok közvetlen üzletszerzés érdekében történő kezelése ellen, akkor a személyes adatok a továbbiakban e célból nem kezelhetők.
<br /><br /><br />
Hordozhatósághoz való jog
<br /><br />
Amennyiben az adatkezelés automatizált módon valósul meg, vagy ha az adatkezelés az Ön önkéntes hozzájárulásán alapul, Önnek joga van arra, hogy kérje Adatkezelőtől, hogy az Ön által az Adatkezelő részére megadott adatokat megkapja, amit Adatkezelő xml, JSON, vagy csv formátumban bocsát az Ön rendelkezésére, ha ez technikailag megvalósítható, akkor kérheti, hogy az Adatkezelő az adatokat ebben a formában más adatkezelő számára továbbítsa.
<br /><br /><br />

Automatizált döntéshozatal
<br /><br />
Ön jogosult arra, hogy ne terjedjen ki Önre az olyan, kizárólag automatizált adatkezelésen alapuló döntés hatálya (ideértve a profilalkotást is), amely Önre nézve joghatással járna vagy Önt hasonlóképpen jelentős mértékben érintené. Ezekben az esetekben Adatkezelő köteles megfelelő intézkedéseket tenni az érintett jogainak, szabadságainak és jogos érdekeinek védelme érdekében, ideértve az érintettnek legalább azt a jogát, hogy az adatkezelő részéről emberi beavatkozást kérjen, álláspontját kifejezze, és a döntéssel szemben kifogást nyújtson be.
<br /><br />
A fentiek nem alkalmazandóak abban az esetben, ha a döntés:
<br />
Ön és az adatkezelő közötti szerződés megkötése vagy teljesítése érdekében szükséges;
<br />meghozatalát az adatkezelőre alkalmazandó olyan uniós vagy tagállami jog teszi lehetővé, amely Ön jogainak és szabadságainak, valamint jogos érdekeinek védelmét szolgáló megfelelő intézkedéseket is megállapít; vagy
<br />az Ön kifejezett hozzájárulásán alapul.
<br /><br /><br />
Adatvédelmi nyilvántartásba történő bejelentkezés
<br /><br />
Az Infotv. rendelkezései értelmében az Adatkezelőnek bizonyos adatkezeléseit be kellett jelentenie az adatvédelmi nyilvántartásba. Ez a bejelentési kötelezettség 2018. május 25. napjával megszűnt.
<br /><br />
Adatbiztonsági intézkedések
<br /><br />
Az Adatkezelő kijelenti, hogy megfelelő biztonsági intézkedéseket hozott annak érdekében, hogy a személyes adatok védje a jogosulatlan hozzáférés, megváltoztatás, továbbítás, nyilvánosságra hozatal, törlés vagy megsemmisítés, valamint a véletlen megsemmisülés és sérülés, továbbá az alkalmazott technika megváltozásából fakadó hozzáférhetetlenné válás ellen.
<br />
az Adatkezelő a szervezeti és technikai lehetőségekhez képest mindent megtesz annak érdekében, hogy adatfeldolgozói is megfelelő adatbiztonsági intézkedéseket tegyenek, amikor az Ön személyes adataival dolgoznak.
<br /><br />
Jogorvoslati lehetőségek
<br />
Amennyiben Ön szerint az Adatkezelő megsértette valamely, az adatkezelésre vonatkozó törvényi rendelkezést, vagy nem teljesítette valamely kérelmét, akkor vélelmezett jogellenes adatkezelés megszüntetése érdekében a Nemzeti Adatvédelmi és Információszabadság Hatóság vizsgálati eljárását kezdeményezheti (levelezési cím: 1530 Budapest, Pf.: 5., e-mail: ugyfelszolgalat@naih.hu).
<br />
Tájékoztatjuk emellett arról is, hogy az adatkezelésre vonatkozó törvényi rendelkezések megsértése esetén, vagy ha az Adatkezelő nem teljesítette valamely kérelmét, akkor az Adatkezelővel szemben polgári pert indíthat bíróság előtt.
<br /><br />
Adatkezelési tájékoztató módosítása
<br /><br />
Az Adatkezelő fenntartja a jogot, hogy jelen adatkezelési tájékoztatót az adatkezelés célját és jogalapját nem érintő módon módosítsa. A honlap módosítás hatálybalépését követő használatával elfogadja a módosított adatkezelési tájékoztatót.
<br />
Amennyiben az Adatkezelő a gyűjtött adatokkal kapcsolatban a gyűjtésük céljától eltérő célból további adatkezelést kíván végezni a további adatkezelést megelőzően tájékoztatja Önt az adatkezelés céljáról és az alábbi információkról:
<br />
a személyes adatok tárolásának időtartamáról, vagy ha ez nem lehetséges, akkor az időtartam meghatározásának szempontjairól;
<br />azon jogáról, hogy kérelmezheti az Adatkezelőtől az Önre vonatkozó személyes adatokhoz való hozzáférést, azok helyesbítését, törlését vagy kezelésének korlátozását, és jogos érdeken alapuló adatkezelés esetén tiltakozhat a személyes adatok kezelése ellen, valamint a hozzájáruláson, vagy szerződéses kapcsolaton alapuló adatkezelés esetén kérheti az adathordozhatósághoz való jog biztosítását;
<br />hozzájáruláson alapuló adatkezelés esetén arról, hogy a hozzájárulást Ön bármikor visszavonhatja,
<br />a felügyeleti hatósághoz címzett panasz benyújtásának jogáról;
<br />arról, hogy a személyes adat szolgáltatása jogszabályon vagy szerződéses kötelezettségen alapul vagy szerződés kötésének előfeltétele-e, valamint hogy az Ön köteles-e a személyes adatokat megadni, továbbá hogy milyen lehetséges következményeikkel járhat az adatszolgáltatás elmaradása;
<br />az automatizált döntéshozatal tényéről (ha alkalmazott ilyen eljárás), ideértve a profilalkotást is, valamint legalább ezekben az esetekben az alkalmazott logikára és arra
<br />
vonatkozóan érthető információkat, hogy az ilyen adatkezelés milyen jelentőséggel, és Önre nézve milyen várható következményekkel bír.
<br />
Az adatkezelés csak ezt követően kezdődhet meg, amennyiben az adatkezelés jogalapja hozzájárulás, az adatkezeléshez a tájékoztatáson felül Önnek hozzá is kell járulnia.
<br />
A jelen dokumentum a webshop működésével kapcsolatban minden releváns adatkezelési információt tartalmaz az Európai Unió 2016/679 számú Általános Adatvédelmi Rendelete (a továbbiakban: Rendelet. GDPR) és a 2011. évi CXII. tv. (a továbbiakban: Infotv.) alapján.
<br /><br />

Postán maradó és postapontos kézbesítés<br /><br />
Felhívjuk a figyelmét, hogy a Magyar Posta Zrt. a mindenkor hatályos adatkezelési tájékoztatóban foglaltak szerint azonosítja a címzettet, ezért adott esetben az Ön személyes adatainak megadását kérheti a kézbesítéskor postai illetve postapontos átvételnél.

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

export default Sixth