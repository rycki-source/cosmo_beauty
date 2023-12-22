import React from 'react';
import css from './Footer.module.css';
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon,
    
}
    from "@heroicons/react/outline";
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>CosmosBeauty</span>

            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span> 228 nord Avenue Maman n'danida ,lomé</span>
                    </span>

                    <span className={css.pngLine}>
                        {""}
                        <PhoneIcon className={css.icon} />
                        <a  href="tel:+22890493257">+22890493257</a>
                    </span>

                    <span className={css.pngLine}>
                      <InboxIcon className={css.icon} />
                       <a href="mailto:support@crasyminds.com">support@crasyminds.com</a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} />
                        
                        Signin
                    </span>
                </div>
           </div>

           <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UserIcon className={css.icon} />
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                    </span>
                </div>
           </div>

           <div className={css.block}>
                <div className={css.detail}>
                    <span>Ressources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon} />
                       <p>Safety Privacy & Terms</p>
                    </span>
                </div>
           </div>
        </div>
        <div className={css.copyRight}>
            <span>Copyright ©2022 by CrasyMindsDigitalWorld, inc.</span>
            <span>All rights reserved.  </span>
        </div>
    </div>
  )
}

export default Footer