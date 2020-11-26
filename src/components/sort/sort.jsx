import React from "react";
import {connect} from "react-redux";
import {FilterActions} from "../../store/action";
import {getSortType} from "../../store/selectors/selectors";
import PropTypes from "prop-types";
import {SortType} from "../../consts";
import {sortPropType} from "../../propTypes";

const Sort = (props) => {
  const {currentSort, isSortOpen, toggleSort, setSort, sortList} = props;
  const currentSortLabel = sortList.find((item) => item.value === currentSort).label;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleSort}>
        {currentSortLabel}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpen ? `places__options--opened` : ``}`}>
        {sortList.map((item, i) => (
          <li
            className={`places__option ${(item.value === currentSort.value) ? `places__option--active` : ``}`}
            tabIndex="0"
            value={item.value}
            key={`${item.label}-${i}`}
            onClick={() => {
              setSort(item.value);
              toggleSort();
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  currentSort: PropTypes.oneOf([
    SortType.POPULAR,
    SortType.PRICE_ASC,
    SortType.PRICE_DES,
    SortType.TOP_DES,
  ]).isRequired,
  sortList: PropTypes.arrayOf(sortPropType).isRequired,
  isSortOpen: PropTypes.bool.isRequired,
  toggleSort: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: getSortType(state),
  isSortOpen: state.DATA.isSortOpen,
  sortList: state.DATA.sortList,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSort() {
    dispatch(FilterActions.toggleSort());
  },
  setSort(sortType) {
    dispatch(FilterActions.setSort(sortType));
  },
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);


