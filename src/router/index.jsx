import { Route,Switch,Redirect } from 'react-router-dom';
import React , {lazy,Suspense} from 'react';

const Demoa = lazy( () => import(/* webpackChunkName:'demoa_page' */ '../components/demoa') );
const Demob = lazy( () => import(/* webpackChunkName:'demob_page' */ '../components/demob') );
const Index = lazy( () => import(/* webpackChunkName:'index_page' */ '../view/index') );
export default class Router extends React.Component {
    render(){
        return (
            <React.Fragment>
              <Suspense fallback={<div>loading...</div>}>
              <Switch>
                    <Route path="/demoa" component={Demoa}></Route>
                    <Route path="/demob" component={Demob}></Route>
                    <Route path="/index" component={Index}></Route>
                    <Redirect from='/' to='/index' exact></Redirect>
                </Switch>
              </Suspense>
            </React.Fragment>
        )
    }
}