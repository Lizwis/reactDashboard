import React from "react";
import "./App.css";
import logo from "./images/star.png";
import EhnanceSVG from "./images/undraw_Updated_re_u4yh.svg";

import Areachart from "./components/charts/AreaChart";

function App() {
  return (
    <div>
      <div className="left-side-menu bg-dark-color">
        <div className="slimscroll-menu">
          <div className="card-box widget-user">
            <div className="user-box text-center">
              <img
                src={logo}
                className="rounded-circle img-thumbnail avatar-md"
              />

              <p className="text-muted pt-2">Admin Head</p>
            </div>

            <div id="sidebar-menu">
              <ul className="metismenu" id="side-menu">
                <li className="menu-title">Navigation</li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="mdi3 mdi-view-dashboard"></i>
                    <span> Dashboard </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <ul className="nav-second-level" aria-expanded="false">
                    <li>
                      <a href="#">Analytics</a>
                    </li>
                    <li>
                      <a href="#">CRM</a>
                    </li>
                    <li>
                      <a href="#">Ecommerce</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-title">Apps</li>
                <li>
                  <a href="calendar.html">
                    <i className="mdi mdi-calendar"></i>
                    <span> Calendar </span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="mdi mdi-forum"></i>
                    <span> Chat </span>
                  </a>
                </li>

                <li>
                  <a href="inbox.html">
                    <i className="mdi mdi-email"></i>
                    <span> Ecommerce </span>
                  </a>
                </li>
                <li>
                  <a href="inbox.html">
                    <i className="mdi mdi-email"></i>
                    <span> Mail </span>
                  </a>
                </li>
                <li>
                  <a href="inbox.html">
                    <i className="mdi mdi-email"></i>
                    <span> Projects </span>
                  </a>
                </li>
                <li>
                  <a href="inbox.html">
                    <i className="mdi mdi-email"></i>
                    <span> Social Feeds </span>
                  </a>
                </li>

                <li>
                  <a href="inbox.html">
                    <i className="mdi mdi-email"></i>
                    <span> Tasks </span>
                  </a>
                </li>

                <li className="menu-title">Custom</li>

                <li>
                  <a href="ui-typography.html">
                    <i className="mdi mdi-format-font"></i>
                    <span> Pages </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>

      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-4 col-md-6 pt-3">
                <div className="card-box py-2">
                  <div className="header-title mt-0 pt-0 mb-0 text-uppercase">
                    Active Users
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h3 className="text-grey">160</h3>
                    </div>
                    <div className="col-6 text-right">
                      <h3 className="text-grey">
                        <i className="fas fa-users"></i>
                      </h3>
                    </div>
                  </div>
                  <div className="widget-box-2">
                    <div className="row">
                      <div className="col-6 text-success font-weight-bold">
                        <i className="fas fa-arrow-up"></i> 52.7%
                      </div>
                      <div className="col-6 font-weight-light text-right">
                        Since last month
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-box py-2">
                  <div className="header-title mt-0 pt-0 mb-0 text-uppercase">
                    Views Per Minuet
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <h3 className="text-grey">253</h3>
                    </div>

                    <div className="col-6 text-right">
                      <h3 className="text-grey">
                        <i className="fas fa-box"></i>
                      </h3>
                    </div>
                  </div>

                  <div className="widget-box-2">
                    <div className="row">
                      <div className="col-6 text-danger font-weight-bold">
                        <i className="fas fa-arrow-down"></i> 1.00%
                      </div>
                      <div className="col-6 font-weight-light text-right">
                        Since last week
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-box py-2">
                  <div className="row">
                    <div className="col-6">
                      <div className="text-grey font-weight-normal">
                        Enhance Your
                      </div>
                      <div className="pt-1">
                        <span className="font-weight-bold">Compaigne</span> For
                        Better
                      </div>
                      <div className="pt-1 pb-2">
                        Outreach <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>

                    <div className="col-6 text-right py-2">
                      <img src={EhnanceSVG} width="70px" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-md-6 pt-3">
                <Areachart />
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card-box">
                  <div className="row">
                    <div className="col-6">
                      <h4 className="header-title mt-0">Statistics</h4>
                    </div>
                    <div className="col-6">
                      <h4 className="header-title mt-0">Statistics</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
