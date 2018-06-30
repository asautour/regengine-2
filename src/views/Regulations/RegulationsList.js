import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';
import RegulationItem from './RegulationItem';

import '../../App.css'


class RegulationsList extends Component {
  
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
  }

  toggle(tab) {    
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  renderListGroupItem(regulation,i) {
    return <ListGroupItem 
      key={regulation._id}
      onClick={() => (this.toggle(i))} 
      action 
      active={this.state.activeTab === i}
    >
      {regulation.name}
    </ListGroupItem>
  }

  render() {
    const regulations = [
      {_id:'1', name:'MiFID II',summary:'MiFID II summary'},
      {_id:'2', name:'Securitisation',summary:'Securitisation summary'},
      {_id:'3', name:'FRTB',summary:'FRTB summary'},
      {_id:'4', name:'PSD 2',summary:'PSD 2 summary'}
    ]
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Available regulations</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <ListGroup id="list-tab" role="tablist" >
                    {             
                      regulations.map((regulation, index) => (
                        this.renderListGroupItem(regulation, index)
                      ))
                    }
                    </ListGroup>
                  </Col>
                  <Col xs="8">
                    <TabContent activeTab={this.state.activeTab}>
                    {             
                      regulations.map((regulation, index) => (
                        <TabPane tabId={index} key={regulation._id}>
                          <RegulationItem regulation={regulation} />
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
