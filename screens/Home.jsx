import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import { SIZES, COLORS } from '../constants';
import { quizzes } from '../fixtures';

const ListItem = ({ title, author, navigate }) => (
  <TouchableOpacity
    style={{
      backgroundColor: COLORS.lightGray3,
      borderRadius: 2,
      margin: 10
    }}
    onPress={() => navigate('Question')}
  >
    <View
      style={{
        padding: 10
      }}
    >
      <Text numberOfLines={1} style={{}}>
        {title}
      </Text>
      <Text style={{}}>{author}</Text>
    </View>
  </TouchableOpacity>
);

const Home = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ paddingVertical: SIZES.padding, alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
    <View style={{ flex: 1 }}>
      <FlatList
        data={quizzes}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            author={item.author}
            navigate={navigation.navigate}
          />
        )}
        keyExtractor={({ id }) => id}
      />
    </View>
  </SafeAreaView>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};

export default Home;
