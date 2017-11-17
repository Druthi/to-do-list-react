import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import App from './components/App'


import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' component={Home} />
                <Route path='/loginPage' component={LoginPage} />
                <Route path='/todoApp' component={App} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
