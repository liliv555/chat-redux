import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.chatRefresh = setInterval(this.fetchMessages, 3000);
  }

  componentDidUpdate() {
    this.chatSroll.scrollTop = this.chatSroll.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.chatRefresh);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render () {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content" ref={(chatSroll) => { this.chatSroll = chatSroll; }}>
          {
            this.props.messages.map((message) => {
              return <Message key={message.content} message={message} />;
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
