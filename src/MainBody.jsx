import Student from './Components/Student/Student';
import StudentReview from './Components/Student/StudentReview';
import React from 'react';

class MainBody extends React.Component {
  render(){
    const whatwewilllearn = "ReactJS"
    const lecturecount = 3
    return(
      <div>
        <p>
          In This Course, We will Learn  {whatwewilllearn} by building TaskOPedia!<br/>
          Total Lecture - {lecturecount}
        </p>
        <ul>
          <li>Basic Foundations</li>
          <li>functional and Class Components</li>
        </ul>
        <div className="container row">Students Enrolled</div>
          <Student experience={2} name="Kris Walley">
            <StudentReview/>
          </Student>
          <Student experience={5} name="Jane Doe">
            <StudentReview/>
          </Student>
          <Student experience={7} name="Angel Patt">
            <StudentReview/>
          </Student>
          <Student experience={3} name="Renee Lopez">
            <StudentReview/>
          </Student>
      </div>
    );
  }
} 

export default MainBody;