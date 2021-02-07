import React, { useState, useEffect } from "react"
import { DataGrid } from "@material-ui/data-grid"
import Button from "@material-ui/core/Button"
import { getDevelopers } from '../common/ApiFunctions'
import { defaultAlertState } from "../common/DefaultStates"
import { returnRows, deleteDeveloper } from "./functions/DataGridFunctions"

import Alert from "./Alert"

export default function DataGridComponent({ setStateFormValues, setStateIsChangeDeveloper }) {
  const [rows, setRows] = useState([])
  const [selectedRow, setSelectedRow] = useState([])
  const [alert, setAlert] = useState(defaultAlertState)
  const columns = [
    { field: "nome", headerName: "Nome", width: 150 },
    { field: "sexo", headerName: "Sexo", width: 70 },
    {
      field: "idade",
      headerName: "Idade",
      type: "number",
      width: 70,
    },
    {
      field: "hobby",
      headerName: "Hobby",
      sortable: false,
      width: 160,
    },
    {
      field: "datanascimento",
      headerName: "Nascimento",
      sortable: true,
      type: "date",
      width: 140,
    },
    {
      field: "operacoes",
      headerName: "Operacoes",
      width: 210,
      sortable: false,
      renderCell: () => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ margin: 5 }}
            onClick={() => {
              setStateFormValues(selectedRow)
              setStateIsChangeDeveloper(true)
            }}
          >
            ALTERAR
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ margin: 5 }}
            onClick={async () => {
              deleteDeveloper( setStateFormValues, setStateIsChangeDeveloper, setAlert, selectedRow._id )
            }}
          >
            EXCLUIR
          </Button>
        </strong>
      ),
    },
  ]

  useEffect(() => {
    getDevelopers()
      .then((developers) => {
        setRows(returnRows(developers))
      })
      .catch((error) => {
        console.error("Opa! Houve um erro:", error.message)
      })
  })

  return (
    <div style={{ width: "70%", height: 400 }}>
      <Alert
        alert={alert}
        setAlert={(alert) => {
          setAlert(alert)
        }}
      />
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterSelectedRowCount
        hideFooterRowCount
        disableColumnMenu
        hideFooter
        hideFooterPagination
        onRowSelected={(selectedRow) => setSelectedRow(selectedRow.data)}
      />
    </div>
  )
}
