import PropTypes from "prop-types";
import {sortTypes} from "../../consts";

export default {
  currentSort: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOf([
      sortTypes.POPULAR,
      sortTypes.PRICE_ASC,
      sortTypes.PRICE_DES,
      sortTypes.TOP_DES,
    ]).isRequired,
  }),
  isSortOpen: PropTypes.bool.isRequired,
  toggleSort: PropTypes.func.isRequired,
};
