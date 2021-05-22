import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Lista from '../lista/lista'
import About from '../about/about'

export default props => (
<Router history={hashHistory}>
    <Route path='/listas' component={Lista} />
    <Route path='/about' component={About} />
    <Redirect from='*' to='/listas' />
</Router>
)