import React from 'react';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/esm/locale';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

function truncate(text) {
  const replaced = text.replace(/\n/g, ' ');
  if (replaced.lenght <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat('...');
}

function formatDate(date) {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, {addSuffix: true, locale: ko});
  }
  return format(d, 'PPP EEE p', {locale: ko});
}

function FeedListItem({log}) {
  const {title, body, date} = log;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Write', {
      log,
    });
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}
      onPress={onPress}>
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text>{truncate(body)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});

export default FeedListItem;
