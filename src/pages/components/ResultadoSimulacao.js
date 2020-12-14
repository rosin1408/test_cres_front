import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function ResultadoSimulacao({ show, simulacao }) {

    if (show) {
        return (
            <>
                <h2>Resultado Simulacao</h2>
    
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                        Valor Total Previsto
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control plaintext readOnly defaultValue={simulacao.valorTotalPremio} />
                    </Col>
                </Form.Group>
    
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                        Produto Escolhido
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control plaintext readOnly defaultValue={simulacao.produtoEscolhido.nome} />
                    </Col>
                </Form.Group>
            </>
        )
    }

    return (<></>)
    
}