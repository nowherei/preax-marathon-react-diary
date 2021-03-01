import React from "react";
import classes from '../NewNote/NewNote.module.css';


class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubit} className={classes.searchForm}>
        <div className={classes.input}>
          <input type='text' value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} placeholder='Поиск' />
        </div>
        <button className={`${classes.btn} ${classes.btn__search}`} type='button'></button>
      </form>
    )
  }
}

export default SearchBar;
