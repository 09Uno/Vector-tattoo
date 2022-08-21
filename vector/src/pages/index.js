import styles from "./Home.module.scss"
import React from 'react';
import Image from "next/image";
import logo1 from '../img/logo1.png'
import logo from '../img/as.png'
import Head from "next/head";
import { FaFacebookMessenger, FaInstagram, FaFacebookF } from 'react-icons/fa';
import Link from "next/link";
import NavTab from "../components/natTab";




export default function Home() {

    function home() {

    }

    return (
        <>

            <Head>
                <title>
                    Vector Tattoo
                </title>
                <link rel="icon" href="../../public/sdss.png" />
            </Head>
            <div className={styles.main}>
                <header className={styles.header}>
                    <div className={styles.headerMenu}>

                        <div className={styles.logoSmall}><Image src={logo} width={100} height={100} alt="" /></div>
                        <button onClick={home} className={styles.botaoHeader}>HOME</button>
                        <button onClick={home} className={styles.botaoHeader}>GALERIA</button>
                        <button onClick={home} className={styles.botaoHeader} >CONTATO</button>

                    </div>


                    <div className={styles.logoBig}>
                        <Image src={logo1} width={500} height={500} />
                    </div>
                    <div className={styles.footHeader}>



                        <span className={styles.botaoSocial} id={styles.bottFace}><Link href={"#"}  ><a><FaFacebookF color="#fff" size={22} /> </a></Link></span>

                        <span className={styles.botaoSocial} id={styles.botaoMessg} ><Link href={"#"} ><a><FaFacebookMessenger color="#fff" size={22} /></a></Link></span>

                        <span href={"#"} className={styles.botaoSocial} id={styles.botaoInsta}><Link href={"#"} ><a><FaInstagram color="#fff" size={22} /></a></Link></span>


                    </div>
                </header>


                <div className={styles.Container}>
                    <div className={styles.ContainerSobre}>
                        <div className={styles.sobre}>
                            <h2>VECTOR TATTOO</h2>

                            <h3>m dolor sit amet, consectetur adipiscing elit. Nunc auctor ipsum neque, egestas cula in. Sed</h3>

                            <div className={styles.sample}>

                                <div className={styles.sampleItem}><Image width={100} height={100} src={logo} /><p>m dolo Nunc auctor ipsum neque, egestas cula in. Sed</p></div>
                                <div className={styles.sampleItem}><Image width={100} height={100} src={logo} /><p>m dolo Nunc auctor ipsum neque, egestas cula in. Sed</p></div>
                                <div className={styles.sampleItem}><Image width={100} height={100} src={logo} /><p>m dolo Nunc auctor ipsum neque, egestas cula in. Sed</p></div>


                            </div>

                            <p>Lorem ipsum dolor sit amet, eque, egestas cula in. Sed ultricies quam ut venenatis tincidunt. Fusce rhoncus justo</p>
                            <p>lorem, vitae facilisis ante rhoncus et. In in t netus et malesuada famelit,. Aenean tortor ante, ullamcorper pretium scelerisque vitae, condime</p>
                            <p>bitant morbi tristique senectus etles metus ur ullamcorper id. Donec hendrerit quis elit eu molcidunt. Fusce rhoncus justo</p>
                        </div>
                    </div>
                    <div className={styles.work}>
                        <h2>PORTFÓLIO</h2>
                        <nav className={styles.navPortifolio}>
                            <NavTab />
                            <span className={styles.bontaoCtt}>
                                <Link href={"a"}>FAÇA SEU ORÇAMENTO</Link>
                            </span>

                        </nav>



                    </div>

                    <div className={styles.depoimentos}>
                        <h2>DEPOIMENTOS</h2>
                        <div className={styles.depoimentosImg}>
                            <div className={styles.depoimentosBox}></div>
                            <div className={styles.depoimentosBox}></div>
                            <div className={styles.depoimentosBox}></div>
                            <div className={styles.depoimentosBox}></div>
                        </div>
                    </div>



























                </div>



            </div>






        </>
    )

}


