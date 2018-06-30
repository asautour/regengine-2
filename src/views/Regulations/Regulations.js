import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Modal, ModalBody, ModalFooter, ModalHeader,
  Row,
} from 'reactstrap';
import RegulationsList from './RegulationsList';

class Regulations extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.toggleAddLegislation = this.toggleAddLegislation.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      modal: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
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
              <Row>
                <Col>
                  <Card>
                    <CardBody>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <Row>
                        <Col xs="6">
                          <FormGroup row>
                            <Col md="4">
                              <Label htmlFor="text-input">Legislation name</Label>
                            </Col>
                            <Col xs="12" md="8">
                              <Input type="text" id="text-input" name="text-input" placeholder="E.g. MiFID II, Securitisation..." />
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col xs="6">
                          <FormGroup row>
                              <Col md="4">
                                <Label htmlFor="date-input">Date coming into force</Label>
                              </Col>
                              <Col xs="12" md="8">
                                <Input type="date" id="date-input" name="date-input" placeholder="date" />
                              </Col>
                            </FormGroup>                
                        </Col>
                      </Row>

                      <FormGroup row>
                        <Col md="2">
                          <Label htmlFor="textarea-input">High-level summary</Label>
                        </Col>
                        <Col xs="12" md="10">
                          <Input type="textarea" name="textarea-input" id="textarea-input" rows="4"
                                placeholder="Please write up a quick summary of what the legislation is about..." />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="2">
                          <Label htmlFor="select">Regulatory body</Label>
                        </Col>
                        <Col md="10">
                          <Input type="select" name="multiple-select" id="multiple-select" multiple>
                            <option value="0">ESMA</option>
                            <option value="1">US Department of Justice</option>
                            <option value="2">France AMF</option>
                            <option value="3">Malta MFSA</option>
                            <option value="4">PRA</option>
                          </Input>
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Col md="2">
                          <Label htmlFor="file-multiple-input">Attachment(s)</Label>
                        </Col>
                        <Col xs="12" md="10">
                          <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
              </Card>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <button type="button" class="btn btn-outline-primary" onClick={this.toggleAddLegislation}> Submit </button>{' '}
          <button type="button" class="btn btn-outline-secondary" onClick={this.toggleAddLegislation}> Cancel </button>
        </ModalFooter>
      </Modal>

      <div className="animated fadeIn">    
      </div>
      </div>
    );
  }
}

export default Regulations;
