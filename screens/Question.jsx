import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import { SIZES, COLORS } from '../constants';
import { quiz } from '../fixtures';

const Question = () => {
  const [idx, setIdx] = useState(0);

  const maxItem = quiz.list.length - 1;
  const currentQuiz = quiz.list[idx];

  const goNext = () => {
    if (idx < maxItem) {
      setIdx(idx + 1);
    }
  };

  const goBack = () => {
    if (idx > 0) {
      setIdx(idx - 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: SIZES.padding }}>
        <Text>{currentQuiz.question}</Text>
      </View>
      <View style={{ flex: 1 }}>
        {currentQuiz.options.map(({ id, text }) => (
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.lightGray3,
              borderRadius: 2,
              margin: 10
            }}
          >
            <View
              style={{
                padding: 10
              }}
            >
              <Text style={{}}>{`${id}. ${text}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.lightGray3,
            borderRadius: 2,
            margin: 10
          }}
          onPress={goBack}
          disabled={idx <= 0}
        >
          <View
            style={{
              padding: 10
            }}
          >
            <Text style={{}}>Back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: 2,
            margin: 10
          }}
          onPress={goNext}
          disabled={idx >= maxItem}
        >
          <View
            style={{
              padding: 10
            }}
          >
            <Text style={{}}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Question;
