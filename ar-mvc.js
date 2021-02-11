// import { setPageName, setSiteName, setServerName, setSiteSection, setSiteSectionLevel2, setSiteSectionLevel3, setAllHier1 } from './ar-common.js';

// Initialize the adobe datalayer
window.adobeDataLayer = window.adobeDataLayer || [];
console.log(`Adobe Data Layer Initialized`);

// Get the Script tag from the DOM for logged in user
const getLoggedInUserEl = document.querySelector('script[data-tracking="tracking-ar-user"]');

// Get the Script tag from the DOM for Content Details page
const getContentDetailEl = document.querySelector('script[data-tracking="tracking-ar-content"]');

// Get the Script tag from the DOM for Searched result page
const getSearchedResultEl = document.querySelector('script[data-tracking="tracking-ar-search"]');

// Get the Script tag from the DOM for Membership page
const getMembershipEl = document.querySelector('script[data-tracking="tracking-ar-membership"]');

// Get the Script tag from the DOM for Course Detials page
const getCourseDetailEl = document.querySelector('script[data-tracking="tracking-ar-course-details"]');

// Get the Script tag from the DOM for any form interaction
const getFormInteractionEl = document.querySelector('script[data-tracking="tracking-ar-form-interaction"]');

// Get the Script tag from the DOM for Event Detials page
const getEventDetailEl = document.querySelector('script[data-tracking="tracking-ar-event-details"]');


const locationHostname = window.location.hostname;
const locationPathname = window.location.pathname;
const navigatorLang = navigator.language || navigator.userLanguage;

// Get the Script tag from the DOM for page load
const getPageLoadEl = document.querySelector('script[data-tracking="tracking-ar-page"]');

if (getContentDetailEl !== null) {
    adobeOnloadPush(getContentDetailEl);
} else if (getSearchedResultEl !== null) {
    adobeOnloadPush(getSearchedResultEl);
} else if (getMembershipEl !== null) {
    adobeOnloadPush(getMembershipEl);
} else if (getCourseDetailEl !== null) {
    adobeOnloadPush(getCourseDetailEl);
} else if (getFormInteractionEl !== null) {
    adobeOnloadPush(getFormInteractionEl);
} else if (getEventDetailEl !== null) {
    adobeOnloadPush(getEventDetailEl);
}

// Check for tracking-ar-user is present in the DOM
if (getLoggedInUserEl !== null) {
    const loggedInUserInfo = JSON.parse(getLoggedInUserEl?.textContent);
    if (loggedInUserInfo.event === undefined) {
        loggedInUserInfo.event = "loggedin";
    }
    if (loggedInUserInfo.eventInfo === undefined) {
        loggedInUserInfo.eventInfo = "loggedin";
    }
    // Push the JSON data to adobe datalayer
    if (Object.keys(loggedInUserInfo).length > 0) {
        window.adobeDataLayer.push(loggedInUserInfo);
    }
}

// Check for tracking-ar-page is present in the DOM, but doesn't have JSON object
if (getPageLoadEl !== null) {
    if (getPageLoadEl.textContent.trim() !== "") {
        const pageLoadData = JSON.parse(getPageLoadEl?.textContent);
        genericPageData(pageLoadData);
    } else {
        genericPageData({});
    }
}

// Check if the tracking-ar-page is not present in the DOM
if (getPageLoadEl === null) {
    genericPageData({});
}

function adobeOnloadPush(data) {
    const onLoadData = JSON.parse(data?.textContent);
    // Push the JSON data to adobe datalayer
    if (Object.keys(onLoadData).length > 0) {
        window.adobeDataLayer.push(onLoadData);
    }
}

function genericPageData(data) {
    const setPageLoadData = setGenericPageData(data);
    // Push the JSON data to adobe datalayer
    if (Object.keys(setPageLoadData).length > 0) {
        window.adobeDataLayer.push(setPageLoadData);
    }
}

