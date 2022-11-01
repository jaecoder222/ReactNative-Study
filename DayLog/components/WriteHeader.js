import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import TransparentCircleButton from './TransparentCircleButton';

function WriteHeader({onSave}) {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
      </View>
      <View style={styles.button}>
        <TransparentCircleButton
          name="delete-forever"
          color="#ef5350"
          hasMarginRight
        />

        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
});

export default WriteHeader;