import React, {useState} from 'react';
import './Search.css'; 
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { DateRangePicker } from "react-date-range";
import Button from '@mui/material/Button';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useNavigate } from "react-router-dom";

function Search() {

    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

  return (
    <div className = "Search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Enter your city: <AddLocationAltIcon />
            </h2>
            <input type="text" />
            <Button onClick={() => navigate('/Search')}>Find Activities</Button>
    </div>
  )
}

export default Search