import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  adobeDataLayerAdd,
  adobeDataLayerPush,
  resetAdobeDataLayer,
} from "../helpers/datalayer-react";
import { GenericPageLoad, UserLoginInfo } from "../helpers/datalayer-types";

function LoginScreenLoad(props: any) {
  const [checkLoginStatus, setLoginStatus] = useState(true);
  const { checkStatus } = props;

  useEffect(() => {
    const userLogin = {
      event: "loggedin",
      eventInfo: "loggedin",
      user: {
        profileCompletion: "90% Profile completed - myPMI",
        membershipTier:
          "Membership Tier  associated with user - visitor profile",
        membershipStatus: "Status of membership - visitor profile",
        region: "California - US",
        autoRenewal: "auto Renewal flag on membership- myPMI",
        certificationStatus: "Active",
        pduStatus: "Active",
        pmiID: "987655",
        pmID: "123456",
        membershipSegement: "member",
        certificationSegement: "certified",
        userSegement: "12345",
      },
    };
    const pageData = {
      event: "",
      eventInfo: "",
      page: {
        pageInfo: {
          pageName: "Overriding login Page Name",
          langCountry: "",
          siteName: "",
          server: "",
        },
        category: {
          siteSection: "",
          siteSectionLevel2: "",
          siteSectionLevel3: "",
          hier1: "",
        },
      },
      user: {
        loginStatus: "",
      },
    };

    // Check if the page is loaded or route/screen changed
    if (checkStatus === "screenload") {
      pageData.event = checkStatus;
      pageData.eventInfo = checkStatus;
      resetAdobeDataLayer();
    }

    // Check if the user is loggedIn or not
    if (checkLoginStatus) {
      pageData.user.loginStatus = "logged-in";
      adobeDataLayerAdd(userLogin as UserLoginInfo);
    } else {
      pageData.user.loginStatus = "logged-out";
    }
    adobeDataLayerPush(pageData as GenericPageLoad);
  }, [checkStatus]);

  return (
    <div>
      <h2> User Login {checkStatus} Load </h2>
      <h3>Tracking User loggedin and Generic {checkStatus} Load</h3>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    checkStatus: state.routeChange.checkStatus,
  };
};

export default connect(mapStateToProps)(LoginScreenLoad);
