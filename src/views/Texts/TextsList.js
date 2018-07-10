import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane } from 'reactstrap';
import TextsListItem from './TextsListItem';
import txtData from './TextsData';

import '../../App.css';

class TextsList extends Component {
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

  renderListGroupItem(text, i) {
    return (<ListGroupItem
      key={text._id}
      onClick={() => (this.toggle(i))}
      action
      active={this.state.activeTab === i}
    >{text.name}
    </ListGroupItem>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" /><strong>Available texts</strong>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="4">
                <ListGroup id="list-tab" role="tablist" >
                  {
                      txtData.map((text, index) => (
                        this.renderListGroupItem(text, index)
                      ))
                    }
                </ListGroup>
              </Col>
              <Col xs="8">
                <TabContent activeTab={this.state.activeTab}>
                  {
                      txtData.map((text, index) => (
                        <TabPane tabId={index} key={text._id} >
                          <TextsListItem text={text} />
                        </TabPane>
                      ))
                    }
                </TabContent>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TextsList;
