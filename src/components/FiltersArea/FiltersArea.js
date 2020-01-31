import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form, Col } from 'react-bootstrap';


class FiltersArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedValues: [],
      applySectionIsOpen: false, 
      categorySelectedValues: []    
    }  
  };

  handlePriceSelect = (e) => {    
    this.setState({selectedValues: this.state.selectedValues.concat(e.target.value)});
       
  }

  handleCategorySelect = (e) => {      
    this.setState({selectedValues: this.state.selectedValues.concat(e.target.value)});   
  }

  handleApplyClick = () => {
    this.setState({applySectionIsOpen: !this.state.applySectionIsOpen});
  }

  handleDiscardClick = () => {
    this.setState({
            selectedValues: [],
            applySectionIsOpen: !this.state.applySectionIsOpen
          });    
  }

  render() {
      return(
        <section>
          <Form.Row className="row">
              <Col>
                  <label htmlFor="category-input">{this.props.categoryLabel}</label>
                  <select id="category-input"  name="category" multiple onChange={this.handleCategorySelect}>
                        <option value="AM">AM</option>
                        <option value="RT">RT</option>
                        <option value="ML">ML</option>
                        <option value="SX">SX</option>
                        <option value="MG">MG</option>
                  </select>                    
              </Col>          
              <Col>
                  <label htmlFor="price-input">{this.props.priceLabel}</label>
                  <select id="price-input" name="price" onChange={this.handlePriceSelect}>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>                    
                  </select>
              </Col>
          </Form.Row>
           
          <Form.Row className="row">          
            <Button 
                className="apply-button" 
                variant="primary" 
                onClick={this.handleApplyClick}
                >
                  {this.props.applyButtonLabel}
            </Button>
            <Button 
                className="discard-button"
                variant="primary" 
                onClick={this.handleDiscardClick}
                >
                  {this.props.discardButtonLabel}
            </Button>            
          </Form.Row>
          { this.state.applySectionIsOpen && 
         
          this.state.selectedValues.map(item => <div key={item} className="criterion">#{item}</div>)}         

        </section>
      )
  }
};

export default FiltersArea;