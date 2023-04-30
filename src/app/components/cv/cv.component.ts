import { Component } from '@angular/core';
import { CvSection } from 'src/app/interfaces/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  downloadFile(): void {
    const url = 'https://s3.eu-west-2.amazonaws.com/jackwhurt.com.assets/JACK-HURT-SOFTWARE-ENGINEER-CV.pdf';
    const fileName = 'JACK-HURT-SOFTWARE-ENGINEER-CV.pdf';

    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href);
      });
  }

  cvSections: CvSection[] = [
    {
      title: 'Skills',
      cvItems: [{
        list: ['Java', 'Typescript', 'C', 'Haskell', 'HTML', 'CSS', 'Angular', 'React', 'Springboot', 'Less.js', 'Bootstrap',
          'Latex', 'SQL', 'NoSQL', 'REST', 'Node', 'Git', 'AWS', 'Azure', 'CI/CD', 'Agile', 'OOP', 'Functional', 'Full-Stack',
          'Unit Testing', 'Docker']
      }]
    },
    {
      title: 'Experience',
      cvItems: [
        {
          title: 'Trainee Software Engineer',
          location: 'Kainos',
          locationLink: 'https://www.kainos.com',
          duration: 'Aug 2022 - Aug 2023',
          bulletPoints: [
            { title: 'Developed a web-app using Angular to digitalise a multitude of workflows within hospitals' },
            { title: 'Led original initiative to raise unit test coverage, resulting in coverage doubling' },
            { title: 'Mentored the apprentice with efforts such as pair programming sessions and weekly catch-up calls ' },
            { title: 'Part of a 7 week training academy which covered topics such as: full-stack development, REST APIs, databases, functional & non-functional testing, quality code and agile methodologies' },
          ]
        },
        {
          title: 'Intern Software Developer',
          location: 'BigSpark',
          locationLink: 'https://bigspark.dev',
          duration: 'Jun 2021 - Aug 2021',
          bulletPoints: [
            { title: 'Designed a wrapper web application for Amazon Deequ using Java, Javascript, Springboot, React & AWS' },
            { title: 'Led the development of the REST API that was dockerized and hosted in EC2, which I eventually moved to spot instances to cut costs by 55%' },
            { title: 'Presented and demoed my work on the company wide fortnightly calls' },
          ]
        }
      ]
    },
    {
      title: 'Education',
      cvItems: [
        {
          title: 'BSc Mathematics and Computer Science',
          location: 'University of Birmingham',
          locationLink: 'https://www.birmingham.ac.uk/index.aspx',
          duration: '2020 - 2024',
          bulletPoints: [
            { 
              title: 'Achieved 1:1 in First & Second Year with highlights of 92 in Object Oriented Programming and 89 in Systems Programming in C/C++',
              dropdown: {
                body: 'First Year Modules: Real Analysis; Vectors, Geometry & Linear Algebra; Mechanics; Statistics; Object Oriented Programming; Data Structures & Algorithms; Theory of Computation\n'
                + 'Second Year Modules: Algebra & Combinatorics; Real & Complex Analysis; Differential Equations; Systems Programming in C/C++; Functional Programming; Security & Networks\n' 
                + 'Third Year Modules: Linear Algebra & Linear Programming; Multivariable & Vector Analysis; Advanced Functional Programming; Algorithms & Complexity; Computer Science Project',
              },
            }
          ]
        },
        {
          title: 'The King\'s Grammar School Grantham',
          duration: '2013 - 2020',
          bulletPoints: [
            {
              title: 'A-Level: A*A*AA',
              dropdown: {
                body: 'A* in Mathematics, Computer Science & Further Maths (AS) \n A in Physics',
              },
            },
            {
              title: 'GCSE: Five 9s, Two 6s & Three 5s',
              dropdown: {
                body: 'Grade 9 in Mathematics, Computer Science, Physics, Chemistry, Biology \n Grade 6 in German & Geography \n Grade 5 in History, English Lit & English Lan',
              },
            },
            { title: 'Awarded The ACI Trophy for Outstanding Achievements in IT and The Newton Award' },
          ]
        }
      ]
    },
    {
      title: 'Projects',
      cvItems: [
        {
          title: 'Personal Website',
          description: 'Developed a personal website using Angular, deployed using AWS S3, CodePipeline, and CloudFront. Implemented a REST API using API Gateway to invoke Lambda functions that interact with DynamoDB and SNS. Displays & tracks when multiple people go to the gym, which is fully automated using Apple Shortcuts',
        },
        {
          title: 'WaggyTailz Organisational & Invoicing Program',
          description: 'Automated a invoicing process by dynamically generating \& emailing Word documents out by querying a local database. Implemented processes to distribute jobs to the various employees. Jobs were distributed depending on weight and location of job, to ensure employees had an even weight of jobs, which resulted in the least amount of travel',
        },
      ]
    },
    {
      title: 'Leadership Experience',
      cvItems: [
        {
          title: 'Customer Assistant',
          location: 'Morrisons',
          duration: 'Mar 2020 - Jul 2020',
          bulletPoints: [
            { title: 'After quickly picking up the warehouse, checkout and grocery units I was tasked with training multiple staff' },
            { title: 'Led to one new warehouse ' },
          ]
        },
        {
          title: 'Mathematics Mentor',
          location: 'The King\'s Grammar School Grantham',
          duration: 'Sep 2018 - Mar 2020',
          bulletPoints: [{ title: 'Mentored several under-performing students resulting in all of them achieving or exceding their target' }]
        },
      ]
    },
    {
      title: 'Achievements',
      cvItems: [{
        bulletPoints: [
          {
            title: 'AWS Certified Solutions Architect - Associate',
            modal: {
              title: 'AWS Certified Solutions Architect - Associate',
              body: 'Displays strong knowledge of Amazon\'s cloud services. Focuses on design of cost and performance optimised solutions. <br><br> Issued May 2023 with Expiry May 2026. <br> Please click <a href="">here</a> to see credential.',
              picture: 'https://s3.eu-west-2.amazonaws.com/jackwhurt.com.assets/AWS-Solutions-Architect-Associate.png',
            },
          },
          {
            title: 'AWS Certified Cloud Practitioner',
            modal: {
              title: 'AWS Certified Cloud Practitioner',
              body: 'Displays foundational knowledge of Amazon\'s cloud services. <br><br> Issued October 2022 with Expiry October 2025. <br> Please click <a href="https://www.credly.com/badges/652c6861-913b-438f-9207-3afab3470178/public_url">here</a> to see credential.',
              link: 'https://www.credly.com/badges/652c6861-913b-438f-9207-3afab3470178/public_url',
              picture: 'https://s3.eu-west-2.amazonaws.com/jackwhurt.com.assets/AWS-Certified-Cloud-Practitioner.png',
            },
          },
          {
            title: 'Microsoft Certified: Azure Fundamentals',
            modal: {
              title: 'Microsoft Certified: Azure Fundamentals',
              body: 'Displays foundational knowledge of Microsoft\'s cloud services. <br><br> Issued November 2022 with No Expiry. <br> Please click <a href="https://www.credly.com/badges/6885d399-0d39-4841-a559-2fb900d73826/public_url">here</a> to see credential.',
              link: 'https://www.credly.com/badges/6885d399-0d39-4841-a559-2fb900d73826/public_url',
              picture: 'https://s3.eu-west-2.amazonaws.com/jackwhurt.com.assets/AZ-900.png',
            },
          },
          {
            title: 'YugabyteDB Fundamentals - Associate',
            modal: {
              title: 'YugabyteDB Fundamentals - Associate',
              body: 'Demonstrates fundamental knowledge of the open source, high-performance distributed SQL database designed for cloud-native and horizontally scalable applications. <br><br> Issued October 2019 with No Expiry.',
              picture: 'https://s3.eu-west-2.amazonaws.com/jackwhurt.com.assets/yb-dba-badge.png',
            },
          },
          {
            title: 'Touch Typing qualification (KAZ - City & Guilds Assured)',
            modal: {
              title: 'Touch Typing qualification (KAZ - City & Guilds Assured)',
              body: 'Issued October 2019 with No Expiry. <br> Please click <a href="https://www.credly.com/badges/6c4e06d8-0281-4450-84d6-6f0de2542ac7/public_url">here</a> to see credential.',
              link: 'https://www.credly.com/badges/6c4e06d8-0281-4450-84d6-6f0de2542ac7/public_url',
              picture: 'https://s3.eu-west-2.amazonaws.com/jackwhurt.com.assets/kaz-touch-type-program.png',
            },
          },
        ]
      }]
    }
  ]
}
