import React, {Fragment} from "react";
import {sendComment} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getRatingList} from "../../store/selectors/selectors";

const ReviewForm = (props) => {
  const commentMinLength = 50;
  const commentMaxLength = 300;
  const {ratingList, onSendComment, id} = props;
  const [comment, setComment] = React.useState(``);
  const [isPending, setPending] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [isFailed, setFailed] = React.useState(false);

  const errorBlock = {
    position: `absolute`,
    top: `0`,
    right: `0`,
    padding: `20px`,
    boxShadow: `0 0 10px rgba(0,0,0,0.5)`,
    transform: `translateX(100%)`,
  };

  const form = {
    position: `relative`,
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.persist();
    setPending(true);
    const formData = {
      rating,
      comment,
    };
    onSendComment(id, formData)
    .then(() => {
      setPending(false);
      setFailed(false);
      evt.target.reset();
    }, () => {
      setPending(false);
      setFailed(true);
    });
  };

  const handleCommentChange = (evt) => {
    const {value} = evt.target;
    setComment(value);
  };

  const handleRatingChange = (evt) => {
    const {value} = evt.target;
    setRating(value);
  };

  const isFormValid = () => {
    const isCommentValid = comment.length >= commentMinLength && comment.length <= commentMaxLength;
    const isRatingValid = rating > 0;
    return isCommentValid && isRatingValid && !isPending;
  };

  return (
    <form className="reviews__form form" style={form} onSubmit={handleSubmit}>
      {isFailed && (
        <div style={errorBlock}>
          Отзыв не отправлен
        </div>
      )}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingList.map((rate, i) => (
          <Fragment key={i}>
            <input
              onChange={handleRatingChange}
              className="form__rating-input visually-hidden"
              name="rating"
              required
              value={rate.value}
              id={`${rate.value}-stars`}
              type="radio"
            />
            <label htmlFor={`${rate.value}-stars`} className="reviews__rating-label form__rating-label"
              title={rate.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        onChange={handleCommentChange}
        className="reviews__textarea form__textarea"
        id="review" name="comment"
        required
        minLength={commentMinLength}
        maxLength={commentMaxLength}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">{commentMinLength} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" disabled={!isFormValid()} type="submit">Submit
        </button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.string.isRequired,
  onSendComment: PropTypes.func.isRequired,
  ratingList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    title: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (dispatch) => ({
  ratingList: getRatingList(dispatch),
});

const mapDispatchToProps = (dispatch) => ({
  onSendComment(id, formData) {
    return dispatch(sendComment(id, formData));
  },
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
