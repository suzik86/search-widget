import React from 'react';
import FiltersArea from "../FiltersArea/FiltersArea";
import Button from 'react-bootstrap/Button';
import { Form, Col, FormControl } from 'react-bootstrap';

class SearchBox extends React.Component {
    constructor(){
        super();
        this.state = {
            searchInput: '',
            filtersIsOpen: false,
            searchLabel: [],
            filtersLabel:[],
            categoryLabel:[],
            priceLabel:[],
            applyButtonLabel:[],
            discardButtonLabel:[]
        };        
    }   

    componentDidMount() {
        fetch("fields.json")
        .then(res => res.json())
        .then(data => {             
            this.setState({ 
                searchLabel: data.searchPhraseLabel.value,
                filtersLabel: data.filtersButtonLabel.value,
                categoryLabel: data.categoryLabel.value, 
                priceLabel: data.priceLabel.value, 
                applyButtonLabel: data.applyButtonLabel.value,
                discardButtonLabel: data.discardButtonLabel.value
            });
            
        })                
    }    

    handleSearchInput = (e) => {
        this.setState({searchInput: e.target.value});
    }

    handleClick = () => {
        this.setState({filtersIsOpen: !this.state.filtersIsOpen});
    }

    clearInput = () => {
        this.setState({searchInput: ''});
    } 

    render(){

        return( 
            <Form className="form">                
                <Form.Row className="row">
                    <Col>
                        <label htmlFor="search-input">{this.state.searchLabel}</label>
                        <FormControl id="search-input" value = {this.state.searchInput} aria-describedby="basic-addon3" onChange={this.handleSearchInput}/>                        
                    </Col>
                    <Col>
                        <Button className="filters-btn" variant="primary" onClick={this.handleClick}>{this.state.filtersLabel}</Button> 
                    </Col>
                </Form.Row>

                { this.state.filtersIsOpen && <FiltersArea 
                                                    categoryLabel={this.state.categoryLabel} 
                                                    priceLabel={this.state.priceLabel} 
                                                    applyButtonLabel={this.state.applyButtonLabel}
                                                    discardButtonLabel={this.state.discardButtonLabel}
                                                    clearInput={this.clearInput}
                                                    /> }   
            </Form>          
                       
        )
    }
}
 

export default SearchBox;