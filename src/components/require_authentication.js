// High Order Component
import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    } // give us access to router context.

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      console.log(this.context);
      //console.log(this.props.authenticated);
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
