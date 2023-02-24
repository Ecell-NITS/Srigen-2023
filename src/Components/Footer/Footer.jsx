import styles from "./Footer.module.scss";
import React from "react";


const Footer = () =>{
    return(
        <>


         <div className={`${styles.containerContact}`}>
            <p className={`${styles.contactHeader}`}>Contact<span className={`${styles.infoGrad}`}> Info</span></p>
            <div className={`${styles.credInfo}`}>
                <p className={`${styles.credItems}`}>Address<br/>National Institute of Technology Silchar Cachar, Assam</p>
                <p className={`${styles.credItems}`}>Website<br/>www.nits.ac.in</p>
                <p className={`${styles.credItems}`}>Email<br/>xxxx@xxx.com</p>
                <p className={`${styles.credItems}`}>Phone Number<br/>+91-xxxxxxxxxx</p>
            </div>

        </div>
        <div className={`${styles.containerFooter}`}>
            <p className= {`${styles.footerDesc}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, purus tincidunt tellus eros. Feugiat velit id sed sit id velit, adipiscing pulvinar orci. Et, bibendum nibh pellentesque id sagittis adipiscing lorem. Elit egestas bibendum morbi vitae, nullam nunc sagittis eget.</p>
    
        </div> 
        
    
        </>
        
    )
}
export default Footer