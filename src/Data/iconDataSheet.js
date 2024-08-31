import {
  mailOutline,
  phonePortraitOutline,
  locationOutline,
} from "ionicons/icons";

// Constant Values
const emailId = "diagoarden@gmail.com";
const phoneNo = "+91-7208715575";

export const iconDS = [
  {
    icon: mailOutline, // Ionicon name
    iconName: "Email",
    iconData: `<a href="mailto:${emailId}">${emailId}</a>`,
  },
  {
    icon: phonePortraitOutline, // React icon component
    iconName: "Phone",
    iconData: `<a href="tel:${phoneNo}">${phoneNo}</a>`,
  },
  {
    icon: locationOutline, // React icon component
    iconName: "Location",
    iconData: `<address>Banglore, India</address>`,
  },
];

import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoLinkedin,
} from "ionicons/icons";

export const socialLinks = [
  {
    iconLink: "https://www.facebook.com/arden.diago.7?mibextid=ZbWKwL",
    iconLogo: logoFacebook,
  },
  {
    iconLink: "https://x.com/ArdenDiago?t=ErRm_V_kT2woXcC_dbSjng&s=09",
    iconLogo: logoTwitter,
  },
  {
    iconLink: "https://www.instagram.com/arden.diago?igsh=endhZ3VraWhoYWlx",
    iconLogo: logoInstagram,
  },
  {
    iconLink: "https://www.linkedin.com/in/arden-diago-a89751279/",
    iconLogo: logoLinkedin,
  },
];
