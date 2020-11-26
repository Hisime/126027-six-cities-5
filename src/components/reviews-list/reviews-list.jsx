import React, {Fragment} from "react";
import {ReviewItem} from "../review-item/review-item";
import PropTypes from "prop-types";
import {reviewPropType} from "../../propTypes";

const ReviewsList = (props) => {
  const {reviews} = props;
  const reviewsView = reviews
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);
  return (
    <Fragment>
      <h2 className="reviews__title">
        Reviews &middot;{` `}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewsView.map((review, i) => (
          <ReviewItem key={`review-${i}`} review={review}/>
        ))}
      </ul>
    </Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropType),
};

export {ReviewsList};
