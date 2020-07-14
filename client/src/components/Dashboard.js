import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Navbar from './layout/Navbar'

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div>
            <Navbar />
            <h2>Book online</h2>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                isClearable
                placeholderText="Choose a date" />
        </div>
    )
};

export default Dashboard