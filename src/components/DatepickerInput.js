import React from 'react';

import DatePicker from "react-datepicker";
import "../App.css";

import "react-datepicker/dist/react-datepicker.css";



class DatepickerInput extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (


            <div className="input-group mb-3 text-right">
                <div className="input-group-prepend">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        className="form-control"
                    />
                    <button class="btn btn-primary waves-effect waves-light" type="button"><i class="far fa-calendar-minus"></i>
                    </button>
                    <form action="/">
                        <button class="btn btn-primary waves-effect waves-light pl-1" type="submit"><i class="fas fa-sync-alt"></i>
                        </button>
                    </form>
                </div>

            </div>

        );
    }
}

export default DatepickerInput;