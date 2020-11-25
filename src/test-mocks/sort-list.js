import {sortTypes} from "../consts";

export const sortListMock = [
  {
    value: sortTypes.POPULAR,
    label: `Popular`,
  },
  {
    value: sortTypes.PRICE_ASC,
    label: `Price: low to high`,
  },
  {
    value: sortTypes.PRICE_DES,
    label: `Price: high to low`,
  },
  {
    value: sortTypes.TOP_DES,
    label: `Top rated first`,
  },
];
