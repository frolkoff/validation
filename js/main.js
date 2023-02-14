const regExps = {
    login: /^[a-z0-9_-]{3,16}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    pass: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/
}

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.input');

const inputsData = {};

inputs.forEach( (input) => {
    inputsData[input.name] = {
        value: input.value,
        isValid: false,
    }
});

const testValidation = (input) => {
    if (input.name.includes('confirm')) {
        const rootInputName = input.name.replace('_confirm', '');
        return regExps[rootInputName].test(input.value) && input.value === inputsData[rootInputName].value;
    }
    return regExps[input.name].test(input.value)
}

const changeInput = (input) => {
    inputsData[input.name] = {
        value: input.value,
        isValid: testValidation(input)
    }
};


form.onchange = (e) => {
    const target = e.target;
    if (target.className !== 'input') return;
    console.log(inputsData)
    changeInput(target)
}

// console.log(Object.values(inputsData).map(({isValid}) => isValid).includes(false))