function setGenericPageData(pageLoadData) {
    // Generic page data schema Object
    const genericPageData = {};
    genericPageData.event = pageLoadData?.event ? pageLoadData.event : "pageload";
    genericPageData.eventInfo = pageLoadData?.eventInfo ? pageLoadData.eventInfo : "pageload";
    genericPageData.page = {
        pageInfo: {
            pageName: pageLoadData?.page?.pageInfo?.pageName ? pageLoadData.page.pageInfo.pageName.toLowerCase() : setPageName().toLowerCase(),
            langCountry: pageLoadData?.page?.pageInfo?.langcountry ? pageLoadData.page.pageInfo.langcountry.toLowerCase() : (navigator.language.toLowerCase() || navigator.userLanguage.toLowerCase()),
            siteName: pageLoadData?.page?.pageInfo?.siteName ? pageLoadData.page.pageInfo.siteName.toLowerCase() : setSiteName().toLowerCase(),
            server: pageLoadData?.page?.pageInfo?.server ? pageLoadData.page.pageInfo.server.toLowerCase() : setServerName().toLowerCase()
        },
        category: {
            siteSection: pageLoadData?.page?.category?.siteSection ? pageLoadData.page.category.siteSection.toLowerCase() :setSiteSection().toLowerCase(),
            siteSectionLevel2: pageLoadData?.page?.category?.siteSectionLevel2 ? pageLoadData.page.category.siteSectionLevel2.toLowerCase() : setSiteSectionLevel2().toLowerCase(),
            siteSectionLevel3: pageLoadData?.page?.category?.siteSectionLevel3 ? pageLoadData.page.category.siteSectionLevel3.toLowerCase() : setSiteSectionLevel3().toLowerCase(),
            hier1: pageLoadData?.page?.category?.hier1 ? pageLoadData.page.category.hier1.toLowerCase() : setAllHier1().toLowerCase()
        }
    }
    genericPageData.user = {
        loginStatus: pageLoadData?.user?.loginStatus ? pageLoadData.user.loginStatus : getLoggedInUserEl !== null ? "logged-in" : "logged-out"
    }
    return genericPageData;
}

// Anchor/Button Link click event 
document.querySelector("body").addEventListener('click', (e) => {
    const dataTracking = e.target.getAttribute('data-tracking');
    if (dataTracking) {
        trackingLink(dataTracking, e);
    }
}, false);

function trackingLink(data, e) {
    const dataTrackingValue = JSON.parse(data);
    // If the data block has track true
    if (dataTrackingValue?.track) {
        setGenericLink(e);
    }

    // If the data block has event linkClick(Generic link)
    if (dataTrackingValue?.event === "linkClick") {
        window.adobeDataLayer.push(dataTrackingValue);
    }

    // If the data block has event Special Link
    if (dataTrackingValue?.event !== "linkClick" && dataTrackingValue.track === undefined) {
        window.adobeDataLayer.push(dataTrackingValue);
        setGenericLink(e);
    }
}

function setGenericLink(e) {
    const genericLinkObj = {
        event: "linkClick",
        eventInfo: "linkClick",
        link: {
            linkTitle: e.target.innerText,
            linkModule: findParentNode(e.target)
        }
    };
    window.adobeDataLayer.push(genericLinkObj);
}

function findParentNode(childObj) {
    var getParentEl = childObj.parentNode;
    var count = 1;
    // Traverse upwards the DOM to check adoberegion attribute in the DOM
    while(getParentEl.getAttribute('adoberegion') === null) {
        getParentEl = getParentEl.parentNode;
        count++;
    }
    return getParentEl.getAttribute('adoberegion')
}

let formStartState = 0;
const formElement = document.querySelector('form');
formElement.addEventListener('input', (e) => {
    const classList = e?.target?.classList;
    const classLen = e?.target?.classList?.length;
    // Check for any form error
    if (classLen > 0) {
        for (let i = 0; i < classLen; i++) {
            if (classList[i] === "input-validation-error") {
                onFormChange(e);
            }
        }
    }
    // When the form start
    if (!formStartState) {
        onFormChange(e);
        formStartState = 1;
    }
})

// When the for is submitted
formElement.addEventListener('submit', (e) => {
    const errorNames = [];
    for ( let i = 0; i < formElement.elements.length; i++ ) {
        const formEls = formElement.elements[i];
        const elClass = formEls.getAttribute('class');
        if (elClass !== null) {
            if (elClass.includes("input-validation-error")) {
                const elNameAttr = formEls.getAttribute('name');
                errorNames.push(elNameAttr);
            }
        }
    }
    console.log("errorNames", errorNames)
    onFormChange(e)
    e.preventDefault();
})

function onFormChange(e) {
    console.log("form interaction", e)
}
