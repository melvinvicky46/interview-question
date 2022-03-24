// Setting Page Name with browser default props
export function setPageName() {
  let pageName = "";
  const locationPathname: any = specialCharRemove(window.location.pathname);
  const navigatorLang: any = navigator?.language;
  const siteSection = setSiteSection();
  const siteName = setSiteName();
  const getSiteSectionLevel2 = locationPathname.split("/")[2];
  const getSiteSectionLevel3 = locationPathname.split("/")[3];
  pageName = `${siteName}|${navigatorLang}|${siteSection}`;
  if (getSiteSectionLevel2 !== undefined && getSiteSectionLevel2 !== "") {
    pageName = `${siteName}|${navigatorLang}|${getSiteSectionLevel2.replace(
      ".",
      "-"
    )}`;
  }
  if (getSiteSectionLevel3 !== undefined && getSiteSectionLevel3 !== "") {
    pageName = `${siteName}|${navigatorLang}|${getSiteSectionLevel3.replace(
      ".",
      "-"
    )}`;
  }
  return pageName.toLowerCase();
}

// Setting Site Name with browser default props
export function setSiteName() {
  const locationHostname: any = specialCharRemove(window.location.hostname);
  if (locationHostname.match(/^www\.(.*)(\.com|\.org)$/) !== null) {
    return locationHostname
      .match(/^www\.(.*)(\.com|\.org)$/)[1]
      .replace(".", "-");
  } else {
    const getSite = locationHostname.match(/(.*)(\.com|\.org)$/);
    if (getSite && getSite[1].split(".")[0] === "my") {
      return `${getSite[1].split(".")[1]}-mypmi`;
    } else if (getSite) {
      return `${getSite[1].split(".")[1]}-${getSite[1].split(".")[0]}`;
    }
  }
  return "pmi";
}

// Setting langCountry with browser default props
export function setLangCountry() {
  return navigator.language.toLowerCase() || navigator.userLanguage.toLowerCase();
}

// Setting Server Name with browser default props
export function setServerName() {
  const locationHostname: any = specialCharRemove(window.location.hostname);
  if (
    locationHostname
      .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
      .split("/")[0] !== undefined
  ) {
    return locationHostname
      .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
      .split("/")[0].toLowerCase();
  }
}

// Setting Site Section with browser default props
export function setSiteSection() {
  const locationPathname: any = specialCharRemove(window.location.pathname);
  if (locationPathname.split("/")[1] === "") {
    return "home";
  }
  return locationPathname.split("/")[1].replace(".", "-").toLowerCase();
}

// Setting Site Section Level2 with browser default props
export function setSiteSectionLevel2() {
  const locationPathname: any = specialCharRemove(window.location.pathname);
  const siteSection = setSiteSection();
  if (siteSection === "home" || locationPathname.split("/")[2] === undefined) {
    return "";
  } else {
    return locationPathname.split("/")[2].replace(".", "-").toLowerCase();
  }
}

// Setting Site Section Level3 with browser default props
export function setSiteSectionLevel3() {
  const locationPathname: any = specialCharRemove(window.location.pathname);
  const getSiteSectionLevel2 = setSiteSectionLevel2();
  return getSiteSectionLevel2 === undefined ||
    getSiteSectionLevel2 === "" ||
    locationPathname.split("/")[3] === undefined
    ? ""
    : locationPathname.split("/")[3].replace(".", "-").toLowerCase();
}

// Setting Hier1 with browser default props
export function setAllHier1() {
  const locationPathname: any = specialCharRemove(window.location.pathname);
  if (locationPathname.split("/").join("|") === "|") {
    return "home";
  }
  return locationPathname
    .replace(/\/$/, "")
    .split("/")
    .join("|")
    .substring(1)
    .replace(".", "-")
    .toLowerCase();
}

// Replacing special character to '-'
export function specialCharRemove(params: any) {
  return params.toLowerCase().replace(/[^A-Z0-9/$ ,/]/gi, "-");
}

// Converts data object toLowerCase and removes special character and replace by '-'
export function convertDataObjToLowerCase(origObj: any) {
  return Object.keys(origObj).reduce(function (newObj: any, key: any) {
    let val = origObj[key];
    let newVal =
      typeof val === "object"
        ? convertDataObjToLowerCase(val)
        : specialCharRemove(val.toLowerCase());
    newObj[key] = newVal;
    return newObj;
  }, {});
}