import applicationConstants from "../../constants/applicationContants";

const menuData = [
  {
    index: 0,
    label: " Camps Details",
    icon: applicationConstants.directionsIcon,
    iconWidth: "width-24px",
    link: "AddCamp",
    activeClassName: true
  },
  {
    index: 1,
    label: " Patients",
    icon: applicationConstants.dashboardIcon,
    iconWidth: "width-24px",
    link: "dashboard"
  },
  {
    index: 2,
    label: "User Details",
    icon: applicationConstants.peopleIcon,
    iconWidth: "width-24px",
    link: "AddUser"
  },

  {
    index: 3,
    label: " Settings",
    icon: applicationConstants.settingsIcon,
    iconWidth: "width-24px",
    link: "Settings"
  },
  {
    index: 4,
    label: " Change Password",
    icon: applicationConstants.keyIcon,
    iconWidth: "width-24px",
    link: "ChangePassword"
  }
];

export default menuData;
