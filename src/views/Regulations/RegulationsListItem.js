import React, { Component } from 'react';
import { Col, Input, Label, Row, Button } from 'reactstrap';
import { LABEL_NAME, LABEL_EFFECTIVE_ON, LABEL_HL_SUMMARY, LABEL_REGULATORY_BODY, LABEL_ATTACHMENTS,
  LABEL_SAVE_CHANGES } from '../../assets/text/en';

export default class RegulationListIteam extends Component {
  render() {
    const { regulation } = this.props;

    return (
      <div>
        <Row>
          <Col xs="2"><Label htmlFor="text-input">{LABEL_NAME}</Label></Col>
          <Col xs="4"><Input
            type="text"
            id="text-input"
            name="text-input"
            value={regulation.name}
          />
          </Col>
          <Col xs="2"><Label htmlFor="date-input">{LABEL_EFFECTIVE_ON}</Label></Col>
          <Col xs="4"><Input type="date" id="date-input" name="date-input" value={regulation.dueDate} /></Col>
        </Row>
        <Row>
          <Col xs="2"><Label htmlFor="textarea-input">{LABEL_HL_SUMMARY}</Label></Col>
          <Col xs="10">
            <Input
              type="textarea"
              name="textarea-input"
              id="textarea-input"
              rows="4"
              value={regulation.summary}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="2"><Label htmlFor="select">{LABEL_REGULATORY_BODY}</Label></Col>
          <Col xs="10">
            <Input type="select" name="multiple-select" id="multiple-select" multiple>
              <option value="0" selected="false">ESMA</option>
              <option value="1" selected="true">US Department of Justice</option>
              <option value="2" selected="true">France AMF</option>
              <option value="3">Malta MFSA</option>
              <option value="4">PRA</option>
            </Input>
          </Col>
        </Row>
        <Row>
          <Col xs="2"><Label htmlFor="file-multiple-input">{LABEL_ATTACHMENTS}</Label></Col>
          <Col xs="10"><Input type="file" id="file-multiple-input" name="file-multiple-input" multiple /></Col>
        </Row>
        <Button type="submit" className="btn btn-outline-primary">{LABEL_SAVE_CHANGES}</Button>

      </div>
    );
  }
}
