import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  adobeDataLayerAdd,
  adobeDataLayerPush,
  resetAdobeDataLayer,
} from "../../helpers/datalayer-react";
import {
  GenericPageLoad,
  UserLoginInfo,
  CheckOutScreenLoad,
  AddToCartData,
  GenericLink,
} from "../../helpers/datalayer-types";

function CheckoutCart(props: any) {
  const { checkStatus } = props;
  const history = useHistory();

  const addToCart = {
    event: "add-to-cart",
    eventInfo: "add-to-cart",
    action: "add-to-cart ",
    cart: {
      cartLocation: "cart-view/recommended-product",
      product: [
        {
          productName: "<productName>",
          productCat: "<productCat>",
        },
      ]
    },
  };

  const genericLink = {
    event: "linkclick",
    eventInfo: "linkclick",
    link: {
      linkTitle: "<linktitle>",
      linkModule: "<linkmodule>",
      targetURL: "<targetURL>",
    },
  };

  useEffect(() => {
    const checkoutData = {
      event: "cart-view",
      eventInfo: "cart-view",
      action: "cart-view ",
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
        loginStatus: "",
      },
    };

    console.log("checkStatus checkout", checkStatus);
    if (checkStatus === "screenload") {
      pageData.event = checkStatus;
      pageData.eventInfo = checkStatus;
      resetAdobeDataLayer();
    }
    adobeDataLayerAdd(checkoutData as CheckOutScreenLoad);
    adobeDataLayerAdd(userLogin as UserLoginInfo);
    adobeDataLayerPush(pageData as GenericPageLoad);
  }, [checkStatus]);

  const addToCartHandler = () => {
    adobeDataLayerAdd(addToCart as AddToCartData);
    adobeDataLayerAdd(genericLink as GenericLink);
  };

  const paymentInfo = () => {
    adobeDataLayerAdd(genericLink as GenericLink);
    history.push("/Check@out/Payment");
  };

  return (
    <div>
      <h2>Checkout Cart {checkStatus} Load</h2>
      <h3>
        Tracking Checkout {checkStatus} loaded, User loggedin and Generic{" "}
        {checkStatus} Load
      </h3>
      <button onClick={addToCartHandler}>Add to cart</button>
      <button onClick={paymentInfo}>Continue to Payment</button>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    checkStatus: state.routeChange.checkStatus,
  };
};

export default connect(mapStateToProps)(CheckoutCart);
