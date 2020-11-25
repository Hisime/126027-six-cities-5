import React, {createRef, Fragment} from "react";
import {sendComment} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getRatingList} from "../../store/selectors/selectors";

class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.ratingRef = createRef();
    this.commentRef = createRef();
    this.commentMinLength = 50;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const formData = {
      rating: this.ratingRef.current.value,
      comment: this.commentRef.current.value
    };
    this.props.sendComment(this.props.id, formData);
  }

  render() {
    const {ratingList} = this.props;
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingList.map((rate, i) => (
            <Fragment key={i}>
              <input
                onChange={this.handleRatingChange}
                className="form__rating-input visually-hidden"
                name="rating"
                ref={this.ratingRef}
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
          onChange={this.handleFieldChange}
          className="reviews__textarea form__textarea"
          id="review" name="comment"
          required
          ref={this.commentRef}
          minLength={50}
          placeholder="Tell how was your stay, what you like and what can be improved"
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">{this.commentMinLength} characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit"
          >Submit</button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  id: PropTypes.string.isRequired,
  sendComment: PropTypes.func.isRequired,
  ratingList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    title: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (dispatch) => ({
  ratingList: getRatingList(dispatch),
});

const mapDispatchToProps = (dispatch) => ({
  sendComment(id, formData) {
    dispatch(sendComment(id, formData));
  },
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
