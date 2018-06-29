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
  Row,
} from 'reactstrap';

class Regulations extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>Add Legislation</strong>
              </CardHeader>
              <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <Row>
                  <Col xs="6">
                    <FormGroup row>
                        <Col md="4">
                          <Label htmlFor="text-input">Legislation name</Label>
                        </Col>
                        <Col xs="12" md="8">
                          <Input type="text" id="text-input" name="text-input" placeholder="E.g. MiFID II, Securitsation..." />
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
                             placeholder="Please give a quick summary of what the legislation is about..." />
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

              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Regulations;
