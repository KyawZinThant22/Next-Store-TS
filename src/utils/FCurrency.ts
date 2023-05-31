import numeral from 'numeral';

type InputValue = string | number | null;

export function fCurrency(number: InputValue) {
   const format = number ? numeral(number).format('$0,0.00') : '';

   return result(format, '.00');
}

function result(format: string, key = '.00') {
   const isInteger = format.includes(key);

   return isInteger ? format.replace(key, '') : format;
}
