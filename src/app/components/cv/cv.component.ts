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
            },
          },
          {
            title: 'AWS Certified Cloud Practitioner',
            modal: {
              body: 'Easiest AWS Cert',
            },
          },
          { title: 'AWS Certified Solutions Architect - Associate' },
          { title: 'Touch Typing qualification (KAZ - City & Guilds Assured)' },
        ]
      }]
    }
  ]
}
