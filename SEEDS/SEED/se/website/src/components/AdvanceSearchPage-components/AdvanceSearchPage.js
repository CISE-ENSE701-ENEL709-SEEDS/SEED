import React, { useState, useEffect } from "react";
import "./AdvanceSearchPage.css";
import "../../App.css";
import Axios from "axios";

const AdvanceSearchPage = (props) => {
    const [selectTitle, setSelectTitle] = useState("");
    const [selectStartDate, setSelectStartDate] = useState("");
    const [selectEndDate, setSelectEndDate] = useState("");
    const [selectMethod, setMethod] = useState("");
    const [selectBenefit, setSelectBenefit] = useState("");
    const [selectParticipants, setSelectParticipants] = useState("");

    const [reviewList2, setreviewList2] = useState([]);

    const postTarget2 = `http://localhost:3010/api/advanceSelect`;

    // when title change auto send post to backend
    useEffect(() => {
        if (selectTitle != "", selectStartDate != "", selectEndDate != "", selectBenefit != "") {

            submitReview2();
        } else {
            setreviewList2([])
        }
    }, [selectTitle]);

    useEffect(
        (e) => {
            console.log(reviewList2);
        },
        [reviewList2]
    );
    const submitReview2 = () => {
        var bodyData = {
            selectTitle: selectTitle,
            selectStartDate: selectStartDate,
            selectEndDate: selectEndDate,
            selectMethod: selectMethod,
            selectBenefit: selectBenefit,
            selectParticipants: selectParticipants

        };

        Axios.post(postTarget2, bodyData)
            .then((response) => {
                //200 for success
                if (response.status === 200) {
                    // when success set result
                    var processed = [];

                    response.data.map(el => {
                        console.log(el)
                        processed.push(el);
                    })


                    setreviewList2(processed);
                } else {
                    alert("Backend error => backend return is not 200");
                }
            })
            .catch((error) => {
                alert("Backend error=> post send but no resp");
            });
    };

    return (
        <div className="search-container">
            <p>
                search triger : input onBlur {"->"} triger update state {"=>"} triger
                useEffect {"=>"} triger submitReview2()
            </p>
            <p>search triger : form submit will directly triger submitReview2()</p>
            <h1 className="Header">Priority Search Options</h1>
            <form
                onSubmit={(e) => {
                    //stop page reflash on submit
                    e.preventDefault();

                    //triger submit logic
                    submitReview2();
                }}
            >
                <label htmlFor="Title">Title</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    onBlur={(e) => {
                        setSelectTitle(e.target.value);
                    }}
                />
                <br />

                <label htmlFor="Date">Date</label>
                <br />
                <p>
                    <input type="date" id="start_date" name="start_date" onBlur={(e) => {setSelectStartDate(e.target.value);}} />-
                    <input type="date" id="end_date" name="end_date" onBlur={(e) => {setSelectEndDate(e.target.value);}} />
                </p>
                <br />
                <label htmlFor="Method">Method</label>
                <br />
                <br />
                <div>
                    <input type="checkbox" id="TDD" name="method" value="TDD" />
                    <label for="TDD">TDD</label>
                    <br />

                    <input
                        type="checkbox"
                        id="code"
                        name="method"
                        value="code"
                    />
                    <label for=" code"> code</label>
                    <br />

                    <input
                        type="checkbox"
                        id="quality"
                        name="method"
                        value="quality"
                    />
                    <label for="quality"> quality</label>
                    <br />

                    <input
                        type="checkbox"
                        id="application"
                        name="method"
                        value="application"
                    />
                    <label for="application">application</label>
                    <br />

                    <input
                        type="checkbox"
                        id="confidence"
                        name="method"
                        value="confidence"
                    />
                    <label for="confidence"> confodemce</label>
                    <br />

                </div>

                <button type="submit">Submit</button>
            </form>
            <p>if result is not empty {"=>"} here will display the result</p>{" "}
            {reviewList2.map((el, i) => {
                return <div key={`display ${i}`}>
        
                    {Object.keys(el).map(k => {
                        return <p key={`display ${i} ${k}`}>{k}: {el[k]}</p>

                    })}

                </div>

            })}
        </div>
    );
};

export default AdvanceSearchPage;