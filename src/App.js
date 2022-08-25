import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Library from './pages/Library';
import Library_Playlist from './pages/Library_Playlist';
import Test from './pages/Test';
import Test_Series from './pages/Test_Series';
import Batches from './pages/Batches';
import Calender from './pages/Calender';
import Fee_Payment from './pages/Fee_Payment';
import Staff from './pages/Staff';
import Blog from './pages/Blog';
import Student_Counselling from './pages/Student_Counselling';
import Reported_Issues from './pages/Reported_Issues';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/Teachers' component={Teachers} />
          <Route path='/Students' component={Students} />
          <Route path='/Library' component={Library} />
          <Route path='/Library_Playlist' component={Library_Playlist} />
          <Route path='/Test' component={Test} />
          <Route path='/Test_Series' component={Test_Series} />
          <Route path='/Batches' component={Batches} />
          <Route path='/Calender' component={Calender} />
          <Route path='/Fee_Payment' component={Fee_Payment} />
          <Route path='/Staff' component={Staff} />
          <Route path='/Blog' component={Blog} />
          <Route path='/Student_Counselling' component={Student_Counselling} />
          <Route path='/Reported_Issues' component={Reported_Issues} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
