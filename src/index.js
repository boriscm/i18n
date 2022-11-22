import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

var lang = navigator.language;

 

ReactDOM.render(
        
        <IntlProvider locale= {lang} messages = { {"en": localeEnMessages, "es-ES": localeEsMessages}[""+lang]}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
);
