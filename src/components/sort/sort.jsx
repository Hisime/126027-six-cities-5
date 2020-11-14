import React from "react";
import {connect} from "react-redux";
import sortList from "../../mocks/sort-list";
import {ActionCreator} from "../../store/action";
import sortProp from "./sort.prop";

export const Sort = (props) => {
  const {currentSort, isSortOpen, toggleSort, setSort} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleSort}>
        {currentSort.label}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpen ? `places__options--opened` : ``}`}>
        {sortList.map((item, i) => (
          <li
            className={`places__option ${(item === currentSort) ? `places__option--active` : ``}`}
            tabIndex="0"
            value={item.value}
            key={i + item.label}
            onClick={() => {
              setSort(i);
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

const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
  isSortOpen: state.isSortOpen
});

const mapDispatchToProps = (dispatch) => ({
  toggleSort() {
    dispatch(ActionCreator.toggleSort());
  },
  setSort(index) {
    dispatch(ActionCreator.setSort(index));
  },
});

Sort.propTypes = sortProp;

export default connect(mapStateToProps, mapDispatchToProps)(Sort);


