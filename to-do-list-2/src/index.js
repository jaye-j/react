import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Blogs from './components/Blogs';
import Forums from './components/Forums';
import LiftingState from './components/LiftingState';
import NoMatch from './components/NoMatch';
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

ReactDOM.render(
  
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Redirect from="/aboutus" to="/"/>
        <Route path="/aboutus" component={Aboutus}/>
        <Route path="/contactus" component={Contactus}/>
        <Route exact path="/blogs" component={Blogs}/>
        <Route path="/blogs:blogID" component={Blogs}/>
        <Route path="/forums" component={Forums}/>
        <Route path="/liftingstate" component={LiftingState}/>


        <Route component={NoMatch}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
