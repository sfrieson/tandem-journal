import React from 'react';
import Bicycle from '../components/bicycle.jsx';
import Posts from '../stores/posts.jsx';
import {Link} from 'react-router';
import mo from 'moment';

module.exports = class Home extends React.Component {
  constructor () {
    super();
    this.state = {years: false};
  }
  componentWillMount () {
    Posts.getPastYears()
    .then(posts => ({years: posts}))
    .then(this.setState.bind(this));

    Posts.getRecent()
    .then(posts => ({recent: posts}))
    .then(this.setState.bind(this));
  }
  render () {
    return (
      <div className='page'>
        <h1>Tandem Journal</h1>
        <p>
          A cute new place to journal with your significant other.
        </p>
        <Bicycle />
        <h2>{mo().format('MMMM Do, YYYY')}</h2>
        <Link to='/post'>
          <button>
            Make new post
          </button>
        </Link>
        {this.renderPastYears()}
        {this.renderRecent()}
      </div>
    );
  }
  renderPosts (post, i) {
    return (
      <li key={i}>
        {this.renderPost(post)}
      </li>
    );
  }
  renderPost (post) {
    return <div><span style={{fontSize: '.8em'}}>{mo([post.year, post.month, post.date]).format('MMMM Do, YYYY')}:</span> <b>{post.name}</b> - {post.question} {post.body}</div>;
  }
  renderRecent () {
    if (!this.state.recent) return null;
    return (
      <div>
        <h2>Recent</h2>
        <ul style={{textAlign: 'left'}}>
          {this.renderByDate(this.state.recent)}
        </ul>
      </div>
    );
  }
  renderPastYears () {
    if (!this.state.years) return null;
    var posts = this.state.years.map(this.renderPost);
    return (
      <div>
        <h2>Past Years</h2>
        <ul style={{textAlign: 'left'}}>
          {posts}
        </ul>
      </div>
    );
  }
  renderByDate (posts) {
    var organized = this.parseDates(posts);
    return <div>{this.byDateYear(Object.keys(organized), organized)}</div>;
  }

  byDateYear (years, obj) {
    if (years.length > 1) {
      return years.map(year => {
        var yearObj = obj[year];
        return (
          <div key={'year-' + year}> {year}
            {this.byDateMonth(Object.keys(yearObj), yearObj)}
          </div>
        );
      });
    } else {
      var year = obj[years[0]];
      return this.byDateMonth(Object.keys(year), year);
    }
  }
  byDateMonth (months, obj) {
    if (months.length > 1) {
      return months.map(month => {
        var monthObj = obj[month];
        return (
          <div key={'month-' + month}> {month}
            {this.byDateDate(Object.keys(monthObj), monthObj)}
          </div>
        );
      });
    } else {
      var month = obj[months[0]];
      return this.byDateDate(Object.keys(month), month);
    }
  }
  byDateDate (dates, obj) {
    return dates.map(date => {
      var posts = obj[date];
      return posts.map(post => {
        return (
          <div key={'date-' + date + post.name}>
            {this.renderPost(post)}
          </div>
        );
      }
      );
    });
  }
  parseDates (arr) {
    var dates = {};
    var year, month, date;
    arr.forEach(post => {
      dates[post.year] = dates[post.year] || {};
      year = dates[post.year];
      year[post.month] = year[post.month] || {};
      month = year[post.month];
      month[post.date] = month[post.date] || [];
      date = month[post.date];
      date.push(post);
    });
    return dates;
  }
};
