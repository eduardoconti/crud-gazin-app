function defaultFormValuesState() {
    return {
        nome: '',
        idade: '',
        sexo: '',
        hobby: '',
        datanascimento: ''
    }
}

function defaultAlertState() {
    return {
        isOpen: false,
        message: '',
        type: ''
    }
}

export {
    defaultFormValuesState,
    defaultAlertState
}