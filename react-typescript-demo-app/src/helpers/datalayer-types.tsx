interface PageInfo {
  pageName?: string;
  langCountry?: string;
  siteName?: string;
  server?: string;
}

interface Category {
  siteSection?: string;
  siteSectionLevel2?: string;
  siteSectionLevel3?: string;
  hier1?: string;
}

interface User {
  loginStatus: string;
}

export interface GenericPageLoad {
  event: string;
  eventInfo: string;
  page: {
    pageInfo?: PageInfo;
    category?: Category;
  };
  user: User;
}

export interface UserLoginInfo {
  event: string;
  eventInfo: string;
  user: {
    profileCompletion: string;
    membershipTier: string;
    membershipStatus: string;
    region: string;
    autoRenewal: string;
    certificationStatus: string;
    pduStatus: string;
    pmiID: string;
    pmID: string;
    membershipSegement: string;
    certificationSegement: string;
    userSegement: string;
  };
}

interface ProductItem {
  productName: string;
  productCat: string;
}

export interface CheckOutScreenLoad {
  event: string;
  eventInfo: string;
  action: string;
  cart: {
    product: Array<ProductItem>;
  };
}

export interface CertificationAppLoad {
  event: string;
  eventInfo: string;
  action: string;
  certification: {
    applicationID: number;
    certName: string;
    step: string;
    status: string;
  };
}

export interface AddToCartData {
  event: string;
  eventInfo: string;
  action: string;
  cart: {
    cartLocation: string;
    product: Array<ProductItem>;
    link: {
      linkTitle: string;
      module: string;
    };
  };
}

export interface GenericLink {
  event: string;
  eventInfo: string;
  link: {
    linkTitle: string;
    linkModule: string;
    targetURL: string;
  };
}

export interface PaymentDataLoad {
  event: string;
  eventInfo: string;
  action: string;
  cart: {
    product: Array<ProductItem>;
  };
}

export interface FormInteraction {
  event: string;
  eventInfo: string;
  form: {
    action: string;
    formName: string;
    formError: string;
    ssoplatform: string;
  };
}
