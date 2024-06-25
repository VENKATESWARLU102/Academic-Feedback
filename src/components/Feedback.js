import React, { useState } from 'react';
import Header from './Header';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import "./Feedback.css";

function Feedback() {
    const [selectedDept, setSelectedDept] = useState('');
    const [subEnabled, setSubEnabled] = useState(false);
    const [selectedSub, setSelectedSub] = useState('');
    const history = useNavigate();
    const location = useLocation();
    const username = location.state.id;

    const [facultyName, setFacultyName] = useState('');
    const [interaction, setInteraction] = useState('');
    const [explanation, setExplanation] = useState('');
    const [clarifying, setClarifying] = useState('');
    const [usage, setUsage] = useState('');

    const deptSubMap = {
        cse: ['Operating Systems', 'Database Management', 'Web Development', 'Machine Learning'],
        ece: ['Digital Signal Processing', 'Microprocessors', 'Communication Systems', 'VLSI Design'],
        mech: ['Thermodynamics', 'Fluid Mechanics', 'Mechanical Vibrations', 'Automotive Engineering'],
        civil: ['Structural Engineering', 'Geotechnical Engineering', 'Transportation Engineering', 'Environmental Engineering']
    };

    const handleDeptChange = (event) => {
        const dept = event.target.value;
        setSelectedDept(dept);
        setSelectedSub('');
        setSubEnabled(dept !== '');
    };

    const handleSubChange = (event) => {
        setSelectedSub(event.target.value);
    };

    function submit(e) {
        e.preventDefault();
        // const { username } = location.state.username;
        // const { username } = location.state.id;


        if (selectedDept && selectedSub && facultyName && explanation && clarifying && interaction && usage && username) {
            const formData = {
                dept: selectedDept,
                sub: selectedSub,
                facultyName: facultyName,
                explanation: explanation,
                interaction: interaction,
                clarifying: clarifying,
                usage: usage,
                username: username
            };

            axios.post('http://localhost:8000/feedback', formData)
                .then(response => {
                    console.log('Feedback submitted successfully:', response.data);
                    // history('/submittedfeedback');
                    history('/submittedsuccessfully');
                })
                .catch(error => {
                    console.error('Error submitting feedback:', error);
                });
        } else {
            alert('Please select a department, subject, and enter faculty name before submitting.');
        }
    }

    return (
        <div>
            <Header />
            <div>Feedback {username}</div>
            <div className='teach'>
                <form onSubmit={submit}>
                    <div className='teachlabelaside'>
                        <div className='teachlabel'>
                            <label htmlFor="dept" className=''>Choose a department:</label><br />
                            <select className="dept" id="dept" onChange={handleDeptChange} required value={selectedDept}>
                                <option value="">Select</option>
                                <option value="cse">CSE</option>
                                <option value="ece">ECE</option>
                                <option value="mech">Mechanical</option>
                                <option value="civil">Civil</option>
                            </select>
                        </div>
                        <br />
                        <div className='teachlabel'>
                            <label htmlFor="sub">Choose a subject:</label><br />
                            <select className="dept" id="sub" onChange={handleSubChange} disabled={!subEnabled} value={selectedSub}>
                                <option value="">Select</option>
                                {deptSubMap[selectedDept]?.map((sub) => (
                                    <option key={sub} value={sub}>{sub}</option>
                                ))}
                            </select>
                        </div>
                    </div> <br />
                    <div className='faculty'>
                        <label className='facultylab' htmlFor="facultyName">Faculty Name</label> <br />
                        <input type="text" onChange={(e) => { setFacultyName(e.target.value) }} placeholder="" name="facultyName" id="facultyName" required /><br />
                    </div>
                    <div className='facrating'>
                        <div>
                            <label className='' htmlFor=''>Explanation of Topic</label><br />
                            <input type='number' onChange={(e) => { setExplanation(e.target.value) }} placeholder="Out Of 5" name="explanation" id="explanation" required /><br />
                        </div>
                        <div>
                            <label className='' htmlFor=''>Clarifying Doubts</label><br />
                            <input type='number' onChange={(e) => { setClarifying(e.target.value) }} placeholder="Out Of 5" name="clarifying" id="clarifying" required /><br />
                        </div>
                    </div>
                    <div className='facrating'>
                        <div>
                            <label className='' htmlFor=''>Usage of Blackboard</label><br />
                            <input type='number' onChange={(e) => { setUsage(e.target.value) }} placeholder="Out Of 5" name="usage" id="usage" required /><br />
                        </div>
                        <div>
                            <label className='' htmlFor=''>Interaction with Students</label><br />
                            <input type='number' onChange={(e) => { setInteraction(e.target.value) }} placeholder="Out Of 5" name="interaction" id="interaction" required /><br />
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Feedback;







// import React, { useState } from 'react';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import "./Feedback.css"

// function Feedback() {
//     const [selectedDept, setSelectedDept] = useState('');
//     const [subEnabled, setSubEnabled] = useState(false);
//     const [selectedSub, setSelectedSub] = useState('');
//     const history = useNavigate();

//     const [facultyName, setFacultyName] = useState('');
//     const [interaction, setInteraction] = useState('');
//     const [explanation, setExplanation] = useState('');
//     const [clarifying, setClarifying] = useState('');
//     const [usage, setUsage] = useState('');


//     const deptSubMap = {
//         cse: ['Operating Systems', 'Database Management', 'Web Development', 'Machine Learning'],
//         ece: ['Digital Signal Processing', 'Microprocessors', 'Communication Systems', 'VLSI Design'],
//         mech: ['Thermodynamics', 'Fluid Mechanics', 'Mechanical Vibrations', 'Automotive Engineering'],
//         civil: ['Structural Engineering', 'Geotechnical Engineering', 'Transportation Engineering', 'Environmental Engineering']
//     };

//     const handleDeptChange = (event) => {
//         const dept = event.target.value;
//         setSelectedDept(dept);
//         setSelectedSub('');
//         setSubEnabled(dept !== '');
//     };

//     const handleSubChange = (event) => {
//         setSelectedSub(event.target.value);
//     };

//     function submit(e) {
//         e.preventDefault(); 
//         if (selectedDept && selectedSub && facultyName && explanation && clarifying && interaction && usage) {
//             const formData = {
//                 dept: selectedDept,
//                 sub: selectedSub,
//                 facultyName: facultyName,
//                 explanation:explanation,
//                 interaction:interaction,
//                 clarifying:clarifying,
//                 usage:usage

//             };
    
//             axios.post('http://localhost:8000/feedback', formData)
//                 .then(response => {
//                     console.log('Feedback submitted successfully:', response.data);
//                     history('/submittedfeedback');
//                     // history(`/feedbacksubmitted?dept=${selectedDept}&sub=${selectedSub}&facultyName=${facultyName}&explanation=${explanation}&clarifying=${clarifying}&usage=${usage}&interaction=${interaction}`);

//                 })
//                 .catch(error => {
//                     console.error('Error submitting feedback:', error);
//                 });
//         } else {
//             alert('Please select a department, subject, and enter faculty name before submitting.'); 
//         }
//     }

//     // function submit(e) {
//     //     e.preventDefault();
//     //     const username = localStorage.getItem('username');
//     //     if (selectedDept && selectedSub && facultyName && explanation && clarifying && interaction && usage) {
//     //         const formData = {
//     //             dept: selectedDept,
//     //             sub: selectedSub,
//     //             facultyName: facultyName,
//     //             explanation: explanation,
//     //             interaction: interaction,
//     //             clarifying: clarifying,
//     //             usage: usage
//     //             // username: username  // Include the username in the form data
//     //         };
    
//     //         axios.post('http://localhost:8000/feedback', formData)
//     //             .then(response => {
//     //                 console.log('Feedback submitted successfully:', response.data);
//     //                 history('/submittedfeedback');
//     //             })
//     //             .catch(error => {
//     //                 console.error('Error submitting feedback:', error);
//     //             });
//     //     } else {
//     //         alert('Please select a department, subject, and enter faculty name before submitting.');
//     //     }
//     // }
    
    


//     return (
//         <div>
//             <Header />
//             <div>Feedback</div>
//             <div className='teach'>
//                 <form onSubmit={submit}>
//                     <div className='teachlabelaside'>
//                     <div className='teachlabel'>
//                         <label htmlFor="dept" className=''>Choose a department:</label><br/>
//                         <select className="dept" id="dept" onChange={handleDeptChange} required value={selectedDept}>
//                             <option value="">Select</option>
//                             <option value="cse">CSE</option>
//                             <option value="ece">ECE</option>
//                             <option value="mech">Mechanical</option>
//                             <option value="civil">Civil</option>
//                         </select>
//                     </div>
//                     <br />
//                     <div className='teachlabel'>
//                         <label htmlFor="sub">Choose a subject:</label><br/>
//                         <select className="dept" id="sub" onChange={handleSubChange} disabled={!subEnabled} value={selectedSub}>
//                             <option value="">Select</option>
//                             {deptSubMap[selectedDept]?.map((sub) => (
//                                 <option key={sub} value={sub}>{sub}</option>
//                             ))}
//                         </select>
//                     </div>

//                     </div>                    <br />
//                     <div className='faculty'>
//                         <label className='facultylab' htmlFor="facultyName">Faculty Name</label> <br/>           
//                         <input type="text" onChange={(e)=>{setFacultyName(e.target.value)}} placeholder="" name="facultyName" id="facultyName" required/><br/>
//                     </div>
//                     <div className='facrating'>
//                         <div>
//                             <label className='' htmlFor=''>Explanation of Topic</label><br/>
//                             <input type='number' onChange={(e)=>{setExplanation(e.target.value)}} placeholder="Out Of 5" name="explanation" id="explanation" required/><br/>
//                         </div>
//                         <div>
//                             <label className='' htmlFor=''>Clarifying Doubts</label><br/>
//                             <input type='number' onChange={(e)=>{setClarifying(e.target.value)}} placeholder="Out Of 5" name="clarifying" id="clarifying" required/><br/>
//                         </div>
//                     </div>
//                     <div className='facrating'>
//                         <div>
//                             <label className='' htmlFor=''>Usage of Blackboard</label><br/>
//                             <input type='number' onChange={(e)=>{setUsage(e.target.value)}} placeholder="Out Of 5" name="usage" id="usage" required/><br/>
//                         </div>
//                         <div>
//                             <label className='' htmlFor=''>Interaction with Students</label><br/>
//                             <input type='number' onChange={(e)=>{setInteraction(e.target.value)}} placeholder="Out Of 5" name="interaction" id="interaction" required/><br/>
//                         </div>
//                     </div>
//                     {/* <div className='feedbackstatment'>
//                         <label className='facultylab' htmlFor="facultyName">Faculty Name</label> <br/>           
//                         <input type="text" onChange={(e)=>{setFacultyName(e.target.value)}} placeholder="" name="facultyName" id="facultyName" required/><br/>
//                     </div> */}
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Feedback;

