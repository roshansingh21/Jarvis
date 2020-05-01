import {StyleSheet, Platform} from 'react-native';
import theme from '../../theme/theme';
export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: '3%',
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginRight: 15,
  },
  nameContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  nameTxt: {
    color: theme.LIGHT_COLOR,
    fontFamily: theme.SEMIBOLD_FONT,
    fontSize: 18,
    flex: 0.9,
  },
  mblTxt: {
    backgroundColor: theme.LIGHT_COLOR,
    color: theme.DARK_BLUE,
    fontFamily: theme.DEFAULT_FONT,
    fontSize: 10,
    paddingHorizontal: 10,
    flex: 0.1,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    color: theme.LIGHT_COLOR_ALPHA,
    fontFamily: theme.DEFAULT_FONT,
    fontSize: 10,
    paddingVertical: 5,
  },
  content: {
    flexWrap: 'wrap',
    color: theme.LIGHT_COLOR,
    fontFamily: theme.DEFAULT_FONT,
    fontSize: 12,
  },
  contentPic: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    borderColor: theme.LIGHT_COLOR,
    borderWidth: 1,
  },
});
