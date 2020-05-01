import React from 'react';
import {View, Text} from 'react-native';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import theme from '../../theme/theme';
export default class Chat extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  customView = () => {
    return (
      <View style={{backgroundColor: '#000'}}>
        <Text>test </Text>
      </View>
    );
  };
  renderComposer = () => {
    <View>
      <Text>ffewfew</Text>
    </View>;
  };
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: theme.DARK_BLUE,
            color: theme.LIGHT_COLOR,
          },
        }}
      />
    );
  }

  render() {
    console.log(this.props.navigation.state.params.name);
    return (
      <GiftedChat
        textIn
        minComposerHeight={40}
        // renderCustomView={() => this.customView()}
        // renderComposer={() => this.renderComposer()}
        renderBubble={this.renderBubble}
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
