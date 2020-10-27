import ReactDOM from 'react-dom' ;
import React from 'react' ;
import "./index.scss" ;
import App from "./App" ;
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../node_modules/bootstrap-select/dist/js/bootstrap-select.min.js" ;

import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;
import { far } from '@fortawesome/free-regular-svg-icons' ;


library.add(fas , far) ;

const rootElement = document.getElementById("root") ;

ReactDOM.render(<App /> ,rootElement) ;