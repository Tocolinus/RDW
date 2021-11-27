import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Niteroi from '../pages/Niteroi'
import SaoPaulo from '../pages/Niteroi'



const Routes = props => {
    return(
        <Router>
            <Switch>

                <Route path= "/:rj/niteroi" element={ <Niteroi city={ props.city } /> } />
                <Route path= "/:sp/sao-paulo" element={ <SaoPaulo city={ props.city } /> } />

            </Switch>
        </Router>
    )
}

export default Routes