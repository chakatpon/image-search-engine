import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};
   
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        console.log(this.state.term);
        console.log(1111111111111111111111);
    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search : </label>
                        <input 
                            type='text' 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;