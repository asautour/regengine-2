import React, { Component } from 'react';
import { Button, Col, Input, Label, Row } from 'reactstrap';

export default class RegulationListIteam extends Component {
  render() {
    const { regulation } = this.props;

    return (
      <div>
        <Row>
          <Col xs="2"><Label htmlFor="text-input">Legislation name</Label></Col>
          <Col xs="4"><Input type="text" id="text-input" name="text-input" value={regulation.name} /></Col>
          <Col xs="2"><Label htmlFor="date-input">Date coming into force</Label></Col>
          <Col xs="4"><Input type="date" id="date-input" name="date-input" value={regulation.dueDate} /></Col>
        </Row>
        <Row>
          <Col xs="2"><Label htmlFor="textarea-input">High-level summary</Label></Col>
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
          <Col xs="2"><Label htmlFor="select">Regulatory body</Label></Col>
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
          <Col xs="2"><Label htmlFor="file-multiple-input">Attachment(s)</Label></Col>
          <Col xs="10"><Input type="file" id="file-multiple-input" name="file-multiple-input" multiple /></Col>
        </Row>
      </div>
    );
  }
}
