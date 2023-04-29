import { Component } from '@angular/core';
import { CvSection } from 'src/app/interfaces/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvSections: CvSection[] = [
    {
      title: 'Skills',
      cvItems: [{
        list: ['Java', 'Typescript', 'C', 'Haskell']
      }]
    },
    {
      title: 'Experience',
      cvItems: [
        {
          title: 'Trainee Software Engineer',
          location: 'Kainos',
          duration: 'Aug 2022 - Aug 2023',
          bulletPoints: [
            { title: 'Currently developing a web-app using Angular to digitalise a multitude of workflows within hospitals' },
            { title: 'Led original initiative to raise unit test coverage, resulting in an increase of 100%' },
            { title: 'Mentoring the apprentice with efforts such as pair programming sessions and weekly catch-up calls' },
            { title: 'Part of a 7 week training academy which covered topics such as: full-stack development, REST APIs, databases, functional & non-functional testing, quality code and agile methodologies' },
          ]
        },
        {
          title: 'CvTitle',
          description: 'Description',
          location: 'Location',
          duration: 'Duration',
          bulletPoints: [{ title: 'point1' }, { title: 'point2' }]
        }
      ]
    },
    {
      title: 'Education',
      cvItems: [
        {
          title: 'CvTitle',
          description: 'Description',
          location: 'Location',
          duration: 'Duration',
          bulletPoints: [{ title: 'point1' }, { title: 'point2' }]
        },
        {
          title: 'CvTitle',
          description: 'Description',
          location: 'Location',
          duration: 'Duration',
          bulletPoints: [{ title: 'point1' }, { title: 'point2' }]
        }
      ]
    },
    {
      title: 'Projects',
      cvItems: [
        {
          title: 'CvTitle',
          description: 'Description',
        },
        {
          title: 'CvTitle',
          description: 'Description',
        },
      ]
    },
    {
      title: 'Leadership Experience',
      cvItems: [
        {
          title: 'CvTitle',
          location: 'Location',
          duration: 'Duration',
          bulletPoints: [{ title: 'point1' }, { title: 'point2' }]
        },
        {
          title: 'CvTitle',
          location: 'Location',
          duration: 'Duration',
          bulletPoints: [{ title: 'point1' }, { title: 'point2' }]
        },
      ]
    },
    {
      title: 'Achievements',
      cvItems: [{
        bulletPoints: [
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
            title: 'AWS Certified Cloud Practitioner',
            modal: {
              title: 'AWS Certified Cloud Practitioner',
              body: 'Displays foundational knowledge of Amazon\'s cloud services. <br><br> Issued October 2022 with Expiry October 2025. <br> Please click <a href="https://www.credly.com/badges/652c6861-913b-438f-9207-3afab3470178/public_url">here</a> to see credential.',
              link: 'https://www.credly.com/badges/652c6861-913b-438f-9207-3afab3470178/public_url',
              picture: 'https://s3.eu-west-2.amazonaws.com/jackwhurt.com.assets/AWS-Certified-Cloud-Practitioner.png',
            },
          },
          { 
            title: 'AWS Certified Solutions Architect - Associate',
            modal: {
              title: 'AWS Certified Solutions Architect - Associate',
              body: 'Displays strong knowledge of Amazon\'s cloud services. Focuses on design of cost and performance optimised solutions. <br><br> Issued May 2023 with Expiry May 2026. <br> Please click <a href="">here</a> to see credential.',
              picture: 'https://s3.eu-west-2.amazonaws.com/jackwhurt.com.assets/AWS-Solutions-Architect-Associate.png',
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
          { 
            title: 'YugabyteDB Fundamentals - Associate',
            modal: {
              title: 'YugabyteDB Fundamentals - Associate',
              body: 'Demonstrates fundamental knowledge of the open source, high-performance distributed SQL database designed for cloud-native and horizontally scalable applications. <br><br> Issued October 2019 with No Expiry.',
              picture: 'https://s3.eu-west-2.amazonaws.com/jackwhurt.com.assets/yb-dba-badge.png',
            }, 
          },
        ]
      }]
    }
  ]
}
