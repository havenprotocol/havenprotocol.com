import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Nav';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import green from 'material-ui/colors/green';


const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey,
  },
});

ReactDOM.render(<MuiThemeProvider theme={theme}><div id="outer-container"><Nav /><App /></div></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
