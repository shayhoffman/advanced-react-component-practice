import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Comments from "./components/Comments";
import Tasks from "./components/Tasks";
import Orders from "./components/Orders";
import Tickets from "./components/Tickets";
import AreaChart from "./components/AreaChart";
import DonutChart from "./components/DonutChart";
import TasksPanel from "./components/TasksPanel";
import TransactionsPanel from "./components/TransactionsPanel";
import PropTypes from "prop-types";

function App(props) {
 
  return (
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          {/*   <TopNav>   */}
          <TopNav messages={props.messages}/>
          {/*   </TopNav>   */}


            {/*   <SideNav>   */}
            <SideNav />
            {/*   </SideNav>   */}
        </nav>

        <div id="page-wrapper">

            <div className="container-fluid">

                
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Dashboard <small>Statistics Overview</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row">

                   {/*   </Comments>   */}
                    <Comments newComments={props.newComments}/>
                    {/*   </Comments>   */}

                    {/*   <Tasks>   */}
                    <Tasks newTasks={props.newTasks}/>
                    {/*   </Tasks>   */}

                    {/*   <Orders>   */}
                    <Orders newOrders={props.newOrders}/>
                    {/*   </Orders>   */}


                    {/*   <Tickets>   */}
                    <Tickets tickets={props.tickets}/>
                    {/*   </Tickets>   */}




                </div>
                
                {/*   <AreaChart>   */}
                <AreaChart />
                {/*   </AreaChart>   */}

                <div className="row">


                    {/*   <DonutChart>   */}
                    <DonutChart />
                    {/*   </DonutChart>   */}


                    <div className="col-lg-4">
                        {/*   <TasksPanel>   */}
                       <TasksPanel tasks={props.tasks}/>
                        {/*   </TasksPanel>   */}


                    </div>
                    <div className="col-lg-4">


                        {/*   </TransactionsPanel>   */}
                        <TransactionsPanel orders={props.orders}/>
                        {/*   </TransactionsPanel>   */}

                    </div>
                </div>
                

            </div>
            

        </div>
        

    </div>
    </div>

  );
}

App.propTypes = {

};

export default App;
