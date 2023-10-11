import React from "react";
import "../styles/Testimonials.css";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="line"></div>
      <h3 className="h3">Testimonials</h3>
      <div className="comments">
        <div className="comment1">
          <p className="comment-p1">5 months ago</p>
          <p className="comment-p2">
            "One of the things I appreciated most about this course was its
            structure. The lessons were well-organized and allowing me to
            gradually gain a deep understanding of React concepts. Mr. Venkat
            Sir was knowledgeable and engaging, and the course materials were
            easy to follow. I appreciated the attention to detail in the
            explanations of complex topics, which helped me grasp concepts that
            I had previously struggled with.I can confidently say that this
            course played a pivotal role in me securing a Front End Developer
            Job Offer. The skills and knowledge I gained were directly
            applicable to the job requirements, and I was able to speak
            confidently about my React abilities in the interview."
          </p>
          <p className="comment-p3">- Seeranjeevi R</p>
        </div>
        <div className="comment1">
          <p className="comment-p1">a year ago</p>
          <p className="comment-p2">
            Such a good place to learn to code! Mr Venkat sir,he has been
            teaching in an extremely compassionate way. I have learnt a lot
            about react programming from him. I would recommend this course to
            anyone looking to get their feet wet with programming. thank you!
          </p>
          <p className="comment-p3">- Bernisha B</p>
        </div>
        <div className="comment1">
          <p className="comment-p1">11 months ago</p>
          <p className="comment-p2">
            It was a great experience to learn Full Stack MERN course from Mr.
            Venkat. He explained all the topics from scratch in a very easy
            manner. He helped me in each and every part of the course, explained
            all my doubts, helped me to debug my code. At the end of the course,
            I have created my own Todo web application. Thank you so much sir.
          </p>
          <p className="comment-p3">- Venkateshwaran P</p>
        </div>
      </div>
      <div className="buttons">
        <Buttons>WRITE A REVIEW </Buttons>
        <li>
          <Link to="/review">
            <Buttons> READ MORE</Buttons>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Testimonials;
