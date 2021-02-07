import { defaultFormValuesState } from "../../common/DefaultStates"
import { create, update,  } from '../../common/ApiFunctions'

async function createDeveloper(formValues, setStateFormValues, setStateIsChangeDeveloper, setAlert) {

    let codResponse, type, message

    codResponse = await create(formValues)

    if (codResponse === 0 || !codResponse === 200) {
        message = 'Falha ao Cadastrar'
        type = 'error'
    } else {
        message = 'Desenvolvedor Cadastrado com sucesso!'
        type = 'success'
    }

    setDefaultSatesCommonFromFormDeveloper(setStateFormValues, setStateIsChangeDeveloper)
    setAlert({
        isOpen: true,
        message: message,
        type: type,
    })
}
async function updateDeveloper(formValues, setStateFormValues, setStateIsChangeDeveloper, setAlert) {
    let codResponse, type, message

    codResponse = await update(formValues)

    if (codResponse === 0 || !codResponse === 200) {
        message = 'Falha ao Atualizar'
        type = 'error'
    } else {
        message = 'Desenvolvedor Atualizado com sucesso!'
        type = 'success'
    }

    setDefaultSatesCommonFromFormDeveloper(setStateFormValues, setStateIsChangeDeveloper)

    setAlert({
        isOpen: true,
        message: message,
        type: type,
    })
}

function setDefaultSatesCommonFromFormDeveloper(setStateFormValues, setStateIsChangeDeveloper) {

    setStateFormValues(defaultFormValuesState())
    setStateIsChangeDeveloper(false)

}

export { createDeveloper,
        updateDeveloper } 