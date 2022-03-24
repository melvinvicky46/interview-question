import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  adobeDataLayerPush,
  resetAdobeDataLayer,
} from "../helpers/datalayer-react";
import { GenericPageLoad } from "../helpers/datalayer-types";

function GenericScreenLoad(props: any) {
  const { checkStatus } = props;

  useEffect(() => {
    const pageData = {
      event: "",
      eventInfo: "",
      page: {
        pageInfo: {
          pageName: "Overri@ding Generic Page Name",
          langCountry: "EN-US",
          siteName: "PMi",
          server: "PmI.Org",
        },
        category: {
          siteSection: "aRiTi&cle",
          siteSectionLevel2: "234325",
          siteSectionLevel3: "Tes Arti",
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
    adobeDataLayerPush(pageData as GenericPageLoad);
  }, [checkStatus]);

  return (
    <div>
      <h2> Generic {checkStatus} Load </h2>
      <h3>Tracking Generic {checkStatus} Load</h3>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    checkStatus: state.routeChange.checkStatus,
  };
};

export default connect(mapStateToProps)(GenericScreenLoad);
