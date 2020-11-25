import PropTypes from "prop-types";
import {SortType} from "../../consts";

const sortPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOf([
    SortType.POPULAR,
    SortType.PRICE_ASC,
    SortType.PRICE_DES,
    SortType.TOP_DES,
  ]).isRequired,
});

export default {
  currentSort: PropTypes.oneOf([
    SortType.POPULAR,
    SortType.PRICE_ASC,
    SortType.PRICE_DES,
    SortType.TOP_DES,
  ]).isRequired,
  sortList: PropTypes.arrayOf(sortPropType).isRequired,
  isSortOpen: PropTypes.bool.isRequired,
  toggleSort: PropTypes.func.isRequired,
};
