import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
const baseStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  taskText: {
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 17,
  },
});
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultGreenColor,
    ...baseStyle.container,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskText: {
    color: Colors.defaultDarkColor,
    ...baseStyle.taskText,
  },
  completedContainer: {
    ...baseStyle.container,
    backgroundColor: Colors.defaultGreyColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  completedTaskText: {
    ...baseStyle.taskText,
    color: 'white',
    textDecorationLine: 'line-through',
  },
  icon: {flexDirection: 'row'},
  buttonAction: {marginHorizontal: 5},
});
