import React, {useState, useEffect} from 'react'
import './UploadPage.css'
import '../../App.css'
import Axios from 'axios'

function Uploadhpage(){

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [journal, setJournal] = useState('');
    const [year, setYear] = useState('');
    const [volume, setVolume] = useState('');
    const [number, setNumber] = useState('');
    const [pages, setPages] = useState('');
    const [month, setMonth] = useState("");
    //const [participants, setParticipants] = useState('');
    //const [uploaddate, setUploaddate]= useState('');
    const [eprint, setEprint] = useState("");
    const [eprinttype, setEprintype] = useState("");
    const [eprintclass, setEprintclass] = useState("");
    const [annote, setAnnote] = useState("");



    const submitReview = () => {
        Axios.post("http://localhost:3010/api/insert", {
            author: author,
            title: title,
            journal: journal,
            year: year,
            volume: volume,
            number: number,
            pages: pages,
            month: month,
            //participants: participants,
            //uploaddate: uploaddate

            eprint: eprint,
            eprinttype: eprinttype, 
            eprintclass: eprintclass,
            annote: annote,

        }).then(() => {
            alert("successful insert");
        });
    };

        return(
            <div className = 'upload-container'>
                <h1 className = "Header">Upload</h1>
                <form>
                
                <h2 className = "SubHeader">Evidence Source</h2>< br/>
                    <label htmlFor = "author">Author</label>< br/>
                    <input type = "text" id="author" name="author" onChange={(e)=>{setAuthor(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "title">Title</label>< br/>
                    <input type = "text" id="title" name="title" onChange={(e)=>{setTitle(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "journal">Journal</label>< br/>
                    <input type = "text" id="journal" name="journal" onChange={(e)=>{setJournal(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "year">Year</label>< br/>
                    <input type = "text" id="year" name="year" onChange={(e)=>{setYear(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "volume">Volume</label>< br/>
                    <input type = "text" id="volume" name="volume" onChange={(e)=>{setVolume(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "number">Number</label>< br/>
                    <input type = "text" id="number" name="number" onChange={(e)=>{setNumber(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "pages">Pages</label>< br/>
                    <input type = "text" id="pages" name="pages" onChange={(e)=>{setPages(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "month">Month</label>< br/>
                    <input type = "text" id="month" name="month" onChange={(e)=>{setMonth(e.target.value);}} />< br/>< br/>

                    <label htmlFor = "eprint">Eprint</label>< br/>
                    <input type = "text" id="eprint" name="eprint" onChange={(e)=>{setEprint(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "eprinttype">Eprinttype</label>< br/>
                    <input type = "text" id="eprinttype" name="eprinttype" onChange={(e)=>{eprinttype(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "eprintclass">Eprintclass</label>< br/>
                    <input type = "text" id="eprintclass" name="eprintclass" onChange={(e)=>{setEprintclass(e.target.value);}} />< br/>< br/>
                    <label htmlFor = "annote">Annote</label>< br/>
                    <input type = "annote" id="annote" name="annote" onChange={(e)=>{setAnnote(e.target.value);}} />< br/>< br/>
                    
                    <button onClick = {submitReview} >Submit</button>
                </form>
            </div>
        )
}

export default Uploadhpage;