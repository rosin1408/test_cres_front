import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ListagemSimulacoes() {

    const [simulacoes, setSimulacoes] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8080/simulacao/').then(res => setSimulacoes(res.data));
    }, [])

    return (
        <>
            <h1>Listagem Simulações</h1>
            <Row>
                <Col>
                    <Link to="/simulacao">Nova Simulação</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome da Pessoa</th>
                                <th>Valor Segurado</th>
                                <th>Número Contrato Empréstimo</th>
                                <th>Data Simulação</th>
                                <th>Data Fim Contrato Empréstimo</th>
                                <th>Valor Empréstimo</th>
                                <th>Produto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                simulacoes.map(simulacao => {
                                    return (
                                        <tr key={simulacao.id}>
                                            <td>{simulacao.nomePessoa}</td>
                                            <td>{simulacao.valorSegurado}</td>
                                            <td>{simulacao.numeroContratoEmprestimo}</td>
                                            <td>{simulacao.dataSimulacao}</td>
                                            <td>{simulacao.fimContratoEmprestimo}</td>
                                            <td>{simulacao.valorTotalPremio}</td>
                                            <td>{simulacao.produtoEscolhido.nome}</td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}
