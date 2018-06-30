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
    console.log(tab);
    console.log(this.state.activeTab);
    
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  renderListGroupItem(regulation,i) {
    return <ListGroupItem 
      onClick={() => (this.toggle(i))} 
      action 
      active={this.state.activeTab === i}
    >
      {regulation.name}
    </ListGroupItem>
  }

  render() {
    const regulations = [
      {name:'MiFID II',summary:'MiFID II summary'},
      {name:'Securitisation',summary:'Securitisation summary'},
      {name:'FRTB',summary:'FRTB summary'},
      {name:'PSD 2',summary:'PSD 2 summary'}
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
                        <TabPane tabId={index} >
                          <RegulationItem regulation={regulation}/>
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
