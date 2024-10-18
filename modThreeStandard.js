/**
 * A Finite State Machine (FSM) is a computational model 
 * used to design systems that can be in one of a finite 
 * number of specific states at any given time. 
 * It is particularly useful in describing the behavior of 
 * systems that react to a sequence of inputs or events.
 * 
 * An FSM consists of:
 * 
 * States: Distinct modes in which the system can exist. (move)
 * Transitions: The rules that dictate how the system moves from one state to another, 
 * (? what determine the transition)
 * Initial State: The state in which the system starts. (I need to understand the initial state)
 * Final States (for some FSMs): States that represent a conclusion or halting 
 * condition for the system. (module three)
 * 
 * Input = 110
 * Output = 0
 *
 *  Table
 *  S0 = 1 * 0 = 0
 *  S1 = 1 * 1 = 1
 *  S2 = 1 * 2 = 2 
 * 
 * Test
 * 110 = S0 = 1 * 0 = 0 move to S0, 
 *       S1 = 1 * 1 = 1 move to S1,
 *       S2 = 0 * 2 = 0 move to S0
 * Result should be S0 = 0
 */

const modThreeStandard = (string) => {

    if (typeof string !== 'string') return 'Input is not a string';

    const isStringBinary = /^[01]*$/;
    if (!isStringBinary.test(string)) return NaN;

    finalState = {
        S0: 0,
        S1: 1,
        S2: 2
    }

    let currentState = 'S0';
    
    for (const input of string) {
        if (input === '0' && currentState === 'S0') {
            currentState = 'S0';
        } else if (input === '1' && currentState === 'S0') {
            currentState = 'S1';
        } else if ( input === '0' && currentState === 'S1') {
            currentState = 'S2';
        } else if (input === '1' && currentState === 'S2') {
            currentState = 'S2';
        } else if (input === '0' && currentState === 'S2'){
            currentState = 'S1';
        } else if (input === '1' && currentState === "S1") {
            currentState = 'S0';
        }
    }

    return finalState[currentState] % 3;
}

module.exports = modThreeStandard;