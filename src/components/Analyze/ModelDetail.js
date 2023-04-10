import React from "react";
import axios from "axios";

class ModelDetailedAnalysis extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            model_name: props.model_name,
            dataset_id: props.dataset_id,
            report: {},
            isDataLoaded: false
        }

        this.loadModelData = this.loadModelData.bind(this);
    }
    loadModelData() {
        axios.post(`${process.env.REACT_APP_API_URL}/api/analyze/`, this.state)
        .then(json => {
            console.log(json.data);
            this.setState({
                ...this.state,
                ...json.data,
                isDataLoaded: true
            });
        });

        console.log(this.state);
    }
    componentDidMount() {
        this.loadModelData();
    }
    render() {
        if(!this.state.isDataLoaded) 
            return (<p>Loading</p>)
        return (
            <div>
                <h2>Model Name: {this.state.model_name}</h2>
                <h2>Dataset Name: {this.state.dataset_name}</h2>
                {/* {this.state.report} */}
            </div>
        )
    }
};

export default ModelDetailedAnalysis;