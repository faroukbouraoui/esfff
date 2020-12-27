import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Signup from './components/Signup';
import Signin from './components/Signin';

import UserRoute from './components/UserRoute';
import AdminRoute from './components/AdminRoute';
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard';
import Services from './components/Services';
import Addservice from './components/Addservice';
import UpdateService from './components/UpdateService';
import Offres from './components/Offres';
import AddOffre from './components/AddOffre';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import UpdateBlog from './components/UpdateBlog';
import Contact from './components/Contact';
import AddTemplate from './components/AddTemplate'
import templates from './components/Tempteles'
import AdminCategory from './components/AdminCategory';
import AddCategory from './components/AddCategory';

import Home from './components/pages/HomePage/Home';
import GlobalProcess from './components/GlobalProcess';
import StepContext from './StepContext'








function App() {

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('user'));
		if (items) {
		  console.log(items)
		}else{
			console.log('empty')
		}
	  }, []);

  return (
		<BrowserRouter>
		
			<main>
		
				<Switch>
			
					
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/signin' component={Signin} />
					
					
          <Route  path="/services" component={Services} />
          <Route  path="/post-service" component={Addservice} />  
          <Route path="/updateservice/:id" component={UpdateService} />
          <Route path="/offres" component={Offres} />
          <Route path="/add-offre" component={AddOffre}/>
          <Route path='/blogs' component={Blogs} />
          <Route path='/add-blog' component={AddBlog}  />
          <Route path='/update-blog/:id' component={UpdateBlog} />
		  <Route path='/contact' component={Contact} />
		  <Route path="/Add-template" component={AddTemplate} />
		  <Route path="/templates" component={templates} />
		  <Route path ="/categories" component={AdminCategory} />
		  <Route path="/add-category" component={AddCategory} />
	<Route exact path='/' component={UserDashboard} />
	  <AdminRoute
		  exact
		  path='/admin'
		  component={AdminDashboard}
	  />
	  <StepContext>
      <Route exact path="/process" ><GlobalProcess /></Route>
      </StepContext>
			
				</Switch>
			</main>
		</BrowserRouter>
	);
}

export default App ;
