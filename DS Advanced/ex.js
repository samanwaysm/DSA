

var evalRPN = function (tokens) {
    const stack = []

    const isOperator = (str) => {
        return str === "+" || str === "-" || str === "*" || str === "/"
    }

    for (const token of tokens) {
        if (isOperator(token)) {
            const elem2 = parseInt(stack.pop())
            const elem1 = parseInt(stack.pop())
            let result = 0

            if (token === "+") {
                result = elem1 + elem2
            } else if (token === "-") {
                result = elem1 - elem2
            } else if (token === "*") {
                result = elem1 * elem2
            } else if (token === "/") {
                result = Math.trunc(elem1 / elem2)
            }
            stack.push(result.toString())
        } else {
            stack.push(token)
        }
    }
    return parseInt(stack.pop())
};


tokens = ["2","1","+","3","*"]
console.log(evalRPN(tokens));

