import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form, Col } from 'react-bootstrap';
import Select from 'react-select';


class FiltersArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedValues: [],
      applySectionIsOpen: false, 
      categorySelectedValues: []    
    }  
    this.categories = [{value:'AM', label:'AM'},{value:'RT', label:'RT'},{value:'ML', label:'ML'},{value:'SX', label:'SX'},{value:'MG', label:'MG'}]
    this.prices = [{value:'low', label:'Low'},{value:'medium', label:'Medium'},{value:'high', label:'High'}]
  };

  handlePriceSelect = (value) => {    
    this.setState({selectedValues: this.state.selectedValues.concat(value.target.value)});
       
  }

  handleCategorySelect = (values) => {      
    this.setState({selectedValues: values.map(a => a.value)});   
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
                  <Select id="category-input" isMulti options={this.categories} onChange={this.handleCategorySelect} />                                     
              </Col>          
              <Col>
                  <label htmlFor="price-input">{this.props.priceLabel}</label>
                  {/* <select id="price-input" name="price" onChange={this.handlePriceSelect}>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>                    
                  </select> */}
                  <Select options={this.prices} onChange={this.handlePriceSelect} />
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