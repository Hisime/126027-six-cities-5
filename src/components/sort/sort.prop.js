import PropTypes from "prop-types";
import {sortTypes} from "../../consts";

const sortPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOf([
    sortTypes.POPULAR,
    sortTypes.PRICE_ASC,
    sortTypes.PRICE_DES,
    sortTypes.TOP_DES,
  ]).isRequired,
});

export default {
  currentSort: PropTypes.oneOf([
    sortTypes.POPULAR,
    sortTypes.PRICE_ASC,
    sortTypes.PRICE_DES,
    sortTypes.TOP_DES,
  ]).isRequired,
  sortList: PropTypes.arrayOf(sortPropType).isRequired,
  isSortOpen: PropTypes.bool.isRequired,
  toggleSort: PropTypes.func.isRequired,
};
