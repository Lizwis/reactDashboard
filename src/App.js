import React from "react";
import "./App.css";
import Navigation from './components/Navigation';
import EhnanceSVG from "./images/undraw_Updated_re_u4yh.svg";
import UsersIcon from "./images/users-icon.png";
import BoxIcon from "./images/box-icon.png";

import Areachart from "./components/charts/AreaChart";
import BarChart from "./components/charts/BarChart";

import WorldMapChart from "./components/charts/WorldMapChart";

import DatepickerInput from './components/DatepickerInput';


function App() {
  return (
    <div>
      <div className="left-side-menu bg-dark-color">
        <Navigation />
      </div>

      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="col-12 pt-4">
              <div className="row">
                <div className="col-lg-2 text-left font-weight-bold pt-1">
                  Anaylicts

                  </div>
                <div className="col-lg-8 d-flex justify-content-center">
                  <div className="col-6 text-center ml-0 mr-0">
                    <form className="app-search">
                      <div class="input-group">
                        <input type="text" className="form-control" placeholder="Search..." />
                        <div className="input-group-append">
                          <button class="btn" type="submit"> <i className="fe-search"></i> </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-2 text-right">
                  <DatepickerInput />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="card-box py-2">
                  <div className="header-title-text mt-0 pt-0 mb-0 text-uppercase">
                    Active Users
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h3 className="text-grey">160</h3>
                    </div>
                    <div className="col-6 text-right">
                      <h3 className="text-grey">
                        <img src={UsersIcon} />

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
                  <div className="header-title-text mt-0 pt-0 mb-0 text-uppercase">
                    Views Per Minuet
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <h3 className="text-grey">253</h3>
                    </div>

                    <div className="col-6 text-right">
                      <h3 className="text-grey">
                        <img src={BoxIcon} />
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
                <div className="card-box py-2  bg-enhance">
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

              <div className="col-xl-8 col-md-6">
                <Areachart />
              </div>
            </div>

            <div className="row pt-4">
              <div className="col-xl-12">
                <div className="card-box">
                  <h4 className="header-title mt-0">Seasons By Country</h4>
                  <div className="row">
                    <WorldMapChart />
                    <BarChart />
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
