import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> {props.headerText}</Text>
    </View>
  );
}
const styles = {
  viewStyle: {
    backgroundColor: '#f00',
    paddingTop: 15,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width : 0, height: 2},
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    // textAlign: 'center',
    fontSize: 20,
    margin: 0,
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'

  }
}
export default Header;
