import {useState, useRef} from 'react';

enum Operadores {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operadores>();

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const assembleNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') return;
    if (number.startsWith('0' || number.startsWith('-0'))) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let numberTemp = number;
    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substring(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumber();
    lastOperation.current = Operadores.divide;
  };

  const btnMultiply = () => {
    changeNumber();
    lastOperation.current = Operadores.multiply;
  };

  const btnSubtract = () => {
    changeNumber();
    lastOperation.current = Operadores.subtract;
  };

  const btnAdd = () => {
    changeNumber();
    lastOperation.current = Operadores.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operadores.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operadores.subtract:
        setNumber(`${num2 - num1}`);
        break;

      case Operadores.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operadores.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPreviousNumber('0');
  };

  return {
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
  };
};
