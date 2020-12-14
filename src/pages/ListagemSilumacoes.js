import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ListagemSimulacoes() {
    return (
        <>
            <h1>Listagem Simulações</h1>
            <Row>
                <Col>
                    <Link to="/simulacao">Nova Simulação</Link>
                </Col>
            </Row>
        </>
    )
}
