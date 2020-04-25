/* Given a string, convert it to an integer without using the builtin str function. You are allowed to use ord to convert a character to ASCII code.

Consider all possible cases of an integer. In the case where the string is not a valid integer, return None.

Here's some starting code:

def convert_to_int(s):
  # Fill this in.

print(convert_to_int('-105') + 1)
# -104
*/


function convert_to_int( str ) {
  const CHAR_CODE_DIFF = 48;
  let ans = 0;
  let i = 0, isNegativeSign = false;

  if ( str.charCodeAt( 0 ) === 45 ) {
    isNegativeSign = true;
    i = 1
  }
  if ( str.charCodeAt( 0 ) === 43 ) {
    i = 1
  }
  for( i; i < str.length; i++ ) {
    // If negative number
    if ( isNegativeSign ) {
      ans += ( str.charCodeAt(i) - CHAR_CODE_DIFF ) * ( -1 * Math.pow( 10, ( str.length - 1 ) - i ) );
    } else {
      ans += ( str.charCodeAt(i) - CHAR_CODE_DIFF ) * ( 1 * Math.pow( 10, ( str.length - 1 ) - i ) );
    }
  }
  return ans;
}

console.log(convert_to_int('105') + 1);

// O (N) for memory and time