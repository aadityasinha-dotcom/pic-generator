import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { images: null };


    onSearchSubmit = async (term) => {
        const responce = await axios.get('/search/photos',{
            params: { query: term }
        });

        console.log(this);
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSumbit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;
