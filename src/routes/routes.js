import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListagemSimulacoes from '../pages/ListagemSilumacoes'
import Simulacao from '../pages/Simulacao'


export default function MainRoutes() {
    return (
        <Switch>
            <Route path="/simulacao" exact>
                <Simulacao />
            </Route>
            <Route path="/simulacoes" >
                <ListagemSimulacoes />
            </Route>
        </Switch>
    )
}
