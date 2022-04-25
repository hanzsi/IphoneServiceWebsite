import React, {useState, useRef} from 'react'
import "./Second.css"
import logo from "../../assets/logo1.png";
import igenyles from "../../assets/igenyles.png";
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri'; 
import { HiArrowSmDown } from 'react-icons/hi';
import open from "../../assets/24.png";
import guarantee from "../../assets/garancia.png"
import success from "../../assets/org.png"
import express from "../../assets/express.jpg"

import emailjs from 'emailjs-com';



const Second = () => {

    const form = useRef();

    
    const sendEmail = (e) => {
        setSent(true)
      e.preventDefault();
     
      emailjs.sendForm('default_service', 'template_f74a9d1', e.target, 'xkRjumgr0RursUviO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        
    };
    
    
    const rand = 100000 + Math.floor((Math.random() * (999999-100000)));


    //showMenu alap értéke false
    const[showMenu, setShowMenu] = useState(false)

    //Ha kattintva van az ikon (onClick a divben), akkor állítsa át a showMenut az ellentétre
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const [sent, setSent] = useState(false)
 
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)

    const [selected, setSelected] = useState("Válassz telefont")
    const [selected2, setSelected2] = useState("Javítás")


    const[serviceCheckboxSelected, setServiceCheckboxSelected] = useState(false)
    const[postCheckboxSelected, setPostCheckboxSelected] = useState(false)

    const handlePostCheckbox = event =>{
        setPostCheckboxSelected(true)
        setServiceCheckboxSelected(false)
    }

    const handleServiceCheckbox = event =>{
        setServiceCheckboxSelected(false)
        setPostCheckboxSelected(true)
    }



    

    const options = ['iPhone 5', 'iPhone 5s', 'iPhone 6', 'iPhone 6s', 'iPhone 6s plus', 'iPhone 7',
    'iPhone 7 plus', 'iPhone 8', 'iPhone 8 plus', 'iPhone SE 2020', 'iPhone X', 'iPhone XS',
    'iPhone XS Max', 'iPhone XR', 'iPhone 11'
    ]
    const options5 = ['iPhone 5 kijelző csere (gyári) 14.999 Ft - fekete',
        'iPhone 5 kijelző csere (gyári) 14.999 Ft - fehér',
        'iPhone 5 akkumulátor csere 7.499 Ft',
        'iPhone 5 beszédhangszóró csere 3.999 Ft',
        'iPhone 5 előlapi kamera csere 4.999 Ft',
        'iPhone 5 hátlapi kamera csere 5.499 Ft',
        'iPhone 5 bekapcsoló gomb csere 6.499 Ft',
        'iPhone 5 töltő csatlakozó csere 6.499 Ft',
        'iPhone 5 ház csere 14.999 Ft',
        'iPhone 5 Home gomb csere 6.999 Ft',
    ]        
    const options5s = ['iPhone 5s kijelző csere (gyári) 14.999 Ft - fekete',
        'iPhone 5s kijelző csere (gyári) 14.999 Ft - fehér',
        'iPhone 5s akkumulátor csere 7.499 Ft',
        'iPhone 5s beszédhangszóró csere 4.999 Ft',
        'iPhone 5s előlapi kamera csere 4.999 Ft',
        'iPhone 5s hátlapi kamera csere 5.499 Ft',
        'iPhone 5s bekapcsoló gomb csere 6.499 Ft',
        'iPhone 5s töltő csatlakozó csere 6.499 Ft',
        'iPhone 5s ház csere 14.999 Ft',
        'iPhone 5s Home gomb csere 7.499 Ft'
    ]
    const options6 = ['iPhone 6 kijelző csere (gyári) 15.999 Ft - fekete',
        'iPhone 6 kijelző csere (gyári) 15.999 Ft - fehér',
        'iPhone 6 akkumulátor csere 7.499 Ft',
        'iPhone 6 beszédhangszóró csere 5.499 Ft',
        'iPhone 6 előlapi kamera csere 4.999 Ft',
        'iPhone 6 hátlapi kamera csere 7.499 Ft',
        'iPhone 6 bekapcsoló gomb csere 8.499 Ft',
        'iPhone 6 töltő csatlakozó csere 8.499 Ft',
        'iPhone 6 ház csere 17.999 Ft',
        'iPhone 6 Home gomb csere 7.999 Ft'
    ]        
    const options6s = [
        'iPhone 6s kijelző csere (gyári) 18.999 Ft - fekete',
        'iPhone 6s kijelző csere (gyári) 18.999 Ft - fehér',
        'iPhone 6s akkumulátor csere 9.499 Ft',
        'iPhone 6s beszédhangszóró csere 5.499 Ft',
        'iPhone 6s előlapi kamera csere 6.999 Ft',
        'iPhone 6s hátlapi kamera csere 8.499 Ft',
        'iPhone 6s bekapcsoló gomb csere 9.499 Ft',
        'iPhone 6s töltő csatlakozó csere 8.499 Ft',
        'iPhone 6s ház csere 15.999 Ft',
        'iPhone 6s Home gomb csere 8.999 Ft'
    ]
    const options6splus = [
        'iPhone 6s plus kijelző csere (gyári) 24.999 Ft - fekete',
        'iPhone 6s plus kijelző csere (gyári) 24.999 Ft - fehér',
        'iPhone 6s plus akkumulátor csere 13.499 Ft',
        'iPhone 6s plus beszédhangszóró csere 8.499 Ft',
        'iPhone 6s plus előlapi kamera csere 15.999 Ft',
        'iPhone 6s plus hátlapi kamera csere 16.499 Ft',
        'iPhone 6s plus bekapcsoló gomb csere 13.499 Ft',
        'iPhone 6s plus töltő csatlakozó csere 14.499 Ft',
        'iPhone 6s plus ház csere 24.999 Ft',
        'iPhone 6s plus Home gomb csere 8.999 Ft'
    ]
    const options7 = [
        'iPhone 7 kijelző csere (gyári) 20.999 Ft - fekete',
        'iPhone 7 kijelző csere (gyári) 20.999 Ft - fehér',
        'iPhone 7 akkumulátor csere 13.499 Ft',
        'iPhone 7 beszédhangszóró csere 13.499 Ft',
        'iPhone 7 előlapi kamera csere 11.999 Ft',
        'iPhone 7 hátlapi kamera csere 16.499 Ft',
        'iPhone 7 bekapcsoló gomb csere 11.499 Ft',
        'iPhone 7 töltő csatlakozó csere 12.499 Ft',
        'iPhone 7 ház csere 29.999 Ft',
        'iPhone 7 rezgőmotor csere 9.999 Ft'
    ]
    const options7plus = [
        'iPhone 7 plus kijelző csere (gyári) 24.999 Ft - fekete',
        'iPhone 7 plus kijelző csere (gyári) 24.999 Ft - fehér',
        'iPhone 7 plus akkumulátor csere 14.499 Ft',
        'iPhone 7 plus beszédhangszóró csere 13.499 Ft',
        'iPhone 7 plus előlapi kamera csere 13.999 Ft',
        'iPhone 7 plus bekapcsoló gomb csere 16.499 Ft',
        'iPhone 7 plus töltő csatlakozó csere 17.499 Ft',
        'iPhone 7 plus ház csere 24.999 Ft',
        'iPhone 7 plus rezgőmotor csere 14.999 Ft'
    ]
    const options8 = [
        'iPhone 8 kijelző csere (gyári) 23.999 Ft - fekete',
        'iPhone 8 kijelző csere (gyári) 23.999 Ft - fehér',
        'iPhone 8 akkumulátor csere 13.499 Ft',
        'iPhone 8 beszédhangszóró csere 13.499 Ft',
        'iPhone 8 előlapi kamera csere 13.999 Ft',
        'iPhone 8 hátlapi kamera csere 28.499 Ft',
        'iPhone 8 bekapcsoló gomb csere 15.499 Ft',
        'iPhone 8 töltő csatlakozó csere 15.499 Ft',
        'iPhone 8 ház csere 25.999 Ft',
        'iPhone 8 rezgőmotor csere 15.999 Ft'
    ]
    const options8plus = [
        'iPhone 8 plus kijelző csere (gyári) 28.999 Ft - fekete',
        'iPhone 8 plus kijelző csere (gyári) 28.999 Ft - fehér',
        'iPhone 8 plus akkumulátor csere 15.499 Ft',
        'iPhone 8 plus beszédhangszóró csere 13.499 Ft',
        'iPhone 8 plus előlapi kamera csere 13.999 Ft',
        'iPhone 8 plus hátlapi kamera csere 35.499 Ft',
        'iPhone 8 plus bekapcsoló gomb csere 15.499 Ft',
        'iPhone 8 plus töltő csatlakozó csere 15.499 Ft',
        'iPhone 8 plus ház csere 32.999 Ft',
        'iPhone 8 plus rezgőmotor csere 17.999 Ft'
    ]
    const optionsSE2020 = [
        'iPhone SE 2020 kijelző csere (gyári) 23.999 Ft - fekete',
        'iPhone SE 2020 kijelző csere (gyári) 23.999 Ft - fehér',
        'iPhone SE 2020 akkumulátor csere 15.499 Ft',
        'iPhone SE 2020 beszédhangszóró csere 13.499 Ft',
        'iPhone SE 2020 előlapi kamera csere 13.999 Ft',
        'iPhone SE 2020 hátlapi kamera csere 28.499 Ft',
        'iPhone SE 2020 bekapcsoló gomb csere 15.499 Ft',
        'iPhone SE 2020 töltő csatlakozó csere 15.499 Ft',
        'iPhone SE 2020 ház csere 35.999 Ft',
        'iPhone SE 2020 rezgőmotor csere 15.999 Ft'
    ]
    const optionsX = [
        'iPhone X kijelző csere (gyári) 65.999 Ft',
        'iPhone X akkumulátor csere 17.499 Ft',
        'iPhone X beszédhangszóró csere 18.499 Ft',
        'iPhone X előlapi kamera csere 33.999 Ft',
        'iPhone X hátlapi kamera csere 35.499 Ft',
        'iPhone X bekapcsoló gomb csere 25.499 Ft',
        'iPhone X töltő csatlakozó csere 18.499 Ft',
        'iPhone X ház csere 32.999 Ft',
        'iPhone X rezgőmotor csere 19.999 Ft'
    ]
    const optionsXS = [
        'iPhone XS kijelző csere (gyári) 55.999 Ft',
        'iPhone XS akkumulátor csere 19.499 Ft',
        'iPhone XS beszédhangszóró csere 16.499 Ft',
        'iPhone XS előlapi kamera csere 33.999 Ft',
        'iPhone XS hátlapi kamera csere 35.499 Ft',
        'iPhone XS bekapcsoló gomb csere 25.499 Ft',
        'iPhone XS töltő csatlakozó csere 21.499 Ft',
        'iPhone XS ház csere 36.999 Ft',
        'iPhone XS rezgőmotor csere 23.999 Ft'
    ]
    const optionsXSmax = [
        'iPhone XS Max kijelző csere (gyári) 75.999 Ft',
        'iPhone XS Max akkumulátor csere 23.499 Ft',
        'iPhone XS Max beszédhangszóró csere 16.499 Ft',
        'iPhone XS Max előlapi kamera csere 33.999 Ft',
        'iPhone XS Max hátlapi kamera csere 36.499 Ft',
        'iPhone XS Max bekapcsoló gomb csere 23.499 Ft',
        'iPhone XS Max töltő csatlakozó csere 21.499 Ft',
        'iPhone XS Max ház csere 58.999 Ft',
        'iPhone XS Max rezgőmotor csere 23.999 Ft'
    ]
    const optionsXR = [
        'iPhone XR kijelző csere (gyári) 39.999 Ft',
        'iPhone XR akkumulátor csere 18.499 Ft',
        'iPhone XR beszédhangszóró csere 18.499 Ft',
        'iPhone XR előlapi kamera csere 33.999 Ft',
        'iPhone XR hátlapi kamera csere 35.499 Ft',
        'iPhone XR bekapcsoló gomb csere 25.499 Ft',
        'iPhone XR töltő csatlakozó csere 18.499 Ft',
        'iPhone XR ház csere 35.999 Ft',
        'iPhone XR rezgőmotor csere 19.999 Ft'
    ]
    const options11 = [
        'iPhone 11 kijelző csere (gyári) 44.999 Ft',
        'iPhone 11 akkumulátor csere 25.499 Ft',
        'iPhone 11 beszédhangszóró csere 18.499 Ft',
        'iPhone 11 előlapi kamera csere 25.999 Ft',
        'iPhone 11 hátlapi kamera csere 30.499 Ft',
        'iPhone 11 bekapcsoló gomb csere 20.499 Ft',
        'iPhone 11 töltő csatlakozó csere 18.499 Ft',
        'iPhone 11 ház csere 35.999 Ft',
        'iPhone 11 rezgőmotor csere 40.999 Ft'
    ]

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

            <div id='selection-header'>
                <div className='container'>
                    <div>
                        <p className='selection-large-text'>Válaszd ki a készüléket és a javítás típusát!</p>
                        <p className='selection-small-text'>Kérdés esetén keress minket az alábbi telefonszámon +36203284934</p>
                    </div>
                </div>
            </div>

            <div id="line-header">
                
            </div>

            <section className='container'>
                <div className='dropdowns-beside'>
                    <div className='dropdown'>

                        <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
                            {selected} <HiArrowSmDown/>
                        </div>

                        {isActive && (
                        <div className='dropdown-content'>
                            {options.map((option) => (
                                <div onClick={(e) => {
                                    setSelected(option)
                                    setIsActive(false)
                                    }}
                                    className='dropdown-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}

                    </div>


                    { selected == 'iPhone 5' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {options5.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }

                    { selected == 'iPhone 5s' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {options5s.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone 6' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {options6.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone 6s' && 
                    <div className='dropdown2'>
                    <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                        {selected2} <HiArrowSmDown/>
                    </div>
                    {isActive2 && (
                    <div className='dropdown2-content'>
                        {options6s.map((option) => (
                            <div onClick={(e) => {
                                setSelected2(option)
                                setIsActive2(false)
                                }}
                                className='dropdown2-item'>
                            {option}
                            </div>
                        ))}
                    </div>
                    )}
                    </div>
                    }  

                    { selected == 'iPhone 6s plus' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {options6splus.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone 7' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {options7.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone 7 plus' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {options7plus.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone 8' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {options8.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone 8 plus' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {options8plus.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone SE 2020' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {optionsSE2020.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone X' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {optionsX.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone XS' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {optionsXS.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone XS Max' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {optionsXSmax.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone XR' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {optionsXR.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    { selected == 'iPhone 11' && 
                        <div className='dropdown2'>
                        <div className='dropdown2-btn' onClick={(e) => setIsActive2(!isActive2)}>
                            {selected2} <HiArrowSmDown/>
                        </div>
                        {isActive2 && (
                        <div className='dropdown2-content'>
                            {options11.map((option) => (
                                <div onClick={(e) => {
                                    setSelected2(option)
                                    setIsActive2(false)
                                    }}
                                    className='dropdown2-item'>
                                {option}
                                </div>
                            ))}
                        </div>
                        )}
                        </div>
                    }  

                    

                </div>
            </section>

            <section className='container'>
                <div className='request-div1'>
                        <div className='form-div'>
                            <form ref={form} onSubmit={sendEmail}>
                                <label className='name-label'>
                                    <p>*Név: </p><input type="text" id="name" placeholder='Teljes neved...' name='name'  required/>
                                </label><br/>
                                <label className='email-label'>
                                    <p>*Email: </p><input type="email" placeholder='Az email címed...' name='email'  required/>
                                </label>
                                <label className='phone-label'>
                                    <p>*Tel.: </p><input type="text" placeholder='Telefonszámod...' name='phonenumber' required/>
                                </label>
                                <label className='textarea-label'>
                                    <textarea rows="4" cols="41" placeholder='Megjegyzés' name='message'>
                                        
                                    </textarea>
                                </label>
                                <label className='checkbox-label'>
                                    Postával <input onChange={handlePostCheckbox} type="radio" name="post" value="Postai úton" />
                                </label>
                                <label className='checkbox-label'>
                                    Szervizfutárral <input onChange={handleServiceCheckbox} type="radio" name="post" value="Szervizfutárral" />
                                </label>
                                <input type="hidden" value={selected} name='iphone'/>
                                <input type="hidden" value={selected2} name='iphonerepair'/>
                                <input type="hidden" value={rand} name='worksheet'/>
                                
                                {postCheckboxSelected && (
                                <div>
                                    <label className='address-label'>
                                        <p>*Cím: </p><input type="text" placeholder='Kiszállítás esetén...' name="address" required/>
                                    </label>
                                    <div className='post-text-div'>
                                        <p>Postai úton való beküldéshez kérem tájékozodjon az alábbi <a target="_blank" href='/faq'>linken</a>.</p>
                                    </div>
                                </div>
                                )
                                }
                                <div className='button-div'>
                                    <input type="submit" class='btn-dark' value="IGÉNYLÉS LEADÁSA"></input>
                                </div>
                                {sent && (
                                    <p className='small-middle'>Üzenetét elküldtük!</p>
                                )}
                            </form> 
                        </div>
                    
                    <div className='star-small-div'>
                        <p><span>*</span> A mező kitöltése kötelező</p>
                    </div>
                </div>
                 <div className='request-div2'>
                    <p className='header-repair-text'>
                        Kiválasztott javítás:
                    </p>
                    <p className='selected-text'>Eszköz:</p>
                    <p className='selected-text'><span>{selected}</span></p>
                    <p className='selected-text'>Probléma:</p>
                    <p className='selected-text'><span>{selected2}</span></p>
                    <p className='selected-text-description'>Leírás:</p>

                    { (selected2 == "iPhone 5 kijelző csere (gyári) 14.999 Ft - fekete" || selected2 == "iPhone 5 kijelző csere (gyári) 14.999 Ft - fehér"
                    || selected2 == "iPhone 5s kijelző csere (gyári) 14.999 Ft - fekete" || selected2 == "iPhone 5s kijelző csere (gyári) 14.999 Ft - fehér"
                    || selected2 == "iPhone 6 kijelző csere (gyári) 15.999 Ft - fekete" || selected2 == "iPhone 6 kijelző csere (gyári) 15.999 Ft - fehér"
                    || selected2 == "iPhone 6s kijelző csere (gyári) 18.999 Ft - fekete" || selected2 == "iPhone 6s kijelző csere (gyári) 18.999 Ft - fehér"
                    || selected2 == "iPhone 6s plus kijelző csere (gyári) 24.999 Ft - fekete" || selected2 == "iPhone 6s plus kijelző csere (gyári) 24.999 Ft - fehér"
                    || selected2 == "iPhone 7 kijelző csere (gyári) 20.999 Ft - fekete" || selected2 == "iPhone 7 kijelző csere (gyári) 20.999 Ft - fehér"
                    || selected2 == "iPhone 7 plus kijelző csere (gyári) 24.999 Ft - fekete" || selected2 == "iPhone 7 plus kijelző csere (gyári) 24.999 Ft - fehér"
                    || selected2 == "iPhone 8 kijelző csere (gyári) 23.999 Ft - fekete" || selected2 == "iPhone 8 kijelző csere (gyári) 23.999 Ft - fehér"
                    || selected2 == "iPhone 8 plus kijelző csere (gyári) 28.999 Ft - fekete" || selected2 == "iPhone 8 plus kijelző csere (gyári) 28.999 Ft - fehér"
                    || selected2 == "iPhone SE 2020 kijelző csere (gyári) 23.999 Ft - fekete" || selected2 == "iPhone SE 2020 kijelző csere (gyári) 23.999 Ft - fehér"
                    || selected2 == "iPhone X kijelző csere (gyári) 65.999 Ft"
                    || selected2 == "iPhone XS kijelző csere (gyári) 55.999 Ft"
                    || selected2 == "iPhone XS Max kijelző csere (gyári) 75.999 Ft"
                    || selected2 == "iPhone XR kijelző csere (gyári) 39.999 Ft" 
                    || selected2 == "iPhone 11 kijelző csere (gyári) 44.999 Ft"
                    ) &&
                    <div>
                        <p className='display-text'>
                            Törött kijelző esetén rendkívül könnyen old fel a vízzáró réteg, és ezáltal a telefon sokkal sebezhetőbb lesz, a por és víz által.
                            Rendkívül fontos a kijelző megfelelő időben való cseréje, mert egyéb meghibásodáshoz vezethet annak elmulasztása.
                            Minden tekintetben visszaállítjuk a True Tone funkciót, még akkor is ha előtt utángyártott kijelző volt a telefonjában.
                            Javítás végeztével, visszahelyezzük a vízzáró réteget, és kitisztítjuk a telefon hangszóró/mikrofon rácsait.
                        </p>
                        <p className='delivery-info'>Szervizfutár:</p>
                        <p className='delivery-info2'>Zugló - <span>ingyenes</span><br/>Környező kerületek - <span>2500 Ft</span></p>
                    </div>
                    }

                    { (selected2 == "iPhone 5 akkumulátor csere 7.499 Ft"
                    || selected2 == "iPhone 5s akkumulátor csere 7.499 Ft"
                    || selected2 == "iPhone 6 akkumulátor csere 7.499 Ft"
                    || selected2 == "iPhone 6s akkumulátor csere 9.499 Ft"
                    || selected2 == "iPhone 6s plus akkumulátor csere 13.499 Ft"
                    || selected2 == "iPhone 7 akkumulátor csere 13.499 Ft"
                    || selected2 == "iPhone 7 plus akkumulátor csere 14.499 Ft"
                    || selected2 == "iPhone 8 akkumulátor csere 13.499 Ft"
                    || selected2 == "iPhone 8 plus akkumulátor csere 15.499 Ft"
                    || selected2 == "iPhone SE 2020 akkumulátor csere 15.499 Ft"
                    || selected2 == "iPhone X akkumulátor csere 17.499 Ft"
                    || selected2 == "iPhone XS akkumulátor csere 19.499 Ft"
                    || selected2 == "iPhone XS Max akkumulátor csere 23.499 Ft"
                    || selected2 == "iPhone XR akkumulátor csere 18.499 Ft"
                    || selected2 == "iPhone 11 akkumulátor csere 25.499 Ft"
                    ) &&
                    <div>
                        <p className='display-text'>
                            Az akkumulátor megfelelő időben való cseréje nagyon fontos! Amennyiben azt érzi hogy nagyon gyorsan merült telefonja, keresse fel szervizünket,
                             mi OEM akkumulátort helyezünk készülékébe, ami megegyezik a gyári minőséggel. Ne várjon addig míg az akkumulátor felpúposodik és alaplapi illetve
                              kijelző hibákat eredményez. 80 % alatt érdemes szervizbe vinni készülékét.
                        </p>
                        <p className='delivery-info'>Szervizfutár:</p>
                        <p className='delivery-info2'>Zugló - <span>ingyenes</span><br/>Környező kerületek - <span>2500 Ft</span></p>
                    </div>
                    }        

                    { (selected2 == "iPhone 5 beszédhangszóró csere 3.999 Ft" || selected2 == "iPhone 5 előlapi kamera csere 4.999 Ft"
                    || selected2 == "iPhone 5 hátlapi kamera csere 5.499 Ft" || selected2 == "iPhone 5 bekapcsoló gomb csere 6.499 Ft"
                    || selected2 == "iPhone 5 töltő csatlakozó csere 6.499 Ft" || selected2 == "iPhone 5 ház csere 14.999 Ft"
                    || selected2 == "iPhone 5 Home gomb csere 6.999 Ft"

                    || selected2 == "iPhone 5s beszédhangszóró csere 4.999 Ft" || selected2 == "iPhone 5s előlapi kamera csere 4.999 Ft"
                    || selected2 == "iPhone 5s hátlapi kamera csere 5.499 Ft" || selected2 == "iPhone 5s bekapcsoló gomb csere 6.499 Ft"
                    || selected2 == "iPhone 5s töltő csatlakozó csere 6.499 Ft" || selected2 == "iPhone 5s ház csere 14.999 Ft"
                    || selected2 == "iPhone 5s Home gomb csere 7.499 Ft"
                    
                    || selected2 == "iPhone 6 beszédhangszóró csere 5.499 Ft" || selected2 == "iPhone 6 előlapi kamera csere 4.999 Ft"
                    || selected2 == "iPhone 6 hátlapi kamera csere 7.499 Ft" || selected2 == "iPhone 6 bekapcsoló gomb csere 8.499 Ft"
                    || selected2 == "iPhone 6 töltő csatlakozó csere 8.499 Ft" || selected2 == "iPhone 6 ház csere 17.999 Ft"
                    || selected2 == "iPhone 6 Home gomb csere 7.999 Ft"

                    || selected2 == "iPhone 6s beszédhangszóró csere 5.499 Ft" || selected2 == "iPhone 6s előlapi kamera csere 6.999 Ft"
                    || selected2 == "iPhone 6s hátlapi kamera csere 8.499 Ft" || selected2 == "iPhone 6s bekapcsoló gomb csere 9.499 Ft"
                    || selected2 == "iPhone 6s töltő csatlakozó csere 8.499 Ft" || selected2 == "iPhone 6s ház csere 15.999 Ft"
                    || selected2 == "iPhone 6s Home gomb csere 8.999 Ft"

                    || selected2 == "iPhone 6s plus beszédhangszóró csere 8.499 Ft" || selected2 == "iPhone 6s plus előlapi kamera csere 15.999 Ft"
                    || selected2 == "iPhone 6s plus hátlapi kamera csere 16.499 Ft" || selected2 == "iPhone 6s plus bekapcsoló gomb csere 13.499 Ft"
                    || selected2 == "iPhone 6s plus töltő csatlakozó csere 14.499 Ft" || selected2 == "iPhone 6s plus ház csere 24.999 Ft"
                    || selected2 == "iPhone 6s plus Home gomb csere 8.999 Ft"

                    || selected2 == "iPhone 7 beszédhangszóró csere 13.499 Ft" || selected2 == "iPhone 7 előlapi kamera csere 11.999 Ft"
                    || selected2 == "iPhone 7 hátlapi kamera csere 16.499 Ft" || selected2 == "iPhone 7 bekapcsoló gomb csere 11.499 Ft"
                    || selected2 == "iPhone 7 töltő csatlakozó csere 12.499 Ft" || selected2 == "iPhone 7 ház csere 29.999 Ft"
                    || selected2 == "iPhone 7 rezgőmotor csere 9.999 Ft"

                    || selected2 == "iPhone 7 plus beszédhangszóró csere 13.499 Ft" || selected2 == "iPhone 7 plus előlapi kamera csere 13.999 Ft"
                    || selected2 == "iPhone 7 plus bekapcsoló gomb csere 16.499 Ft"
                    || selected2 == "iPhone 7 plus töltő csatlakozó csere 17.499 Ft" || selected2 == "iPhone 7 plus ház csere 24.999 Ft"
                    || selected2 == "iPhone 7 plus rezgőmotor csere 14.999 Ft"

                    || selected2 == "iPhone 8 beszédhangszóró csere 13.499 Ft" || selected2 == "iPhone 8 előlapi kamera csere 13.999 Ft"
                    || selected2 == "iPhone 8 hátlapi kamera csere 28.499 Ft" || selected2 == "iPhone 8 bekapcsoló gomb csere 15.499 Ft"
                    || selected2 == "iPhone 8 töltő csatlakozó csere 15.499 Ft" || selected2 == "iPhone 8 ház csere 25.999 Ft"
                    || selected2 == "iPhone 8 rezgőmotor csere 15.999 Ft"

                    || selected2 == "iPhone 8 plus beszédhangszóró csere 13.499 Ft" || selected2 == "iPhone 8 plus előlapi kamera csere 13.999 Ft"
                    || selected2 == "iPhone 8 plus hátlapi kamera csere 35.499 Ft" || selected2 == "iPhone 8 plus bekapcsoló gomb csere 15.499 Ft"
                    || selected2 == "iPhone 8 plus töltő csatlakozó csere 15.499 Ft" || selected2 == "iPhone 8 plus ház csere 32.999 Ft"
                    || selected2 == "iPhone 8 plus rezgőmotor csere 17.999 Ft"

                    || selected2 == "iPhone SE 2020 beszédhangszóró csere 13.499 Ft" || selected2 == "iPhone SE 2020 előlapi kamera csere 13.999 Ft"
                    || selected2 == "iPhone SE 2020 hátlapi kamera csere 28.499 Ft" || selected2 == "iPhone SE 2020 bekapcsoló gomb csere 15.499 Ft"
                    || selected2 == "iPhone SE 2020 töltő csatlakozó csere 15.499 Ft" || selected2 == "iPhone SE 2020 ház csere 35.999 Ft"
                    || selected2 == "iPhone SE 2020 rezgőmotor csere 15.999 Ft"

                    || selected2 == "iPhone X beszédhangszóró csere 18.499 Ft" || selected2 == "iPhone X előlapi kamera csere 33.999 Ft"
                    || selected2 == "iPhone X hátlapi kamera csere 35.499 Ft" || selected2 == "iPhone X bekapcsoló gomb csere 25.499 Ft"
                    || selected2 == "iPhone X töltő csatlakozó csere 18.499 Ft" || selected2 == "iPhone X ház csere 32.999 Ft"
                    || selected2 == "iPhone X rezgőmotor csere 19.999 Ft"

                    || selected2 == "iPhone XS beszédhangszóró csere 16.499 Ft" || selected2 == "iPhone XS előlapi kamera csere 33.999 Ft"
                    || selected2 == "iPhone XS hátlapi kamera csere 35.499 Ft" || selected2 == "iPhone XS bekapcsoló gomb csere 25.499 Ft"
                    || selected2 == "iPhone XS töltő csatlakozó csere 21.499 Ft" || selected2 == "iPhone XS ház csere 36.999 Ft"
                    || selected2 == "iPhone XS rezgőmotor csere 23.999 Ft"

                    || selected2 == "iPhone XS Max beszédhangszóró csere 16.499 Ft" || selected2 == "iPhone XS Max előlapi kamera csere 33.999 Ft"
                    || selected2 == "iPhone XS Max hátlapi kamera csere 36.499 Ft" || selected2 == "iPhone XS Max bekapcsoló gomb csere 23.499 Ft"
                    || selected2 == "iPhone XS Max töltő csatlakozó csere 21.499 Ft" || selected2 == "iPhone XS Max ház csere 58.999 Ft"
                    || selected2 == "iPhone XS Max rezgőmotor csere 23.999 Ft"

                    || selected2 == "iPhone XR beszédhangszóró csere 18.499 Ft" || selected2 == "iPhone XR előlapi kamera csere 33.999 Ft"
                    || selected2 == "iPhone XR hátlapi kamera csere 35.499 Ft" || selected2 == "iPhone XR bekapcsoló gomb csere 25.499 Ft"
                    || selected2 == "iPhone XR töltő csatlakozó csere 18.499 Ft" || selected2 == "iPhone XR ház csere 35.999 Ft"
                    || selected2 == "iPhone XR rezgőmotor csere 19.999 Ft"

                    || selected2 == "iPhone 11 beszédhangszóró csere 18.499 Ft" || selected2 == "iPhone 11 előlapi kamera csere 25.999 Ft"
                    || selected2 == "iPhone 11 hátlapi kamera csere 30.499 Ft" || selected2 == "iPhone 11 bekapcsoló gomb csere 20.499 Ft"
                    || selected2 == "iPhone 11 töltő csatlakozó csere 18.499 Ft" || selected2 == "iPhone 11 ház csere 35.999 Ft"
                    || selected2 == "iPhone 11 rezgőmotor csere 40.999 Ft"

                    ) &&
                    <div>
                        <p className='display-text'>
                            Készülék javítását azonnal elkezdjük a szervizbe való beérkezést követően. Csak minőségi alkatrészekkel dolgozunk,
                             az utángyártott eszközök mindig újabb és újabb javításhoz vezetnek.
                        </p>
                        <p className='delivery-info'>Szervizfutár:</p>
                        <p className='delivery-info2'>Zugló - <span>ingyenes</span><br/>Környező kerületek - <span>2500 Ft</span></p>
                    </div>
                    }                 
                    

                </div>
                <div className='request-div3'>
                    <img src={igenyles} alt='Telefonok'/>
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

export default Second