import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/news';

class NewsList extends Component {
  componentDidMount() {
      this.props.dispatch(fetchNews());
  }

  render() {
    let content;
    if(this.props.done && this.props.news.length > 0) {
      content = this.props.news.map(news => {
        return (
          <li key={news.id}>{news.attributes.title}</li>
        )
      })
    }
    return (
      <div>
        <h1>News</h1>
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => state.news

export default connect(mapStateToProps)(NewsList);
