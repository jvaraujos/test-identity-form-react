import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(number: string | number) {
  return numeral(number).format(Number.isInteger(number) ? '$0.00' : '$0.00');
}

export function fPercent(number: number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number: string | number) {
  return numeral(number).format();
}

export function fShortenNumber(number: string | number) {
  return numeral(number).format('0.00a').replace('.00', '');
}


export function fData(number: string | number) {
  return numeral(number).format('0.0 b');
}

export function fCurrencyBR(number: string | number) {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }; 
   const valorFormatado = number.toLocaleString('pt-BR', options);
  return valorFormatado
}
