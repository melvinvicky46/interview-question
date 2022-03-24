import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  adobeDataLayerAdd,
  adobeDataLayerPush,
  resetAdobeDataLayer,
} from "../../../helpers/datalayer-react";
import {
  GenericPageLoad,
  UserLoginInfo,
  PaymentDataLoad,
} from "../../../helpers/datalayer-types";

function PaymentScreenLoad(props: any) {
  const { checkStatus } = props;

  useEffect(() => {
    const paymentData = {
      event: "checkout-payment",
      eventInfo: "checkout-payment",
      action: "checkout-payment",
      cart: {
        product: [
          {
            productName: "<productName>",
            productCat: "<productCat>",
          },
        ],
      },
    };

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
          pageName: "Overriding Generic Page Name",
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
        loginStatus: "logged-out",
      },
    };

    console.log("checkStatus checkout", checkStatus);
    if (checkStatus === "screenload") {
      resetAdobeDataLayer();
    }
    adobeDataLayerAdd(paymentData as PaymentDataLoad);
    adobeDataLayerAdd(userLogin as UserLoginInfo);
    adobeDataLayerPush(pageData as GenericPageLoad);
  }, [checkStatus]);

  return (
    <div>
      <h2> Payment {checkStatus} Load </h2>
      <h3>
        Tracking Checkout Payment {checkStatus} loaded, User is loggedin and
        Generic {checkStatus} Load
      </h3>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    checkStatus: state.routeChange.checkStatus,
  };
};

export default connect(mapStateToProps)(PaymentScreenLoad);
