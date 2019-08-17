import React from 'react'
import RVPlayer from './RVPlayer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Styling
import GlobalStyle from '../styles/GlobalStyle'

const App = () => (
    <BrowserRouter>
        <>
            <Switch>
                <Route exact path="/" component={RVPlayer} />
                <Route exact path="/:activeVideo" component={RVPlayer} />
            </Switch>
            <GlobalStyle />
        </>
    </BrowserRouter>
)

export default App
