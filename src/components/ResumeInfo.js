import React from 'react';
import './ResumeInfo.css'; // Import your specific styles for ResumeInfo
import companyimage from 'C:/Users/anvay/personal-info-website/src/Assests/logo1.png'; // Use relative path to the image

const ResumeInfo = () => {
  return (
    <div className="resume-info-container">
      <div className="resume-section about">
        <h2>About</h2>
        <div className="subheading-box">
          <p>
            I am currently a last-year student at MIT ADT University, with a diverse set of skills and projects to showcase.
            Although the skills mentioned above are limited, learning new skills would be no big task for me.
          </p>
          <p>Some of my qualities:</p>
          <p>
            • Problem solving <br />
            • Teamwork<br />
            • Communication<br />
            • Time management<br />
            • Random stuff
          </p>
        </div>
      </div>

      <div className="resume-section experience">
        <h2>Experience</h2>
        <div className="subheading-box">
          <h3>Internship at the company nuQare(Dataquent)</h3>
          <a href="https://nuqare.com" target="_blank" rel="noopener noreferrer" className="company-link">
            <img src={companyimage} alt="XYZ Company Logo" className="company-logo" />
          </a>
          <p>
            As an intern, we worked on integrating the company software with different devices that use the OAuth framework.
            The project was made in C# using MongoDB Atlas as the database, and REST APIs to get data from Google APIs.
          </p>
        </div>
      </div>

      <div className="resume-section skills">
        <h2>Skills</h2>
        <div className="subheading-box">
          <p>
            • JavaScript<br /> • React<br /> • Node.js<br /> • Python3<br /> • Machine Learning<br /> • Deep Learning
            (NumPy, Matplotlib, Pandas, TensorFlow)<br /> • Tableau<br /> • Power BI<br /> • SQL | MongoDB<br /> • R
          </p>
        </div>
      </div>

      <div className="resume-section projects">
        <h2>Projects</h2>
        <div className="subheading-box">
          <a href="https://github.com/AnvayKhedulkar/Crichton" className="project-link">
            <h3>Crichton</h3>
          </a>
          <p>
            A platform designed to support children with ADHD and Autism. Therapeutic Video Library: Access locally stored
            videos tailored by age and condition. Custom Subscription Plans: Choose plans based on your child's unique needs
          </p>
        </div>
        <div className="subheading-box">
          <a href="https://github.com/AnvayKhedulkar/Wine_quality_analysis" className="project-link">
            <h3>Wine quality analysis</h3>
          </a>
          <p>
            I prepared the dataset by handling missing values and encoding categorical features. Then, I conducted exploratory
            data analysis (EDA) to understand feature distributions and correlations. Finally, I trained a RandomForestClassifier
            and evaluated its performance.
          </p>
        </div>
        <div className="subheading-box">
          <a href="https://github.com/AnvayKhedulkar/Google_Integration" className="project-link">
            <h3>Google Integration project</h3>
          </a>
          <p>
            I did a project to get the data from Google Fit database and save it in mine and later analyze it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeInfo;
