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
  FormInteraction,
} from "../../../helpers/datalayer-types";

function PaymentInformationCheckout(props: any) {
  const { checkStatus } = props;
  const [focusVal, setFocusVal] = useState(true);
  const [changeVal, setChangeVal] = useState(true);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const formDataObj = {
    event: "form-interaction",
    eventInfo: "form-interaction",
    form: {
      action: "",
      formName: "Credit/Debit card",
      formError: "",
      ssoplatform: "",
    },
  };

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

    if (checkStatus === "screenload") {
      pageData.event = checkStatus;
      pageData.eventInfo = checkStatus;
      resetAdobeDataLayer();
    }
    adobeDataLayerAdd(userLogin as UserLoginInfo);
    adobeDataLayerPush(pageData as GenericPageLoad);
  }, [checkStatus]);

  const focusHandler = () => {
    if (focusVal) {
      console.log("Form Start");
      const formDataFocus = JSON.parse(JSON.stringify(formDataObj));
      formDataFocus.form.action = "form-start";
      adobeDataLayerAdd(formDataFocus as FormInteraction);
    }
    setFocusVal(false);
  };

  const saveHandler = () => {
    if (
      cardName === "" &&
      cardNumber === "" &&
      expireDate === "" &&
      securityCode === ""
    ) {
      console.log("Form Error");
      const formDataError = JSON.parse(JSON.stringify(formDataObj));
      formDataError.form.action = "form-error";
      formDataError.form.formError =
        "Name on Card, Card Number, Expiration Date, Security Code";
      adobeDataLayerAdd(formDataError as FormInteraction);
    } else {
      console.log("Form Success");
      const formDataSuccess = JSON.parse(JSON.stringify(formDataObj));
      formDataSuccess.form.action = "form-completed";
      adobeDataLayerAdd(formDataSuccess as FormInteraction);
    }
  };

  const onBlurNameHandler = (event: any) => {
    if (event.target.value !== "") {
      setCardName(event.target.value);
    }
  };

  const onBlurCardHandler = (event: any) => {
    if (event.target.value !== "") {
      setCardNumber(event.target.value);
    }
  };

  const onBlurExpHandler = (event: any) => {
    if (event.target.value !== "") {
      setExpireDate(event.target.value);
    }
  };

  const onBlurSecurityHandler = (event: any) => {
    if (event.target.value !== "") {
      setSecurityCode(event.target.value);
    }
  };

  return (
    <div>
      <h2> Payment Information Checkout {checkStatus} </h2>
      <h3>
        Tracking Payment Information Checkout {checkStatus}, User is loggedin
        and Generic {checkStatus} Load
      </h3>
      <form>
        <div>
          <div className="form-group has-error">
            <label className="control-label">* Name on Card</label>
            <input
              className="form-control"
              type="text"
              onFocus={focusHandler}
              onBlur={(e) => {
                onBlurNameHandler(e);
              }}
            />
          </div>
          <div className="form-group">
            <label className="control-label">* Card Number</label>
            <input
              className="form-control"
              onFocus={focusHandler}
              onBlur={(e) => {
                onBlurCardHandler(e);
              }}
            />
          </div>
          <div className="row">
            <div className="col-xs-4 col-sm-3 exp-field">
              <div className="form-group">
                <label className="control-label">* Expiration Date</label>
                <input
                  placeholder="MM/YY"
                  className="form-control mod--center"
                  onFocus={focusHandler}
                  onBlur={(e) => {
                    onBlurExpHandler(e);
                  }}
                />
              </div>
            </div>
            <div className="col-xs-4 col-sm-3 cvc-field">
              <div className="form-group">
                <label className="control-label">* Security Code</label>
                <input
                  className="form-control mod--center"
                  onFocus={focusHandler}
                  onBlur={(e) => {
                    onBlurSecurityHandler(e);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="new-address__header">
          <span className="label label-default">Billing Address</span>
        </div>
        <div className="form-group">
          <label className="control-label">Saved Address</label>
          <select className="form-control saved-address" onFocus={focusHandler}>
            <option className="saved-address-option">
              Select a saved address
            </option>
            <option className="saved-address-option" value="8829778">
              xyz, KA 560061 IND
            </option>
          </select>
        </div>
        <div className="new-address">
          <div className="form-group">
            <label className="control-label">Address line 1</label>
            <input
              className="form-control"
              type="text"
              onFocus={focusHandler}
            />
          </div>
          <div className="form-group">
            <label className="control-label">Address line 2</label>
            <input
              className="form-control"
              type="text"
              onFocus={focusHandler}
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <div className="custom-select">
                  <label className="control-label">Country</label>
                  <select
                    className="custom-select__select form-control"
                    onFocus={focusHandler}
                  >
                    <option>Not Selected</option>
                    <option value="AFG">Afghanistan</option>
                    <option value="ALA">Åland Islands</option>
                    <option value="ALB">Albania</option>
                    <option value="DZA">Algeria</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">City</label>
                <input
                  className="form-control"
                  type="text"
                  onFocus={focusHandler}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <div className="form-group">
                  <label className="control-label">State/Province</label>
                  <input
                    className="form-control"
                    type="text"
                    onFocus={focusHandler}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Zip Code</label>
                <input
                  className="form-control"
                  type="text"
                  onFocus={focusHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <button
              type="button"
              className="btn-primary btn btn-default"
              onClick={saveHandler}
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    checkStatus: state.routeChange.checkStatus,
  };
};

export default connect(mapStateToProps)(PaymentInformationCheckout);
