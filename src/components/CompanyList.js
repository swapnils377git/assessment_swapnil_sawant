import React, { Component } from 'react';
import axios from 'axios';

export default class CompanyList extends Component {
    constructor(props) {
        super(props);

        this.onChangeIndustryType = this.onChangeIndustryType.bind(this);
        this.onChangeSubIndustryType = this.onChangeSubIndustryType.bind(this);
        
    
        this.state = {
            companyid: '',
            industrytype: '',
            subindustrytype: '',
            empsizefrom: '',
            empsizeto: '',
        }
    }

    componentWillMount() {
         axios.get('https://localhost:5000/company/mining/mining', {headers: {'Content-Type': 'application/json'}})
            .then(res => res.json())
            .catch(error => console.log(error));
    }

    onChangeIndustryType(e) {
        this.setState({
            industrytype: e.target.value
        });
    }

    onChangeSubIndustryType(e) {
        this.setState({
            subindustrytype: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const company = {
            companyid: this.state.companyid,
            industrytype: this.state.industrytype,
            subindustrytype: this.state.subindustrytype,
            empsizefrom: this.state.empsizefrom,
            empsizeto: this.state.empsizeto,
        }

        console.log(company);

        //axios.get('http://localhost:5000/company/')
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Company</h1>
                </section>

                <section className="content">
                    <div className="box box-primary">
                        <div className="box-body">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                        <label>Select {this.industrytype}</label>
                                        {/* <select ref="industrytype" className="form-control"
                                            value={this.industrytype}
                                            onChange={this.onChangeIndustryType}>
                                            {
                                                this.industrytype.map(function (industry) {
                                                    return <option key={industry} value={industry}>{industry}</option>
                                                })
                                            }
                                    </select> */}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Select</label>
                                    <select className="form-control">
                                        <option>option 1</option>
                                        <option>option 2</option>
                                        <option>option 3</option>
                                        <option>option 4</option>
                                        <option>option 5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                    
                            </div>
                        </div>
                        </div>

                    </div>
                </section>

            </div>

        )
    }
}