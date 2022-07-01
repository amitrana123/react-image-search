import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = { term: '' };

    // onFormSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onSearchSubmitTerm(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Image Search</label>
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
                        <input type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;