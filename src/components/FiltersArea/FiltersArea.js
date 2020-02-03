import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form, Col } from 'react-bootstrap';
import Select from 'react-select';


class FiltersArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price: [],
      categorySelectedValues: [],
      selectedValues: []
    }
    this.categories = [{value:'AM', label:'AM'},{value:'RT', label:'RT'},{value:'ML', label:'ML'},{value:'SX', label:'SX'},{value:'MG', label:'MG'}]
    this.prices = [{value:'low', label:'Low'},{value:'medium', label:'Medium'},{value:'high', label:'High'}]
  };

  handlePriceSelect = (selectedPrice) => {    
    this.setState({price: selectedPrice});   
  }

  handleCategorySelect = (values) => {      
    this.setState({categorySelectedValues: values});   
  }

  handleApplyClick = () => {
    const selectedCategories = this.state.categorySelectedValues.map(a => a.value);
    this.setState({selectedValues: selectedCategories.concat(this.state.price.value)});
  }

  handleDiscardClick = () => {
    this.setState({
            selectedValues: [],
            price:  [],
            categorySelectedValues: []
          });  
    this.props.clearInput();  
  }

  render() {
      return(
        <section>
          <Form.Row className="row">
              <Col>
                  <label>{this.props.categoryLabel}</label>
                  <Select isMulti value={this.state.categorySelectedValues} options={this.categories} onChange={this.handleCategorySelect} />
              </Col>          
              <Col>
                  <label>{this.props.priceLabel}</label>
                  <Select value={this.state.price} options={this.prices} onChange={this.handlePriceSelect} />
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
          <Form.Row>
              { this.state.selectedValues[0] !== undefined &&  this.state.selectedValues.map(item => <div key={item + 1} className="criterion">#{item}</div>) }     
          </Form.Row>              
        </section>
      )
  }
};

export default FiltersArea;