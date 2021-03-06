import React, { useState } from "react";
import PreviewExperience from './PreviewExperience.js';

function Experience() {
    const [inputValues, setInputValues] = useState({
        company: '',
        position: '',
        responsibilities: '',
        dateFrom: '',
        dateTo: '',
        isVisible: false
    })

    const handleToggle = () => {
        const value = !inputValues.isVisible
        setInputValues({...inputValues, isVisible: value})
    };

    function handleSubmit(){
        //anything else? if not just set onSubmit to handletoggle.
        handleToggle();
    }

    function handleChange(event){
        const { name, value } = event.target;
        setInputValues({...inputValues, [name]: value})
        //expect could find a way to reuse these functions - to look at
    }

    if (inputValues.isVisible === false) {
    return(
        <div className="sectionContainer">
            <h3>Experience</h3>
            <form onSubmit={handleSubmit}>
                <div className="inputAndLabel">
                    <label htmlFor="companyName">Company Name</label><br />
                    <input name="company" type="text" value={inputValues.company} onChange={handleChange}></input>
                </div>
                <div className="inputAndLabel">
                    <label htmlFor="position">Position</label><br />
                    <input name="position" type="text" value={inputValues.position} onChange={handleChange}></input>
                </div>
                <div className="inputAndLabel">
                    <label htmlFor="responsibilities">Responsibilities</label><br />
                    <textarea name="responsibilities" value={inputValues.responsibilities} onChange={handleChange}></textarea>
                </div>
                <div className="inputAndLabel">
                    <label htmlFor="dateFrom">Start Date</label><br />
                    <input type="date" name="dateFrom" value={inputValues.dateFrom} onChange={handleChange}></input>
                </div>
                <div className="inputAndLabel">
                    <label htmlFor="dateTo">End Date</label><br />
                    <input type="date" name="dateTo" value={inputValues.dateTo} onChange={handleChange}></input>
                </div>
                    <input type="submit" id="submitExp"></input>
            </form>
        </div>
    );
} else {
    return(
        <div className="previewDiv">
            <PreviewExperience company={inputValues.company} position={inputValues.position} responsibilities={inputValues.responsibilities} dateFrom={inputValues.dateFrom} dateTo={inputValues.dateTo} />
            <button class="edit" onClick={handleToggle}>Edit</button>
        </div>
    )
}
}


    


export default Experience;