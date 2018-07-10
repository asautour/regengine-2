import React, { Component, Link } from 'react';
import { Col, Input, Label, Row, Button, Form, FormGroup } from 'reactstrap';
import { LABEL_NAME, LABEL_HL_SUMMARY, LABEL_REGULATORY_BODY, LABEL_ATTACHMENT,
  LABEL_SUBMIT, LABEL_CANCEL, PLACEHOLDER_REG_SUMMARY, PLACEHOLDER_TEXT_NAME, LABEL_ADD_TEXT,
  LABEL_LINK_TO_ORIGINAL, PLACEHOLDER_HTTP_LINK, LABEL_SAVE_CHANGES } from '../../assets/text/en';
import { regBodies } from '../Regulations/RegulationsData';
import { txtData } from './TextsData';

export default class TextListIteam extends Component {
  constructor(props) {
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this);
    this.state = {
      edit: false,
    };
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }


  render() {
    const { text } = this.props;

    return (
      <div>
        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

          {/* Text name and level */}
          <Row>
            <Col xs="6">
              <FormGroup row>
                <Col md="4"><Label htmlFor="text-input">{LABEL_NAME}</Label></Col>
                <Col xs="12" md="8"><Input type="text" id="text-name" name="text-name" value={text.name} /></Col>
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup row>
                <Col md="4"><Label htmlFor="date-input">Published on</Label></Col>
                <Col xs="12" md="8"><Input type="text" id="text-level" name="text-level" value={text.level} /></Col>
              </FormGroup>
            </Col>
          </Row>

          {/* Regulatory body */}
          <FormGroup row>
            <Col md="2"><Label htmlFor="select">{LABEL_REGULATORY_BODY}</Label></Col>
            <Col md="10">
              <Input type="select" name="select" id="select" >
                { regBodies.map((body, index) => <option value={index}>{body}</option>)}
              </Input>
            </Col>
          </FormGroup>

          {/* Text level and publication date */}
          <Row>
            <Col xs="6">
              <FormGroup row>
                <Col md="4"><Label htmlFor="date-input">Published on</Label></Col>
                <Col xs="12" md="8"><Input type="date" id="date-published" name="date-published" value={text.published} /></Col>
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup row>
                <Col md="4"><Label htmlFor="text-input">Status</Label></Col>
                <Col xs="12" md="8"><Input type="text" id="text-status" name="text-status" value={text.status} /></Col>
              </FormGroup>
            </Col>
          </Row>

          {/* HTTP link to the original text */}
          <FormGroup row>
            <Col md="2"><Label htmlFor="select">{LABEL_LINK_TO_ORIGINAL}</Label></Col>
            <Col xs="10" md="8"><a href={`${text.link}`} target="_blank">{text.link}</a>
            </Col>
          </FormGroup>

          {/* Text attached as a PDF or other file */}
          <FormGroup row>
            <Col md="2"><Label htmlFor="file-input">{LABEL_ATTACHMENT}</Label></Col>
            <Col xs="12" md="10"><Input type="file" id="file-original" name="file-original" /></Col>
          </FormGroup>
        </Form>

        <Button type="submit" className="btn btn-outline-primary" nClick={this.toggleEdit}>Edit</Button>

      </div>
    );
  }
}
