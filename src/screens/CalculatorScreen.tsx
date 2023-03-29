import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    previousNumber,
    number,
    clear,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnAdd,
    assembleNumber,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clear} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={btnDivide} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={assembleNumber} />
        <ButtonCalc text="8" action={assembleNumber} />
        <ButtonCalc text="9" action={assembleNumber} />
        <ButtonCalc text="X" color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={assembleNumber} />
        <ButtonCalc text="5" action={assembleNumber} />
        <ButtonCalc text="6" action={assembleNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnSubtract} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={assembleNumber} />
        <ButtonCalc text="2" action={assembleNumber} />
        <ButtonCalc text="3" action={assembleNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" widthProp action={assembleNumber} />
        <ButtonCalc text="." action={assembleNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
