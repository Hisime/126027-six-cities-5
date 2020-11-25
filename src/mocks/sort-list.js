import {SortType} from "../consts";

export default [
  {
    value: SortType.POPULAR,
    label: `Popular`,
  },
  {
    value: SortType.PRICE_ASC,
    label: `Price: low to high`,
  },
  {
    value: SortType.PRICE_DES,
    label: `Price: high to low`,
  },
  {
    value: SortType.TOP_DES,
    label: `Top rated first`,
  },
];
