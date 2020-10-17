import React, {Fragment} from "react";
import Rating from "../../mocks/rating";

export class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      review: ``
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value: review} = evt.target;
    this.setState({[name]: review});
  }

  handleRatingChange(evt) {
    const {name, value: rating} = evt.target;
    this.setState({[name]: rating});
  }


  render() {
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {Rating.map((rate, i) => (
            <Fragment key={i}>
              <input
                onChange={this.handleRatingChange}
                className="form__rating-input visually-hidden"
                name="rating"
                value={rate.value}
                id={`${rate.value}-stars`}
                type="radio"
              />
              <label htmlFor={`${rate.value}-stars`} className="reviews__rating-label form__rating-label" title={rate.title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}
        </div>
        <textarea
          onChange={this.handleFieldChange}
          className="reviews__textarea form__textarea"
          id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}
