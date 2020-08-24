import React from 'react';
import logo from "../images/star.png";
function Navigation() {
    return (
        <div>
            <div className="slimscroll-menu">
                <div className="card-box widget-user widget-height">
                    <div className="user-box text-center">
                        <img
                            src={logo}
                            className="rounded-circle img-thumbnail avatar-md"
                        />

                        <p className="text-muted pt-2">Dominic Keller</p>
                    </div>

                    <div id="sidebar-menu">
                        <ul className="metismenu" id="side-menu">
                            <li className="menu-title">Navigation</li>

                            <li>
                                <a href="javascript: void(0);">
                                    <i className="mdi mdi-view-dashboard"></i>
                                    <span> Dashboard  <span class="badge bg-primary">4</span></span>

                                    <span className="menu-arrow"></span>

                                </a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li>
                                        <a href="/analytics">Analytics</a>
                                    </li>
                                    <li>
                                        <a href="/crm">CRM</a>
                                    </li>
                                    <li>
                                        <a href="/ecommerce">Ecommerce</a>
                                    </li>
                                    <li>
                                        <a href="/Projects">Projects</a>
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
                                <a href="/chat">
                                    <i className="mdi mdi-forum"></i>
                                    <span> Chat </span>
                                </a>
                            </li>

                            <li>
                                <a href="inbox.html">
                                    <i className="fas fa-shopping-basket"></i>
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
                                    <i className="fas fa-project-diagram"></i>
                                    <span> Projects </span>
                                </a>
                            </li>
                            <li>
                                <a href="inbox.html">
                                    <i className="far fa-thumbs-up"></i>
                                    <span> Social Feeds </span>
                                </a>
                            </li>

                            <li>
                                <a href="inbox.html">
                                    <i className="fas fa-tasks"></i>
                                    <span> Tasks </span>
                                </a>
                            </li>

                            <li className="menu-title">Custom</li>

                            <li>
                                <a href="ui-typography.html">
                                    <i className="far fa-file-alt"></i>
                                    <span> Pages </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    );
}
export default Navigation;
