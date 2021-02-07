import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { createDeveloper, updateDeveloper } from './functions/FormDeveloperFunctions'
import { defaultAlertState } from '../common/DefaultStates'
import Alert from './Alert'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function FormDeveloper({ formValues, setStateFormValues, isChangeDevelepor, setStateIsChangeDeveloper }){
  const classes = useStyles();
  const [alert, setAlert] = useState(defaultAlertState);
  const nameButton = isChangeDevelepor ? "ALTERAR" : "CADASTRAR"
  return (

    <div style={{ width: "70%" }}>
      <Alert
        alert={alert}
        setAlert={(alert) => {
          setAlert(alert);
        }}
      />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          size='small'
          required={true}
          value={formValues.nome}
          onChange={(event => setStateFormValues({ ...formValues, nome: event.target.value }))}
        />
        <TextField
          id="idade"
          label="Idade"
          variant="outlined"
          size='small'
          value={formValues.idade}
          style={{ width: 60 }}
          onChange={(event => setStateFormValues({ ...formValues, idade: event.target.value }))}
        />
        <TextField
          id="sexo"
          label="Sexo"
          variant="outlined"
          value={formValues.sexo}
          size='small'
          select
          onChange={(event => setStateFormValues({ ...formValues, sexo: event.target.value }))}
        >
          <MenuItem value="M">Masculino</MenuItem>
          <MenuItem value="F">Feminino</MenuItem>
          <MenuItem value="O">Outro</MenuItem>
        </TextField>

        <TextField
          id="hobby"
          label="Hobby"
          variant="outlined"
          value={formValues.hobby}
          size='small'
          onChange={(event => setStateFormValues({ ...formValues, hobby: event.target.value }))}
        />
        <TextField
          id="datanascimento"
          label="Data Nascimento"
          variant="outlined"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={formValues.datanascimento}
          size='small'
          onChange={(event => setStateFormValues({ ...formValues, datanascimento: event.target.value }))}
        />
      </form>
      <Button
        variant="contained"
        size="small"
        style={{ margin: 5 }}
        onClick={async () => {

          if (isChangeDevelepor) {
            updateDeveloper(formValues, setStateFormValues, setStateIsChangeDeveloper, setAlert)
          } else {
            createDeveloper(formValues, setStateFormValues, setStateIsChangeDeveloper, setAlert)
          }
        }}>
        {nameButton}
      </Button>
    </div>
  )
}
