import {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const clear = () => {
    setNumber('0');
  };

  const assembleNumber = (numberText: string) => {
    setNumber(number + numberText);
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{previousNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clear} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={clear} />
        <ButtonCalc text="/" color="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={assembleNumber} />
        <ButtonCalc text="8" action={assembleNumber} />
        <ButtonCalc text="9" action={assembleNumber} />
        <ButtonCalc text="X" color="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={assembleNumber} />
        <ButtonCalc text="5" action={assembleNumber} />
        <ButtonCalc text="6" action={assembleNumber} />
        <ButtonCalc text="-" color="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={assembleNumber} />
        <ButtonCalc text="2" action={assembleNumber} />
        <ButtonCalc text="3" action={assembleNumber} />
        <ButtonCalc text="+" color="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" widthProp action={assembleNumber} />
        <ButtonCalc text="." action={assembleNumber} />
        <ButtonCalc text="=" color="#FF9427" action={clear} />
      </View>
    </View>
  );
};
