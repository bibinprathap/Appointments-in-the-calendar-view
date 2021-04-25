import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements'; 
import {IconBack} from '../assets/svg/svg';

import {Actions, ActionConst} from 'react-native-router-flux';

const RNHeader = (props) => {
  const {
    color,
    back,
    titleHeader,
    rightButton,
    rightPress,
    leftButton,
    leftPress,
    ...rest
  } = props;
  return (
    <Header
      placement="left"
      containerStyle={{
        backgroundColor:'#1b75bc',
        borderBottomColor: '#1b75bc',
        zIndex: 3,
      }}
      leftComponent={
        <View>
          {back ? (
            <TouchableOpacity
              style={styles.leftComp}
              onPress={() => {
                Actions.secondScreen();
              }}>
              <IconBack />
            </TouchableOpacity>
          ) : (
            leftButton && (
              <TouchableOpacity style={styles.leftComp} onPress={leftPress}>
                {leftButton}
              </TouchableOpacity>
            )
          )}
        </View>
      }
      centerComponent={
        <Text
          style={[
            {
              fontSize: 18,
            },
            {color: color ? color : 'white'},
          ]}>
          {titleHeader}
        </Text>
      }
      rightComponent={
        rightButton && (
          <View>
            {rightButton && <View style={styles.rightComp}>{rightButton}</View>}
          </View>
        )
      }
      statusBarProps={{
        translucent: true,
        backgroundColor: 'transparent',
      }}></Header>
  );
};

export default RNHeader;

const styles = StyleSheet.create({
  leftComp: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightComp: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
