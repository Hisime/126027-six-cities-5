import React, {Fragment} from "react";
import {ReviewItem} from "../review-item/review-item";
import PropTypes from "prop-types";
import {reviewPropType} from "../../propTypes";

export const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    <Fragment>
      <h2 className="reviews__title">
        Reviews &middot;{` `}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => (
          <ReviewItem key={i} review={review}/>
        ))}
      </ul>
    </Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropType),
};
