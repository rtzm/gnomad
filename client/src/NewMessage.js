import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';

class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  // handleChange(event) {
  //   this.setState({
  //     value: event.target.value,
  //   });
  // }

  // makeMessageRequest(value) {
  //   var data = new FormData();
  //   data.append("personal_message[body]", value);
  //   data.append("personal_message[receiver_id]", this.props.receiverId);
  //   data.append("personal_message[conversation_id]", this.props.conversationId);
  //   return data;
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch(`/conversations/${this.props.conversationId}/personal_messages`, {
  //     method: "POST",
  //     body: this.makeMessageRequest(this.state.value),
  //     headers: {
  //       'Authorization': localStorage.getItem('gnomad-auth-token')
  //     },
  //     // mode: 'no-cors',
  //   })
  // }

  render() {
    return (
      <div className="bottom-display">
      <Form className="icon input" fixed="bottom" id="personal-message-form" onSubmit={this.props.sendMessageHandler}>
        <textarea id="new-message" name="personal_message" value={this.props.value} onChange={this.props.changeHandler} />
        <input className="ui button vertical-align-bottom blue button-max-height" type="submit" value="Send" />
      </Form>
      </div>
    );
  }
}

export default NewMessage;
