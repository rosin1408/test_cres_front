import Axios from 'axios'
import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ResultadoSimulacao from './components/ResultadoSimulacao'

export default function Simulacao() {

    const [showError, setShowError] = useState(false)
    const [msgErro, setMsgErro] = useState(false)

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [valorSegurado, setValorSegurado] = useState('')
    const [numeroContratoEmprestimo, setNumeroContratoEmprestimo] = useState('')
    const [dataFimContratoEmprestimo, setDataFimContratoEmprestimo] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')

    const [simulacao, setSimulacao] = useState({})
    const [showSimulacao, setShowSimulacao] = useState(false)

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

    const simular = () => {
        setShowSimulacao(false)
        setShowError(false)
        Axios.post('http://localhost:8080/simulacao/', {
            nomePessoa: nome,
            cpf,
            valorSegurado,
            numeroContratoEmprestimo,
            dataFim: dataFimContratoEmprestimo,
            dataNascimento
        }).then(res => {
            setSimulacao(res.data)
            setShowSimulacao(true)
        }).catch(error => {
            setMsgErro(error.response.data)
            setShowError(true)
        })
    }

    return (
        <>
            <h1>Simulação Seguro Prestamista</h1>
            <Alert variant="danger" show={showError}>{msgErro}</Alert>

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
                        CPF
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
                    <Col sm="9">
                        <Form.Control type="text" placeholder="Data Nascimento" value={dataNascimento} onChange={changeDataNascimento} />
                    </Col>
                </Form.Group>
            </Form>

            <Row>
                <Col>
                    <Link to="/simulacoes">Voltar para similações</Link>
                    {' '}
                    <Button variant="primary" onClick={simular}>SIMULAR</Button>
                </Col>
            </Row>
            
            <ResultadoSimulacao show={showSimulacao} simulacao={simulacao} />
        </>
    )
}
