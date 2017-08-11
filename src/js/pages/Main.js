import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchShopInfo } from '../actions/';
import Header from '../site/Header';
import Nav from '../site/Nav';
import Dashboard from './Dashboard';
import Install from './Install';
import Settings from './Settings';
import Export from './Export';
import Profile from './Profile';

import '../../styles/main.scss';

class Main extends Component {
  componentDidMount () {
    this.props.fetchShopInfo('/shop/shopinfo');
  }
  render () {
    const { data } = this.props.shop;
    return (
      <div className="main">
        <Header shop={this.props.shop} />
        <Nav />
        <Switch>
          <Route path="/settings" component={Settings} />
          <Route path="/export" component={Export} />
          <Route path="/install" component={Install} />
          <Route component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shop: state.shop
  };
};

const mapDispatchToProps = dispatch => {
  return { fetchShopInfo: bindActionCreators(fetchShopInfo, dispatch) };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
