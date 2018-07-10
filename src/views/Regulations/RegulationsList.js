import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane } from 'reactstrap';
import RegulationsListItem from './RegulationsListItem';
import regData from './RegulationsData';

import '../../App.css';

class RegulationsList extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  renderListGroupItem(regulation, i) {
    return (<ListGroupItem
      key={regulation._id}
      onClick={() => (this.toggle(i))}
      action
      active={this.state.activeTab === i}
    >{regulation.name}
            </ListGroupItem>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /><strong>Available regulations</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <ListGroup id="list-tab" role="tablist" >
                      {
                      regData.map((regulation, index) => (
                        this.renderListGroupItem(regulation, index)
                      ))
                    }
                    </ListGroup>
                  </Col>
                  <Col xs="8">
                    <TabContent activeTab={this.state.activeTab}>
                      {
                      regData.map((regulation, index) => (
                        <TabPane tabId={index} key={regulation._id} >
                          <RegulationsListItem regulation={regulation} />
                        </TabPane>
                      ))
                    }
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegulationsList;
