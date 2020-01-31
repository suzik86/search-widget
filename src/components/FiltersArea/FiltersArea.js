import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form, Col } from 'react-bootstrap';
import Select from 'react-select';


class FiltersArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price: '',
      categorySelectedValues: [],
      selectedValues: []
    }
    this.categories = [{value:'AM', label:'AM'},{value:'RT', label:'RT'},{value:'ML', label:'ML'},{value:'SX', label:'SX'},{value:'MG', label:'MG'}]
    this.prices = [{value:'low', label:'Low'},{value:'medium', label:'Medium'},{value:'high', label:'High'}]
  };

  handlePriceSelect = (value) => {    
    this.setState({price: value.value});
  }

  handleCategorySelect = (values) => {      
    this.setState({categorySelectedValues: values.map(a => a.value)});   
  }

  handleApplyClick = () => {
    this.setState({selectedValues: this.state.categorySelectedValues.concat(this.state.price)});
  }

  handleDiscardClick = () => {
    this.setState({
            selectedValues: []
          });    
  }

  render() {
      return(
        <section>
          <Form.Row className="row">
              <Col>
                  <label htmlFor="category-input">{this.props.categoryLabel}</label>
                  <Select isMulti options={this.categories} onChange={this.handleCategorySelect} />
              </Col>          
              <Col>
                  <label htmlFor="price-input">{this.props.priceLabel}</label>
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
          { this.state.selectedValues.map(item => <div key={item} className="criterion">#{item}</div>)}         
        </section>
      )
  }
};

export default FiltersArea;