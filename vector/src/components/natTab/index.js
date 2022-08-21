import { Container, Row, Tab, Tabs } from "react-bootstrap"
import styles from "./Home.module.scss"

function NavTab() {
    return (


        <Container>
            <Tabs
                defaultActiveKey="tab-1"
                id="fill-tab-example"

            >

                <Tab eventKey="tab-1" title="TODAS" >
                    <div className={styles.Images}>
                        <div className={styles.mainImage}>

                        </div>
                        <div className={styles.secondImage}>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="tab-2" title="MINIMALISTA" >
                    <div className={styles.Images}>
                        <div className={styles.mainImage}>

                        </div>
                        <div className={styles.secondImage}>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="tab-3" title="OLD SCHOOL" >
                    <div className={styles.Images}>
                        <div className={styles.mainImage}>

                        </div>
                        <div className={styles.secondImage}>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="tab-4" title="CLÁSSICAS" >
                    <div className={styles.Images}>
                        <div className={styles.mainImage}>

                        </div>
                        <div className={styles.secondImage}>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                            <div className={styles.smallImg}></div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </Container>







    );

}

export default NavTab;