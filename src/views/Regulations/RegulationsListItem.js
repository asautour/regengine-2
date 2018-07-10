import React, { Component } from 'react';
import { Col, Input, Label, Row, Button, Form, FormGroup } from 'reactstrap';
import { LABEL_NAME, LABEL_EFFECTIVE_ON, LABEL_HL_SUMMARY, LABEL_REGULATORY_BODY, LABEL_ATTACHMENTS,
  LABEL_SAVE_CHANGES, PLACEHOLDER_REG_SUMMARY, PLACEHOLDER_REG_NAME } from '../../assets/text/en';
import { regBodies } from './RegulationsData';

export default class RegulationListIteam extends Component {
  render() {
    const { regulation } = this.props;

    return (
      <div>

        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
          <Row>
            <Col xs="6">
              <FormGroup row>
                <Col md="4"><Label htmlFor="text-input">{LABEL_NAME}</Label></Col>
                <Col xs="12" md="8"><Input type="text" id="text-input" name="text-input" value={regulation.name} /></Col>
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup row>
                <Col md="4"><Label htmlFor="date-input">{LABEL_EFFECTIVE_ON}</Label></Col>
                <Col xs="12" md="8"><Input type="date" id="date-input" name="date-input" value={regulation.dueDate} /></Col>
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
                value={regulation.summary}
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

        <Button type="submit" className="btn btn-outline-primary">{LABEL_SAVE_CHANGES}</Button>

      </div>
    );
  }
}
