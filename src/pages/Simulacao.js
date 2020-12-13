import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'

export default function Simulacao() {

    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [valorSegurado, setValorSegurado] = useState('')
    const [numeroContratoEmprestimo, setNumeroContratoEmprestimo] = useState('')
    const [dataFimContratoEmprestimo, setDataFimContratoEmprestimo] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')

    const changeNome = evt => {
        setNome(evt.target.value)
    }

    const changeCpf = evt => {
        setCpf(evt.target.value)
    }

    const changeValorSegurado = evt => {
        setValorSegurado(evt.target.value)
    }

    const changeNumeroContratoEmprestimo = evt => {
        setNumeroContratoEmprestimo(evt.target.value)
    }

    const changeDataFimContratoEmprestimo = evt => {
        setDataFimContratoEmprestimo(evt.target.value)
    }

    const changeDataNascimento = evt => {
        setDataNascimento(evt.target.value)
    }

    return (
        <>
            <h1>Simulação Seguro Prestamista</h1>
            <Alert variant="success" show={showSuccess}>Alerta de sucesso</Alert>
            <Alert variant="danger" show={showError}>Alerta de erro</Alert>

            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                        Nome da Pessoa
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" placeholder="Nome da Pessoa" value={nome} onChange={changeNome} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                        Password
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" placeholder="CPF" value={cpf} onChange={changeCpf} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                        Valor Segurado
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" placeholder="Valor Segurado" value={valorSegurado} onChange={changeValorSegurado} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                        Número Contrato Empréstimo
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" placeholder="Número Contrato Empréstimo" value={numeroContratoEmprestimo} onChange={changeNumeroContratoEmprestimo} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                        Data Fim Contrato Empréstimo
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="text" placeholder="Data Fim Contrato Empréstimo" value={dataFimContratoEmprestimo} onChange={changeDataFimContratoEmprestimo} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                        Data Nascimento
                    </Form.Label>
                    Primary</Form.Group>
            </Form>

            <Button variant="primary">SIMULAR</Button>
        </>)
}
