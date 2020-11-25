export const OfferType = {
  APARTMENT: `Apartment`,
  ROOM: `Private Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

export const Ratings = [
  {
    title: `perfect`,
    value: 5,
  },
  {
    title: `good`,
    value: 4,
  },
  {
    title: `not bad`,
    value: 3,
  },
  {
    title: `badly`,
    value: 2,
  },
  {
    title: `terribly`,
    value: 1
  }
];


export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const OfferListType = {
  MAIN: `MAIN`,
  ROOM: `ROOM`,
  FAVORITES: `FAVORITES`,
};

export const SortType = {
  POPULAR: `POPULAR`,
  PRICE_ASC: `PRICE_ASC`,
  PRICE_DES: `PRICE_DES`,
  TOP_DES: `TOP_DES`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  LOGIN: `/login`,
  MAIN: `/main`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`,
};

export const APIRoute = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
  NEARBY_OFFERS: `/nearby`,
};

export const FavoritesResponseType = {
  MAIN: `MAIN`,
  NEARBY_OFFERS: `NEARBY_OFFERS`,
  FAVORITES: `FAVORITES`,
  OFFER: `OFFER`,
};
