import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import { SIZES, COLORS } from '../constants';
import { quiz } from '../fixtures';

const Question = () => {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [grade, setGrade] = useState(null);

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

  const selectAnswer = ({ qId, aId }) => {
    setAnswers({
      ...answers,
      [qId]: aId
    });
  };

  const calculate = () => {
    const thisGrade = quiz.list.reduce(
      (total, { id, answer }) => (answer === answers[id] ? total + 1 : total),
      0
    );

    setGrade(thisGrade);
  };

  const reset = () => {
    setIdx(0);
    setAnswers({});
    setGrade(null);
  };

  if (typeof grade === 'number') {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: SIZES.padding
          }}
        >
          <Text
            style={{ fontSize: 20 }}
          >{`${grade} / ${quiz.list.length}`}</Text>
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
              margin: 10,
              width: '100%'
            }}
            onPress={reset}
          >
            <View
              style={{
                padding: 10
              }}
            >
              <Text style={{ textAlign: 'center' }}>Reset</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: SIZES.padding }}>
        <Text>{currentQuiz.question}</Text>
      </View>
      <View style={{ flex: 1 }}>
        {currentQuiz.options.map(({ id, text }) => (
          <TouchableOpacity
            key={id}
            style={{
              backgroundColor:
                answers[currentQuiz.id] === id
                  ? COLORS.primary
                  : COLORS.lightGray3,
              borderRadius: 2,
              margin: 10
            }}
            onPress={() => selectAnswer({ qId: currentQuiz.id, aId: id })}
          >
            <View
              style={{
                padding: 10
              }}
            >
              <Text
                style={{
                  color:
                    answers[currentQuiz.id] === id ? COLORS.white : COLORS.black
                }}
              >
                {`${id}. ${text}`}
              </Text>
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
            backgroundColor: idx > 0 ? COLORS.lightGray3 : COLORS.white,
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
        {idx < maxItem && (
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: 2,
              margin: 10
            }}
            onPress={goNext}
            disabled={!answers[currentQuiz.id]}
          >
            <View
              style={{
                padding: 10
              }}
            >
              <Text
                style={{
                  color: COLORS.white
                }}
              >
                Next
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {idx === maxItem && (
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: 2,
              margin: 10
            }}
            onPress={calculate}
            disabled={!answers[currentQuiz.id]}
          >
            <View
              style={{
                padding: 10
              }}
            >
              <Text
                style={{
                  color: COLORS.white
                }}
              >
                Done
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Question;
