import { deleteDeveloperFromID  } from '../../common/ApiFunctions'
import { defaultFormValuesState } from "../../common/DefaultStates"
function returnRows(rows) {

    return rows.map((developersRows, index) => {
        developersRows.id = index;
        developersRows.datanascimento = new Date(developersRows.datanascimento).toISOString().slice(0, 10);
        return developersRows;
    });
}

function returnStateForAlertDeveloperExclude(codResponse) {

    let message, type

    if (codResponse === 0 || !codResponse === 204) {
        type = "error"
        message = "Falha ao excluir desenvolvedor!"
    }
    else {
        type = "success"
        message = "Desenvolvedor excluido com sucesso!"
    }

    return {
        isOpen: true,
        message: message,
        type: type
    }
}

async function deleteDeveloper( setStateFormValues, setStateIsChangeDeveloper, setAlert, id ){
    const codResponse = await deleteDeveloperFromID(id)
    const stateAlert = returnStateForAlertDeveloperExclude(codResponse)
    setStateFormValues(defaultFormValuesState)
    setStateIsChangeDeveloper(false)
    setAlert(stateAlert)
}



export { returnRows, deleteDeveloper }