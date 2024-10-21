/*
Advanced Exercise
The FSM described above is an example of finite state automata. With the help of the abstract
definition below, create a software module for generating an FSM. The API of your library
should be designed for use by other developers. Implement the ‘mod-three’ procedure as an
example.
Finite Automation
A finite automaton (FA) is a 5-tuple (Q,Σ,q0,F,δ) where,
Q is a finite set of states;
Σ is a finite input alphabet;
q0 ∈ Q is the initial state;
F ⊆ Q is the set of accepting/final states; and
δ:Q×Σ→Q is the transition function.
For any element q of Q and any symbol σ∈Σ, we interpret δ(q,σ) as the state to which the FA
moves, if it is in state q and receives the input σ.
Mod-Three FA
Based on the notation from the definition, our modulo three FSM would be configured as
follows:
Q = (S0, S1, S2) // states
Σ = (0, 1) // alphabet
q0 = S0 // initial state
F = (S0, S1, S2) // final state
δ(S0,0) = S0; δ(S0,1) = S1; δ(S1,0) = S2; δ(S1,1) = S0; δ(S2,0) = S1; δ(S2,1) = S2 // transition
*/

const states = ['S0', 'S1', 'S2'];
const alphabet = ['0', '1'];
let currentState = 'S0';
const finalState = { S0: 0, S1: 1, S2: 2}

const transitions = (state, symbol) => {
    switch(state) {
        case 'S0':
            return symbol === '0' ? 'S0' : 'S1';
        case 'S1':
            return symbol === '0' ? 'S2' : 'S0';
        case 'S2':
            return symbol === '0' ? 'S1' : 'S2';
        default:
            console.log('Symbol no found');
    }
}

const modThreeAdvanced = (string) => {

    if (typeof string !== 'string') throw new Error('Input is not a string');

    let currentState = 'S0';

    for (let symbol of string) {

        if (!alphabet.includes(symbol)) {
            throw new Error('Invalid symbol')
        }

        currentState = transitions(currentState, symbol);
    }

    if(finalState[currentState] !== undefined) {
        return finalState[currentState];
    } else {
        throw new Error('Final state is not valid.');
    }
}

modThreeAdvanced('10010');