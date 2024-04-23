


const myData = {
    data: [
        {
            title: 'Variables',
            content: 'Var:  , Let:  , Const: ',
            definition: 'Var: Variables declared with the var keyword can be re-declared and updated within their scope. Let: Variables declared with the let keyword can be updated but not re-declared. Const: Variables declared with the const keyword cannot be updated or re-declared.'
        },
        {
            title: 'JavaScript Concepts',
            content: 'Hoisting: In JavaScript, variable and function declarations are hoisted to the top of their containing scope during compilation, but not their assignments.',
            definition: 'Callback Functions: In JavaScript, a callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action or operation. Closures: A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). It gives you access to an outer function’s scope from an inner function.'
        }
    ]
};

// Function to get cards data
function getCardsData() {
    return myData.data;
}
