/**
 * Input: string containing ones and zeros
 * Output: the remainder number represented by the binary string
 * 
 * In binary each digit represents a power of 2
 * so 1 in binary is = 1 x 2 power of 0 = 1
 * 
 *   Math.pow(2, 3) = 8 
 * 
 *   1 = 1 * (2 power of 3) = 8
 *   1 = 1 * (2 power of 2) = 4
 *   0 = 0 * (2 power of 1) = 0
 *   1 = 1 * (2 power of 0) = 1
 *   
 *    13 / 3 = reminder is equal 1
 *    
 * Tests
 *  1101 return should be 1
 *  1110 return should be 2
 *  1111 return should be 0
 *  1 return should be 0
 *  '' return should be 0
 */



