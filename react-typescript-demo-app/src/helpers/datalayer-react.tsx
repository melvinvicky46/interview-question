import {
  setPageName,
  setSiteName,
  setLangCountry,
  setServerName,
  setSiteSection,
  setSiteSectionLevel2,
  setSiteSectionLevel3,
  setAllHier1,
  specialCharRemove,
  convertDataObjToLowerCase
} from "./datalayer-react-common";

import {
  GenericPageLoad,
  UserLoginInfo,
  CheckOutScreenLoad,
  AddToCartData,
  GenericLink,
  FormInteraction,
} from "./datalayer-types";

import store from "../redux/store";

let typeOfLoad = "pageload";
let checkLoggedIn = false;

// Setting the data from window object, if the data is not sent from dev
const setGenericPageData = (data: any) => {
  const onPageLoad = {
    event: data?.event ? data.event : typeOfLoad,
    eventInfo: data?.eventInfo ? data.eventInfo : typeOfLoad,
    page: {
      pageInfo: {
        pageName: data?.page?.pageInfo?.pageName
          ? specialCharRemove(data.page.pageInfo.pageName)
          : setPageName(),
        langcountry: data?.page?.pageInfo?.langCountry
          ? specialCharRemove(data.page.pageInfo.langCountry)
          : setLangCountry(),
        siteName: data?.page?.pageInfo?.siteName
          ? specialCharRemove(data.page.pageInfo.siteName)
          : setSiteName().toLowerCase(),
        server: data?.page?.pageInfo?.server
          ? specialCharRemove(data.page.pageInfo.server)
          : setServerName(),
      },
      category: {
        siteSection: data?.page?.category?.siteSection
          ? specialCharRemove(data.page.category.siteSection)
          : setSiteSection(),
        siteSectionLevel2: data?.page?.category?.siteSectionLevel2
          ? specialCharRemove(data.page.category.siteSectionLevel2)
          : setSiteSectionLevel2(),
        siteSectionLevel3: data?.page?.category?.siteSectionLevel3
          ? specialCharRemove(data.page.category.siteSectionLevel3)
          : setSiteSectionLevel3(),
        hier1: data?.page?.category?.hier1
          ? specialCharRemove(data.page.category.hier1)
          : setAllHier1(),
      },
    },
    user: {
      loginStatus: data?.user?.loginStatus
        ? data.user.loginStatus.toLowerCase()
        : checkLoggedIn
        ? "logged-in"
        : "logged-out"
    },
  };
  return onPageLoad;
};

// Whenever a route/screen changes need to reset/empty window.adobeDataLayer
export const resetAdobeDataLayer = () => {
  window.adobeDataLayer.length = 0;
  typeOfLoad = "screenload";
};

// Generic page load
export const adobeDataLayerPush = (data: GenericPageLoad) => {
  if (
    data?.event === "" ||
    data?.event === "screenload" ||
    data?.event === "pageload"
  ) {
    if (window.adobeDataLayer.length === 0) {
      checkLoggedIn = false;
    }
    const pageData = setGenericPageData(data);
    window.adobeDataLayer.push(pageData);
  } else {
    console.error(
      "Error: Must send 'pageload' or 'screenload' event in adobeDataLayerPush"
    );
  }
};

// Specific event load/click
export const adobeDataLayerAdd = (
  data:
    | UserLoginInfo
    | CheckOutScreenLoad
    | AddToCartData
    | GenericLink
    | FormInteraction
) => {
  if (data?.event !== typeOfLoad) {
    if (data?.event === "loggedin") {
      checkLoggedIn = true;
    }
    const specificData = convertDataObjToLowerCase(data);
    window.adobeDataLayer.push(specificData);
  } else {
    console.error(
      "Error: Cannot send 'pageload' or 'screenload' event in adobeDataLayerAdd"
    );
  }
};
