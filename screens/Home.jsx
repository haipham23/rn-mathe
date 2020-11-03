import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import { SIZES, COLORS } from '../constants';
import { quizzes } from '../fixtures';

const ListItem = ({ title, author, navigate }) => (
  <TouchableOpacity
    style={[
      {
        borderRadius: 10,
        padding: 15,
        margin: 10,
        backgroundColor: COLORS.white
      },
      styles.shadow
    ]}
    onPress={() => navigate('Question')}
  >
    <View
      style={{
        padding: 10
      }}
    >
      <Text style={{ fontSize: SIZES.body3 }}>{title}</Text>
      <Text
        style={{ marginTop: 10, color: COLORS.gray, fontSize: SIZES.body4 }}
      >
        {`author: ${author}`}
      </Text>
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

export default Home;
