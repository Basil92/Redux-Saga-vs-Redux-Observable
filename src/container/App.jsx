import React from 'react';
import MainContainer from './MainContainer'
import Popup from './Popup'
class App extends React.Component {
    render() {
        return (
            <div>
                <MainContainer />
                <Popup/>
            </div>
        );
    }
}
export default App;
