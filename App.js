import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const IntroPage = ({ onStartCalculator }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Calculator App</Text>
      <TouchableOpacity style={styles.startButton} onPress={onStartCalculator}>
        <Text style={styles.startButtonText}>Start Calculator</Text>
      </TouchableOpacity>
    </View>
  );
};

const CalculatorApp = () => {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CALCULATOR</Text>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}>
          <Text>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  const startCalculator = () => {
    setShowCalculator(true);
  };

  return (
    <View style={styles.container}>
      {!showCalculator ? (
        <IntroPage onStartCalculator={startCalculator} />
      ) : (
        <CalculatorApp />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  header: {
    fontSize:25,
    marginBottom:415,
    marginTop:-35,
  },
  subText: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    fontSize: 24,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    margin: 5,
    height: 50,
    borderRadius:50,
  },
});

export default App;
