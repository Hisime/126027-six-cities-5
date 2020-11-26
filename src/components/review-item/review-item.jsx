import React from "react";
import {reviewPropType} from "../../propTypes";

const ReviewItem = (props) => {
  const {
    review: {
      rating,
      date,
      comment,
      user,
    }
  } = props;
  const options = {
    month: `long`,
    year: `numeric`,
  };
  const humanDate = new Date(props.review.date).toLocaleString(`en-US`, options);
  const avatarUrl = user.avatar_url;
  const userName = user.name;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54"
            alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}px`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{humanDate}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: reviewPropType.isRequired,
};

export {ReviewItem};

