import styles from "./Footer.module.scss";
import React from "react";
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {FiLinkedin} from "react-icons/fi"


const Footer = () =>{
    return(
        <>


         <div className={`${styles.containerContact}`}>
            <p className={`${styles.contactHeader}`}>Contact<span className={`${styles.infoGrad}`}> Info</span></p>
            <div className={`${styles.credInfo}`}>
                <p className={`${styles.credItems}`}>Address<span className={`${styles.credText}`}>National Institute of Technology Silchar Cachar, Assam</span></p>
                <p className={`${styles.credItems}`}>Website<span className={`${styles.credText}`}>www.nits.ac.in</span></p>
                <p className={`${styles.credItems}`}>Email<span className={`${styles.credText}`}>xxxx@xxx.com</span></p>
                <p className={`${styles.credItems}`}>Phone Number<span className={`${styles.credText}`}>+91-xxxxxxxxxx</span></p>
            </div>

        </div>
        <div className={`${styles.containerFooter}`}>
            <p className= {`${styles.footerDesc}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, purus tincidunt tellus eros. Feugiat velit id sed sit id velit, adipiscing pulvinar orci. Et, bibendum nibh pellentesque id sagittis adipiscing lorem. Elit egestas bibendum morbi vitae, nullam nunc sagittis eget.</p>
           <div className= {`${styles.iconSection}`} >
            <FiFacebook  className= {`${styles.facebookIcon}`}/>
            <AiOutlineInstagram className= {`${styles.instaIcon}`} />
            <FiLinkedin className= {`${styles.linkedinIcon}`} />
            </div>
    
        </div> 
        
    
        </>
        
    )
}

export default Footer