import React, { Component } from 'react';
import { Card, CardBody, Col, Input, Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import RegulationsList from './RegulationsList';
import { LABEL_NAME, LABEL_EFFECTIVE_ON, LABEL_HL_SUMMARY, LABEL_REGULATORY_BODY, LABEL_ATTACHMENTS,
  LABEL_SUBMIT, LABEL_CANCEL, PLACEHOLDER_REG_SUMMARY, PLACEHOLDER_REG_NAME } from '../../assets/text/en';
import { regBodies } from './RegulationsData';

export default class Regulations extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.toggleAddLegislation = this.toggleAddLegislation.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      modal: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => ({ fadeIn: !prevState }));
  }

  toggleAddLegislation() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        {/* List of all available legislations */}
        <RegulationsList />

        {/* Popup to add a legislation */}
        <button type="button" className="btn btn-primary" data-toggle="modal" onClick={this.toggleAddLegislation}>
          Add legislation
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggleAddLegislation} className="modal-dialog modal-lg">
          <ModalHeader toggle={this.toggleAddLegislation}>Add legislation</ModalHeader>
          <ModalBody>
            <div>
              <Card>
                <CardBody>
                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <Row>
                      <Col xs="6">
                        <FormGroup row>
                          <Col md="4"><Label htmlFor="text-input">{LABEL_NAME}</Label></Col>
                          <Col xs="12" md="8"><Input type="text" id="text-input" name="text-input" placeholder={PLACEHOLDER_REG_NAME} /></Col>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup row>
                          <Col md="4"><Label htmlFor="date-input">{LABEL_EFFECTIVE_ON}</Label></Col>
                          <Col xs="12" md="8"><Input type="date" id="date-input" name="date-input" placeholder="date" /></Col>
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup row>
                      <Col md="2"><Label htmlFor="textarea-input">{LABEL_HL_SUMMARY}</Label></Col>
                      <Col xs="12" md="10">
                        <Input
                          type="textarea"
                          name="textarea-input"
                          id="textarea-input"
                          rows="4"
                          placeholder={PLACEHOLDER_REG_SUMMARY}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="2"><Label htmlFor="select">{LABEL_REGULATORY_BODY}</Label></Col>
                      <Col md="10">
                        <Input type="select" name="multiple-select" id="multiple-select" multiple>
                          { regBodies.map((body, index) => <option value={index}>{body}</option>)}
                        </Input>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="2"><Label htmlFor="file-multiple-input">{LABEL_ATTACHMENTS}</Label></Col>
                      <Col xs="12" md="10"><Input type="file" id="file-multiple-input" name="file-multiple-input" multiple /></Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </ModalBody>
          <ModalFooter>
            <button type="button" className="btn btn-outline-primary" onClick={this.toggleAddLegislation}> {LABEL_SUBMIT} </button>{' '}
            <button type="button" className="btn btn-outline-secondary" onClick={this.toggleAddLegislation}> {LABEL_CANCEL} </button>
          </ModalFooter>
        </Modal>

        <div className="animated fadeIn" />
      </div>
    );
  }
}
