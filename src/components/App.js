import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        console.log(term);
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID cI7qa9pdlqy3N3QK9jtpkzUEYO4Ulva77VFPjzvHXVk'
            }
        });
        // .then(response => {
        //     console.log(response.data.results);
        // })

        console.log(response.data.results);
        this.setState({ images: response.data.results });
    }

    render() { 
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSearchSubmitTerm={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;