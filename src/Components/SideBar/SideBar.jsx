import { useState, useEffect } from "react";
import profilePhote from "../../assets/images/my-avatar.png";

// Importing components
import ListInfo from "./ListInfo";
import SocialLinks from "./SocialLinks";

import { IonIcon } from "@ionic/react";
import { chevronDown } from 'ionicons/icons';

// Importing all the Data.
import { iconDS, socialLinks, skills } from "../../Data/AsideData";

export default function SideBar() {
  const [btnActive, setBTNActive] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);

  // Toggle button state on click
  function buttonState() {
    setBTNActive((prev) => !prev);
  }

  // Adjust sidebar state based on screen width
  useEffect(() => {
    if (document.documentElement.clientWidth > 1440) {
      setBTNActive(1); // Default active state for wide screens
    }
  }, []); // Run only once on mount

  // Automatically rotate skills
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSkillIndex((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearTimeout(timeout); // Cleanup the timeout when the component unmounts
  }, [skillIndex, skills.length]);

  return (
    <>
      <aside className={btnActive ? "sidebar active" : "sidebar"} data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={profilePhote} alt="Arden Diago" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Arden Diago
            </h1>
            <p className="title">{skills[skillIndex].toUpperCase()}</p>
          </div>
          <button className="info_more-btn" data-sidebar-btn onClick={buttonState}>
            <span>Show Contacts</span>
            <IonIcon icon={chevronDown} />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            {iconDS.map((item, index) => (
              <ListInfo {...item} key={index} />
            ))}
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {socialLinks.map((item, index) => (
              <SocialLinks key={index} {...item} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
