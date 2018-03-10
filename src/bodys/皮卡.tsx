import * as React from 'react';
import { IBodyProps } from '../Types';

export default (props: IBodyProps) => (
  <>
    <g id="body">
      <defs>
        <clipPath id="outline">
          <path
            fill="none"
            d="M356.34,93.11,355.15,93a2.48,2.48,0,0,0-.27,0c-2.91-2-5.82-4-8.74-5.93L328.09,74.67l-18-12.43c-6-4.14-12-8.28-18.09-12.3-3-2-6.06-4-9.15-5.88-.77-.46-1.54-.9-2.3-1.3l-.44-.22a.13.13,0,0,1,0,.06c0,.4,0,.83,0,1.27,0,.87.05,1.76.09,2.65.45,7.19,1.48,14.44,2.38,21.66l5,35.75c-.17.14-.31.22-.5.36-16.78,11.82-29.49,28.77-40.42,45.94a377.39,377.39,0,0,0-52.43,133.52c-1.64,9-3,18.11-3.91,27.25-2.95,30.42-1.69,70.59,28.43,87.67,2.13,1.21,13,3.79,8.38,7.39-2.4,1.85-14.48,3-13.86,6.68.7,4.07,12.39,4.42,15.14,4.63a154.42,154.42,0,0,0,17.61.25c.5,0,1.36,0,2.29,0,0-.41,0-.81,0-1.23,0-1.89-.11-3.82,0-5.9s.23-3.84.28-5.79q.13-5.81,0-11.62c-.08-3.87-.29-7.74-.56-11.6s-.7-7.72-1.31-11.54a69.07,69.07,0,0,0-2.59-11.28,32,32,0,0,0-2.24-5.33,16.17,16.17,0,0,0-3.47-4.62h0a16.23,16.23,0,0,1,3.86,4.39,32.74,32.74,0,0,1,2.6,5.28,70.82,70.82,0,0,1,3.27,11.3A156.39,156.39,0,0,1,250.86,393c.2,3.91.31,7.82.27,11.74,0,1.94-.06,4-.17,5.88s.11,3.77.12,5.78a20.78,20.78,0,0,1-.16,3.11,10.25,10.25,0,0,1-.35,1.64,5.4,5.4,0,0,1-.83,1.73,8,8,0,0,1-2.69,2.28,24.91,24.91,0,0,1-2.79,1.32c-.91.38-1.78.74-2.57,1.14a5.63,5.63,0,0,0-1.85,1.34,2.09,2.09,0,0,0-.43,1.64,4,4,0,0,0,.82,1.9,8.07,8.07,0,0,0,1,1,5.5,5.5,0,0,1,.24-3.1,6.54,6.54,0,0,1,2.78-3.37,8.36,8.36,0,0,1,2-.77,12.23,12.23,0,0,1,1.87-.39,13.57,13.57,0,0,1,3.88,0,13.47,13.47,0,0,1-3.14,2.29c-1.11.61-2.2,1.06-3,1.5a9.43,9.43,0,0,0-2.27,1.92,12.87,12.87,0,0,0-1.91,3l.46-.38a13.4,13.4,0,0,0,2.29,1.19,20.72,20.72,0,0,0,5.24,1.4c.78.1,1.56.16,2.35.21a2.79,2.79,0,0,1-.44-.92,3.51,3.51,0,0,1,.15-2.17,7.07,7.07,0,0,1,2.48-3,10,10,0,0,1,3.23-1.62,7.49,7.49,0,0,1,3.65-.16,28.26,28.26,0,0,1-2.6,2.28c-.84.66-1.66,1.29-2.49,1.9a23.66,23.66,0,0,0-2.22,1.75,3.44,3.44,0,0,0-.74,1,2.58,2.58,0,0,0-.2,1.56l.56-.58a48.94,48.94,0,0,0,7.56-.3,41.54,41.54,0,0,0,5.56-1,15.07,15.07,0,0,0,4.81-2.28,23.18,23.18,0,0,0,6.94-8.47c.21-.42.39-.85.59-1.27l.46-1.26c.26-.9.52-1.81.73-2.75.45-1.86.84-3.77,1.26-5.67.81-3.81,1.63-7.63,2.6-11.42a113.45,113.45,0,0,1,3.48-11.21,49,49,0,0,1,5.19-10.48c-3.75,6.85-5.69,14.44-7.24,22-.76,3.66-1.4,7.35-2,11.06a314,314,0,0,0,33.1,5.43c21.48,2.28,43.63,2.35,64.74-2.68a85.25,85.25,0,0,0,8.74-2.61c-.67-3.67-.88-7.34-1.29-10.93-.18-1.86-.49-3.71-.78-5.59s-.58-3.74-.95-5.57a29.16,29.16,0,0,0-1.73-5.34c-.67-1.77-1.29-3.56-1.9-5.35h0c.75,1.74,1.51,3.47,2.32,5.18a28.53,28.53,0,0,1,2.08,5.32c.5,1.85.89,3.7,1.29,5.55s.82,3.71,1.13,5.6c.6,3.76.95,7.53,1.82,11.12a28.69,28.69,0,0,0,1.71,5.19,27.72,27.72,0,0,0,2.71,4.7,18.59,18.59,0,0,0,8.14,6.58,29.09,29.09,0,0,0,5.24,1.25,45.57,45.57,0,0,0,5.48.52c1.28,0,2.56,0,3.84,0l.55.56a2.54,2.54,0,0,0-.2-1.55,3.44,3.44,0,0,0-.74-1,22.12,22.12,0,0,0-2.22-1.75c-.83-.61-1.65-1.24-2.49-1.9a29.86,29.86,0,0,1-2.6-2.28,7.37,7.37,0,0,1,3.65.16,10,10,0,0,1,3.23,1.62,7.1,7.1,0,0,1,2.48,3,3.62,3.62,0,0,1,.15,2.18,2.72,2.72,0,0,1-.45.94l.3,0a23.22,23.22,0,0,0,5.27-.88,16.74,16.74,0,0,0,4.32-1.93l.46.39a12.46,12.46,0,0,0-1.91-3,9.43,9.43,0,0,0-2.27-1.92c-.84-.44-1.93-.89-3.05-1.5a13.63,13.63,0,0,1-3.13-2.29,13.57,13.57,0,0,1,3.88.05,12.23,12.23,0,0,1,1.87.39,8.36,8.36,0,0,1,2,.77,6.56,6.56,0,0,1,2.78,3.36,5.46,5.46,0,0,1,.23,3.14,4.48,4.48,0,0,0,1.86-3.14,2.21,2.21,0,0,0-.46-1.63,5.32,5.32,0,0,0-1.75-1.3c-1.51-.77-3.32-1.32-5.16-2.14a12.14,12.14,0,0,1-2.77-1.64,6.27,6.27,0,0,1-1.24-1.32,4.21,4.21,0,0,1-.5-.89,5.48,5.48,0,0,1-.28-.91,14.89,14.89,0,0,1-.23-1.52l-.18-1.44c-.13-1-.19-1.92-.26-2.88a104.74,104.74,0,0,1,1.2-22.89c1.11-7.54,2.75-15,4.36-22.33a89.58,89.58,0,0,1,2.87-11,23.91,23.91,0,0,1,2.59-5.12,17.25,17.25,0,0,1,3.95-4.09,20,20,0,0,0-5.79,9.46,88.3,88.3,0,0,0-2.19,11.06c-1.26,7.46-2.59,14.9-3.47,22.36-.44,3.74-.76,7.47-.93,11.21a88.36,88.36,0,0,0,.24,11.16c.07.88.15,1.77.28,2.65,5.44.88,11.37.46,16.75.3a155.32,155.32,0,0,0,19.15-1.45c2.36-.37,3.95,0,2.58-2.3-1.61-2.7-4-4-6.93-5-2.41-.82-9.3-1-10.71-3.45-.77-1.34.08-2.05,1-2.94,1.35-1.35,4-2.21,5.6-3.24q3-1.89,5.8-4.05a69.75,69.75,0,0,0,18.8-22.19c8.95-16.71,10.93-36.3,9.16-54.94-2.24-23.72-9.25-47.32-17.25-69.67-8.65-24.15-19.37-47.5-30.8-70.44-9.42-18.92-19.18-36.8-34.41-51.76C389.07,108.75,373.57,98.42,356.34,93.11,8,6.24Z"
          />
          <path
            fill="none"
            d="M145,317.78h27.56l-71.92-39.63L129.33,312l-30.8,2.45,90.83,48.08a96.53,96.53,0,0,1-2.11-9.92Z"
          />
          <path
            fill="none"
            d="M267.39,117.6c1.46-1.56,3-3.07,4.5-4.56-8.5,2.38-22,7.21-31.5,15.67-6,5.32-12.3,12.9-18.44,20.23-9.54,11.4-19.41,23.19-28.86,27.91-6.61,3.31-16.2,5.12-26.35,7.05C153.57,186.38,140,189,134,194.9c-7.1,7.1-3.51,37.79,4.28,53.22,2.24,4.45,4.62,6.95,6.38,6.69,5.45-.82,9.67-8.05,14.14-15.71,3.63-6.21,7.38-12.63,12.3-16.56l2.2-1.76c12-9.52,40-31.82,42.9-43.07,1.67-6.38,9.55-20.13,19.87-32.1,9.45-11,17.5-16.77,24-19.66C262.44,123.09,264.87,120.29,267.39,117.6Z"
          />
          <path
            fill="none"
            d="M532.28,181.08c-10.22,4.15-22.94,9.31-32.5,5.77-6.34-2.35-8.9-9-12.14-17.48-4.9-12.81-11.63-30.37-35.73-44.7-26.93-16-51.52-19-64.41-19.27a130.53,130.53,0,0,1,16.75,14c6.92.86,16.19,3.16,23.95,9.12,15.12,11.61,26.85,33,37.2,51.85,5.79,10.54,10.78,19.64,15.42,25.25l2.36,2.86c11.84,14.38,23,27.95,33.76,24.21,3.76-1.3,9.55-8.48,15.49-19.2,5.4-9.73,10.22-21.07,12.28-28.89,1.53-5.79.93-7.29.8-7.53C543.2,176.65,537.9,178.81,532.28,181.08Z"
          />
          <path d="M546.25,174.21c-3.18-.73-8.44,1.39-15.09,4.09-9.75,3.95-21.88,8.87-30.34,5.74-5.06-1.88-7.29-7.69-10.37-15.74-5.07-13.23-12-31.35-37-46.21-31-18.41-59-20-70.37-19.67q-3.3-2.11-6.74-4a99.76,99.76,0,0,0-26.06-10q-10.33-7.94-20.83-15.65c-11.77-8.66-23.64-17.16-35.8-25.32-3.06-2-6.12-4-9.31-5.91-.8-.47-1.61-.93-2.47-1.37a13.21,13.21,0,0,0-1.4-.64c-.15-.05-.25-.1-.44-.15l-.31-.07a1.36,1.36,0,0,0-.46,0,1.72,1.72,0,0,0-.73.16,2,2,0,0,0-.66.53,2.53,2.53,0,0,0-.38.72,6.8,6.8,0,0,0-.28,1.74c0,.51,0,1,0,1.47,0,1,.06,1.89.13,2.82.29,3.7.75,7.33,1.24,11s1.06,7.25,1.66,10.85c1.78,11,3.84,21.84,6.11,32.69a105.63,105.63,0,0,0-9.75,7.54c-7,1.55-25.65,6.53-38.17,17.72-6.13,5.47-12.54,13.13-18.75,20.55-9.35,11.16-19,22.71-27.9,27.15-6.24,3.12-15.63,4.9-25.57,6.78-13.61,2.57-27.68,5.23-34.28,11.83-8.81,8.81-3.91,41.57,3.72,56.7,2.8,5.54,5.74,8.35,8.77,8.35a4.71,4.71,0,0,0,.74-.06c6.86-1,11.44-8.86,16.28-17.16,3.49-6,7.1-12.14,11.58-15.73l2.2-1.75c13.22-10.53,40.75-32.44,43.93-44.66,2.56-9.8,19-34.76,36-46.21-10.74,14.19-19.77,29.87-27.85,45.51a378.65,378.65,0,0,0-27.51,69.12q-5.15,17.82-8.5,36.06c-3.67,20.16-7.18,43.49-4.6,65.22l-33.26-27.39h30.85L87.8,267.65l35.45,41.77L88,312.22l102.56,54.29A73.58,73.58,0,0,0,198.19,383a54.05,54.05,0,0,0,16.37,16.68,55.94,55.94,0,0,0,5.28,3c.46.23,2,1.13,3.25,1.71-.13,0-.23.1-.31.12-1.79.63-3.6,1.17-5.38,1.82-3.43,1.25-9.09,3.21-6.82,8,1.88,3.92,8,4.8,11.71,5.38a117,117,0,0,0,20,1c1.43,0,3.41.1,5.39,0a3.67,3.67,0,0,1-.27.46c-.78,1.08-2.5,1.86-4.26,2.58-.89.36-1.82.74-2.78,1.21a8.75,8.75,0,0,0-2.81,2.1,5.2,5.2,0,0,0-.95,1.84,5.44,5.44,0,0,0-.14,2,7,7,0,0,0,1.42,3.42,13.23,13.23,0,0,0,5.37,3.72,23.2,23.2,0,0,0,6,1.57,48.66,48.66,0,0,0,12-.11,46.19,46.19,0,0,0,5.91-1.2,17.82,17.82,0,0,0,5.64-2.79,23.54,23.54,0,0,0,4.39-4.36,28.57,28.57,0,0,0,3.12-5.23c.22-.46.4-.93.6-1.4l.5-1.5c.25-1,.5-1.95.68-2.91s.43-2.15.63-3.23c22.29,4.83,45.24,7.68,68.06,6.77a160.1,160.1,0,0,0,32.55-4.43q3.63-.9,7.19-2a29,29,0,0,0,3.8,8.11,20.46,20.46,0,0,0,9.09,7.68,31,31,0,0,0,5.75,1.49,47.09,47.09,0,0,0,5.79.67,45.51,45.51,0,0,0,5.84,0c1-.07,1.92-.15,2.94-.3a24.39,24.39,0,0,0,3-.66,19,19,0,0,0,5.57-2.55,9.63,9.63,0,0,0,2.39-2.34,6.59,6.59,0,0,0,1.21-3.38,5.81,5.81,0,0,0-.19-1.92,5.38,5.38,0,0,0-.92-1.76,8.31,8.31,0,0,0-2.74-2.09c-1.87-.93-3.7-1.46-5.32-2.18s-2.8-1.53-3.1-2.52l.76.08a143.8,143.8,0,0,0,20.86,0c5.57-.29,11.91-.22,17.3-1.84,3.77-1.14,2.9-4.87.85-7.65-3.27-4.44-9.45-5.46-14.45-6.64l-.43-.13c.93-.57,1.95-1.32,2.33-1.55A76.48,76.48,0,0,0,462.69,389c14-12.67,21.83-30.36,24.28-48.89,2.85-21.53-1.29-43.22-6.67-64-6.48-25.07-15.82-49.32-26.42-72.92-5.39-12-11.13-23.86-17-35.62-5.06-10.06-10.07-20.08-16.63-29.27a147.15,147.15,0,0,0-12.42-15.14A44.36,44.36,0,0,1,426.37,131c14.63,11.22,26.2,32.31,36.4,50.91,5.86,10.67,10.92,19.89,15.74,25.72l2.36,2.86c10.95,13.3,21.36,25.95,32.32,25.95a14.49,14.49,0,0,0,4.74-.81c11.66-4.06,31.39-46.39,30.79-57.55C548.57,175.31,547.3,174.45,546.25,174.21,-310.16-28.6c-10.32,12-18.2,25.72-19.87,32.1-2.93,11.25-30.94,33.55-42.9,43.07l-2.2,1.76c-4.92,3.93-8.67,10.35-12.3,16.56-4.47,7.66-8.69,14.89-14.14,15.71-1.76.26-4.14-2.24-6.38-6.69C130.51,232.69,126.92,202,134,194.9c5.94-5.94,19.55-8.52,32.72-11,10.15-1.93,19.74-3.74,26.35-7.05,9.45-4.72,19.32-16.51,28.86-27.91,6.14-7.33,12.48-14.91,18.44-20.23,9.47-8.46,23-13.29,31.5-15.67-1.54,1.49-3,3-4.5,4.56-2.52,2.69-4.95,5.49-7.3,8.35C253.59,128.84,245.54,134.64,236.09,145.61,98.53,314.4l30.8-2.45-28.68-33.8,71.92,39.63H145l42.24,34.78a96.53,96.53,0,0,0,2.11,9.92,436.29,173.09c11.43,22.94,22.15,46.29,30.8,70.44,8,22.35,15,46,17.25,69.67,1.77,18.64-.21,38.23-9.16,54.94a69.75,69.75,0,0,1-18.8,22.19q-2.81,2.16-5.8,4.05c-1.64,1-4.25,1.89-5.6,3.24-.89.89-1.74,1.6-1,2.94,1.41,2.48,8.3,2.63,10.71,3.45,2.95,1,5.32,2.32,6.93,5,1.37,2.3-.22,1.93-2.58,2.3a155.32,155.32,0,0,1-19.15,1.45c-5.38.16-11.31.58-16.75-.3-.13-.88-.21-1.77-.28-2.65a88.36,88.36,0,0,1-.24-11.16c.17-3.74.49-7.47.93-11.21.88-7.46,2.21-14.9,3.47-22.36A88.3,88.3,0,0,1,429.24,354a20,20,0,0,1,5.79-9.46,17.25,17.25,0,0,0-3.95,4.09,23.91,23.91,0,0,0-2.59,5.12,89.58,89.58,0,0,0-2.87,11c-1.61,7.38-3.25,14.79-4.36,22.33a104.74,104.74,0,0,0-1.2,22.89c.07,1,.13,1.92.26,2.88l.18,1.44a14.89,14.89,0,0,0,.23,1.52,5.48,5.48,0,0,0,.28.91,4.21,4.21,0,0,0,.5.89,6.27,6.27,0,0,0,1.24,1.32,12.14,12.14,0,0,0,2.77,1.64c1.84.82,3.65,1.37,5.16,2.14a5.32,5.32,0,0,1,1.75,1.3,2.21,2.21,0,0,1,.46,1.63,4.48,4.48,0,0,1-1.86,3.14,5.46,5.46,0,0,0-.23-3.14,6.56,6.56,0,0,0-2.78-3.36,8.36,8.36,0,0,0-2-.77,12.23,12.23,0,0,0-1.87-.39,13.57,13.57,0,0,0-3.88-.05,13.63,13.63,0,0,0,3.13,2.29c1.12.61,2.21,1.06,3.05,1.5a9.43,9.43,0,0,1,2.27,1.92,12.46,12.46,0,0,1,1.91,3l-.46-.39a16.74,16.74,0,0,1-4.32,1.93,23.22,23.22,0,0,1-5.27.88l-.3,0a2.72,2.72,0,0,0,.45-.94,3.62,3.62,0,0,0-.15-2.18,7.1,7.1,0,0,0-2.48-3,10,10,0,0,0-3.23-1.62,7.37,7.37,0,0,0-3.65-.16,29.86,29.86,0,0,0,2.6,2.28c.84.66,1.66,1.29,2.49,1.9a22.12,22.12,0,0,1,2.22,1.75,3.44,3.44,0,0,1,.74,1,2.54,2.54,0,0,1,.2,1.55l-.55-.56c-1.28,0-2.56.06-3.84,0a45.57,45.57,0,0,1-5.48-.52,29.09,29.09,0,0,1-5.24-1.25,18.59,18.59,0,0,1-8.14-6.58,27.72,27.72,0,0,1-2.71-4.7,28.69,28.69,0,0,1-1.71-5.19c-.87-3.59-1.22-7.36-1.82-11.12-.31-1.89-.73-3.76-1.13-5.6s-.79-3.7-1.29-5.55a28.53,28.53,0,0,0-2.08-5.32c-.81-1.71-1.57-3.44-2.32-5.18h0c.61,1.79,1.23,3.58,1.9,5.35a29.16,29.16,0,0,1,1.73,5.34c.37,1.83.65,3.7.95,5.57s.6,3.73.78,5.59c.41,3.59.62,7.26,1.29,10.93a85.25,85.25,0,0,1-8.74,2.61c-21.11,5-43.26,5-64.74,2.68a314,314,0,0,1-33.1-5.43c.63-3.71,1.27-7.4,2-11.06,1.55-7.58,3.49-15.17,7.24-22a49,49,0,0,0-5.19,10.48,113.45,113.45,0,0,0-3.48,11.21c-1,3.79-1.79,7.61-2.6,11.42-.42,1.9-.81,3.81-1.26,5.67-.21.94-.47,1.85-.73,2.75l-.46,1.26c-.2.42-.38.85-.59,1.27a23.18,23.18,0,0,1-6.94,8.47,15.07,15.07,0,0,1-4.81,2.28,41.54,41.54,0,0,1-5.56,1,48.94,48.94,0,0,1-7.56.3l-.56.58a2.58,2.58,0,0,1,.2-1.56,3.44,3.44,0,0,1,.74-1,23.66,23.66,0,0,1,2.22-1.75c.83-.61,1.65-1.24,2.49-1.9a28.26,28.26,0,0,0,2.6-2.28,7.49,7.49,0,0,0-3.65.16,10,10,0,0,0-3.23,1.62,7.07,7.07,0,0,0-2.48,3,3.51,3.51,0,0,0-.15,2.17,2.79,2.79,0,0,0,.44.92c-.79,0-1.57-.11-2.35-.21a20.72,20.72,0,0,1-5.24-1.4,13.4,13.4,0,0,1-2.29-1.19l-.46.38a12.87,12.87,0,0,1,1.91-3,9.43,9.43,0,0,1,2.27-1.92c.84-.44,1.93-.89,3-1.5a13.47,13.47,0,0,0,3.14-2.29,13.57,13.57,0,0,0-3.88,0,12.23,12.23,0,0,0-1.87.39,8.36,8.36,0,0,0-2,.77,6.54,6.54,0,0,0-2.78,3.37,5.5,5.5,0,0,0-.24,3.1,8.07,8.07,0,0,1-1-1,4,4,0,0,1-.82-1.9,2.09,2.09,0,0,1,.43-1.64,5.63,5.63,0,0,1,1.85-1.34c.79-.4,1.66-.76,2.57-1.14a24.91,24.91,0,0,0,2.79-1.32,8,8,0,0,0,2.69-2.28,5.4,5.4,0,0,0,.83-1.73,10.25,10.25,0,0,0,.35-1.64,20.78,20.78,0,0,0,.16-3.11c0-2-.18-4-.12-5.78s.15-3.94.17-5.88c0-3.92-.07-7.83-.27-11.74a156.39,156.39,0,0,0-2.77-23.32,70.82,70.82,0,0,0-3.27-11.3,32.74,32.74,0,0,0-2.6-5.28,16.23,16.23,0,0,0-3.86-4.39h0a16.17,16.17,0,0,1,3.47,4.62,32,32,0,0,1,2.24,5.33A69.07,69.07,0,0,1,246.66,370c.61,3.82,1,7.68,1.31,11.54s.48,7.73.56,11.6.07,7.75,0,11.62c0,1.95-.13,3.82-.28,5.79s.05,4,0,5.9c0,.42,0,.82,0,1.23-.93,0-1.79,0-2.29,0a154.42,154.42,0,0,1-17.61-.25c-2.75-.21-14.44-.56-15.14-4.63-.62-3.64,11.46-4.83,13.86-6.68,4.66-3.6-6.25-6.18-8.38-7.39-30.12-17.08-31.38-57.25-28.43-87.67.88-9.14,2.27-18.22,3.91-27.25a377.39,377.39,0,0,1,52.43-133.52c10.93-17.17,23.64-34.12,40.42-45.94.19-.14.33-.22.5-.36l-5-35.75c-.9-7.22-1.93-14.47-2.38-21.66,0-.89-.08-1.78-.09-2.65,0-.44,0-.87,0-1.27a.13.13,0,0,0,0-.06l.44.22c.76.4,1.53.84,2.3,1.3,3.09,1.85,6.12,3.87,9.15,5.88,6.08,4,12.08,8.16,18.09,12.3l18,12.43,18.05,12.41c2.92,2,5.83,4,8.74,5.93a2.48,2.48,0,0,1,.27,0l1.19.07c17.23,5.31,32.73,15.64,45.54,28.22C417.11,136.29,426.87,154.17,436.29,173.09,108.42,11.56c-2.06,7.82-6.88,19.16-12.28,28.89-5.94,10.72-11.73,17.9-15.49,19.2-10.75,3.74-21.92-9.83-33.76-24.21l-2.36-2.86c-4.64-5.61-9.63-14.71-15.42-25.25-10.35-18.86-22.08-40.24-37.2-51.85-7.76-6-17-8.26-23.95-9.12a130.53,130.53,0,0,0-16.75-14c12.89.28,37.48,3.26,64.41,19.27,24.1,14.33,30.83,31.89,35.73,44.7,3.24,8.46,5.8,15.13,12.14,17.48,9.56,3.54,22.28-1.62,32.5-5.77,5.62-2.27,10.92-4.43,13.23-4C545.64,177.36,546.24,178.86,544.71,184.65Z" />
          <polygon
            fill="#b07f6e"
            points="364.29 99.35 364.29 99.35 364.29 99.35 364.29 99.35"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#outline)">
        <rect fill={props.bodyColor} width="640" height="480" />
      </g>
    </g>
    {props.pattern}
    <g id="mask">
      <path
        fill="#2d2926"
        d="M219.12,178.47c2.56-9.8,19-34.76,36-46.21a181.92,181.92,0,0,1,12.29-14.66,119.8,119.8,0,0,1,9.18-8.85c-7,1.55-25.65,6.53-38.18,17.72-6.12,5.46-12.53,13.13-18.74,20.54-9.35,11.17-19,22.72-27.9,27.16-6.24,3.12-15.63,4.9-25.57,6.78-13.61,2.57-27.68,5.23-34.28,11.83-8.81,8.81-3.91,41.56,3.72,56.69,2.8,5.55,5.74,8.36,8.77,8.36a4.71,4.71,0,0,0,.74-.06c6.86-1,11.44-8.86,16.28-17.16,3.49-6,7.1-12.14,11.58-15.73l2.2-1.75C188.41,212.6,215.94,190.68,219.12,178.47Z"
      />
      <path
        opacity="0.1"
        d="M288.85,110.38c-13.72,13.3-30.44,34.29-42.39,65-23.9,61.37-57.84,121.65-44.53,177.31s47.51,47.79,47.51,47.79l.26,18.7s-40.92,3.16-38.14-7.65c1-3.72,14.74-7.37,14.74-7.37s-26.55-11-32.52-32.47-10.59-46.15,4.07-110.78,43.72-108.6,56.48-124.35c8.74-10.79,17.74-23.88,33.11-33.84Z"
      />
      <path
        opacity="0.1"
        d="M284.88,396.05s14.86,8.76,54,9.37,48.87-8.55,48.87-8.55l2.86,18.73s-25.26,8.56-52.34,6.52-50.91-3.67-57.22-6.92Z"
      />
      <path
        opacity="0.1"
        d="M360.63,96.5s-78.25-57.37-81.48-55.77,37.09,54.14,44.42,59S363.07,109.12,360.63,96.5Z"
      />
      <path
        opacity="0.1"
        d="M267.77,119.31s-15.88,3.25-26.88,15.06-22.4,31.37-33.4,41.95-29.73,19.55-41.13,28.11-34.21,31.77-34.21,31.77,5.15,21,12.75,20.09,16.57-23.35,23.09-29.87,42.76-33,48.46-44.8,15.89-42,44.4-53.35Z"
      />
      <path
        opacity="0.1"
        d="M396.06,113.2s30.55-2,47.25,18.73,36.25,88.38,93.27,74.94c0,0-9.78,27.7-22,27.7s-35.41-24.26-61.9-74.13c-20.78-39.1-48.88-39.91-48.88-39.91Z"
      />
      <polygon
        opacity="0.1"
        points="96.85 275.84 142.19 312.22 119.66 319.01 189.71 357.84 192.15 365.71 93.27 313.31 126.29 310.69 96.85 275.84"
      />
      <g opacity="0.1">
        <path d="M484.37,336.38c.23,1.7-3.51,6.77-4.43,8.49-1.82,3.4-3.69,6.78-5.68,10.08A107.44,107.44,0,0,1,461,373.07a63.22,63.22,0,0,1-11,9.47,60.18,60.18,0,0,1-6.26,3.66,33.15,33.15,0,0,1-5.53,2.51c-4,1.16-6.15-2.21-7.32-5.52a39.63,39.63,0,0,1-2.34-17.54,118,118,0,0,1,2.55-14.42l-1.95,4.49c-3.06,11.13-4.58,22.56-6,34a4.63,4.63,0,0,0,.26,2.2,3.3,3.3,0,0,0-.88.72c-2.05,2.52-.69,11.11-.81,14.31a.64.64,0,0,0,.09.45c.16.19.46.14.69.08a108.08,108.08,0,0,0,24.47-9.44c9.47-5.29,16.41-12.76,22.79-21.4,3.19-4.31,7.4-8.22,9.2-13.28C482,354.67,485.64,345.54,484.37,336.38Z" />
      </g>
      <path
        fill="#2d2926"
        d="M546.25,174.21c-3.18-.74-8.44,1.39-15.09,4.09-9.75,3.95-21.88,8.87-30.34,5.74-5.07-1.88-7.29-7.69-10.37-15.74-5.07-13.23-12-31.35-37-46.21-31-18.41-59-20-70.37-19.68a131.09,131.09,0,0,1,24.72,20.67A44.23,44.23,0,0,1,426.37,131c14.63,11.22,26.2,32.31,36.4,50.91,5.86,10.67,10.92,19.89,15.74,25.72l2.36,2.86c10.95,13.3,21.36,25.95,32.32,25.95a14.49,14.49,0,0,0,4.74-.81c11.66-4.06,31.39-46.39,30.79-57.55C548.57,175.31,547.3,174.45,546.25,174.21Z"
      />
      <path
        fill="#fff"
        opacity="0.1"
        d="M476.21,346l1.08-1.26a92.83,92.83,0,0,0,7.42-10.56,145.3,145.3,0,0,0-.81-27.45c-5.29-45.37-31.36-100.15-52-142.51s-47.25-57-47.25-57c6,6.79,32.31,49.69,42.63,70.05S469.92,273.93,477,318.19A76.17,76.17,0,0,1,476.21,346Z"
      />
    </g>
    <g id="outline">
      <path
        fill="none"
        d="M356.34,93.11,355.15,93a2.48,2.48,0,0,0-.27,0c-2.91-2-5.82-4-8.74-5.93L328.09,74.67l-18-12.43c-6-4.14-12-8.28-18.09-12.3-3-2-6.06-4-9.15-5.88-.77-.46-1.54-.9-2.3-1.3l-.44-.22a.13.13,0,0,1,0,.06c0,.4,0,.83,0,1.27,0,.87.05,1.76.09,2.65.45,7.19,1.48,14.44,2.38,21.66l5,35.75c-.17.14-.31.22-.5.36-16.78,11.82-29.49,28.77-40.42,45.94a377.39,377.39,0,0,0-52.43,133.52c-1.64,9-3,18.11-3.91,27.25-2.95,30.42-1.69,70.59,28.43,87.67,2.13,1.21,13,3.79,8.38,7.39-2.4,1.85-14.48,3-13.86,6.68.7,4.07,12.39,4.42,15.14,4.63a154.42,154.42,0,0,0,17.61.25c.5,0,1.36,0,2.29,0,0-.41,0-.81,0-1.23,0-1.89-.11-3.82,0-5.9s.23-3.84.28-5.79q.13-5.81,0-11.62c-.08-3.87-.29-7.74-.56-11.6s-.7-7.72-1.31-11.54a69.07,69.07,0,0,0-2.59-11.28,32,32,0,0,0-2.24-5.33,16.17,16.17,0,0,0-3.47-4.62h0a16.23,16.23,0,0,1,3.86,4.39,32.74,32.74,0,0,1,2.6,5.28,70.82,70.82,0,0,1,3.27,11.3A156.39,156.39,0,0,1,250.86,393c.2,3.91.31,7.82.27,11.74,0,1.94-.06,4-.17,5.88s.11,3.77.12,5.78a20.78,20.78,0,0,1-.16,3.11,10.25,10.25,0,0,1-.35,1.64,5.4,5.4,0,0,1-.83,1.73,8,8,0,0,1-2.69,2.28,24.91,24.91,0,0,1-2.79,1.32c-.91.38-1.78.74-2.57,1.14a5.63,5.63,0,0,0-1.85,1.34,2.09,2.09,0,0,0-.43,1.64,4,4,0,0,0,.82,1.9,8.07,8.07,0,0,0,1,1,5.5,5.5,0,0,1,.24-3.1,6.54,6.54,0,0,1,2.78-3.37,8.36,8.36,0,0,1,2-.77,12.23,12.23,0,0,1,1.87-.39,13.57,13.57,0,0,1,3.88,0,13.47,13.47,0,0,1-3.14,2.29c-1.11.61-2.2,1.06-3,1.5a9.43,9.43,0,0,0-2.27,1.92,12.87,12.87,0,0,0-1.91,3l.46-.38a13.4,13.4,0,0,0,2.29,1.19,20.72,20.72,0,0,0,5.24,1.4c.78.1,1.56.16,2.35.21a2.79,2.79,0,0,1-.44-.92,3.51,3.51,0,0,1,.15-2.17,7.07,7.07,0,0,1,2.48-3,10,10,0,0,1,3.23-1.62,7.49,7.49,0,0,1,3.65-.16,28.26,28.26,0,0,1-2.6,2.28c-.84.66-1.66,1.29-2.49,1.9a23.66,23.66,0,0,0-2.22,1.75,3.44,3.44,0,0,0-.74,1,2.58,2.58,0,0,0-.2,1.56l.56-.58a48.94,48.94,0,0,0,7.56-.3,41.54,41.54,0,0,0,5.56-1,15.07,15.07,0,0,0,4.81-2.28,23.18,23.18,0,0,0,6.94-8.47c.21-.42.39-.85.59-1.27l.46-1.26c.26-.9.52-1.81.73-2.75.45-1.86.84-3.77,1.26-5.67.81-3.81,1.63-7.63,2.6-11.42a113.45,113.45,0,0,1,3.48-11.21,49,49,0,0,1,5.19-10.48c-3.75,6.85-5.69,14.44-7.24,22-.76,3.66-1.4,7.35-2,11.06a314,314,0,0,0,33.1,5.43c21.48,2.28,43.63,2.35,64.74-2.68a85.25,85.25,0,0,0,8.74-2.61c-.67-3.67-.88-7.34-1.29-10.93-.18-1.86-.49-3.71-.78-5.59s-.58-3.74-.95-5.57a29.16,29.16,0,0,0-1.73-5.34c-.67-1.77-1.29-3.56-1.9-5.35h0c.75,1.74,1.51,3.47,2.32,5.18a28.53,28.53,0,0,1,2.08,5.32c.5,1.85.89,3.7,1.29,5.55s.82,3.71,1.13,5.6c.6,3.76.95,7.53,1.82,11.12a28.69,28.69,0,0,0,1.71,5.19,27.72,27.72,0,0,0,2.71,4.7,18.59,18.59,0,0,0,8.14,6.58,29.09,29.09,0,0,0,5.24,1.25,45.57,45.57,0,0,0,5.48.52c1.28,0,2.56,0,3.84,0l.55.56a2.54,2.54,0,0,0-.2-1.55,3.44,3.44,0,0,0-.74-1,22.12,22.12,0,0,0-2.22-1.75c-.83-.61-1.65-1.24-2.49-1.9a29.86,29.86,0,0,1-2.6-2.28,7.37,7.37,0,0,1,3.65.16,10,10,0,0,1,3.23,1.62,7.1,7.1,0,0,1,2.48,3,3.62,3.62,0,0,1,.15,2.18,2.72,2.72,0,0,1-.45.94l.3,0a23.22,23.22,0,0,0,5.27-.88,16.74,16.74,0,0,0,4.32-1.93l.46.39a12.46,12.46,0,0,0-1.91-3,9.43,9.43,0,0,0-2.27-1.92c-.84-.44-1.93-.89-3.05-1.5a13.63,13.63,0,0,1-3.13-2.29,13.57,13.57,0,0,1,3.88.05,12.23,12.23,0,0,1,1.87.39,8.36,8.36,0,0,1,2,.77,6.56,6.56,0,0,1,2.78,3.36,5.46,5.46,0,0,1,.23,3.14,4.48,4.48,0,0,0,1.86-3.14,2.21,2.21,0,0,0-.46-1.63,5.32,5.32,0,0,0-1.75-1.3c-1.51-.77-3.32-1.32-5.16-2.14a12.14,12.14,0,0,1-2.77-1.64,6.27,6.27,0,0,1-1.24-1.32,4.21,4.21,0,0,1-.5-.89,5.48,5.48,0,0,1-.28-.91,14.89,14.89,0,0,1-.23-1.52l-.18-1.44c-.13-1-.19-1.92-.26-2.88a104.74,104.74,0,0,1,1.2-22.89c1.11-7.54,2.75-15,4.36-22.33a89.58,89.58,0,0,1,2.87-11,23.91,23.91,0,0,1,2.59-5.12,17.25,17.25,0,0,1,3.95-4.09,20,20,0,0,0-5.79,9.46,88.3,88.3,0,0,0-2.19,11.06c-1.26,7.46-2.59,14.9-3.47,22.36-.44,3.74-.76,7.47-.93,11.21a88.36,88.36,0,0,0,.24,11.16c.07.88.15,1.77.28,2.65,5.44.88,11.37.46,16.75.3a155.32,155.32,0,0,0,19.15-1.45c2.36-.37,3.95,0,2.58-2.3-1.61-2.7-4-4-6.93-5-2.41-.82-9.3-1-10.71-3.45-.77-1.34.08-2.05,1-2.94,1.35-1.35,4-2.21,5.6-3.24q3-1.89,5.8-4.05a69.75,69.75,0,0,0,18.8-22.19c8.95-16.71,10.93-36.3,9.16-54.94-2.24-23.72-9.25-47.32-17.25-69.67-8.65-24.15-19.37-47.5-30.8-70.44-9.42-18.92-19.18-36.8-34.41-51.76C389.07,108.75,373.57,98.42,356.34,93.11Zm8,6.24Z"
      />
      <path
        fill="none"
        d="M145,317.78h27.56l-71.92-39.63L129.33,312l-30.8,2.45,90.83,48.08a96.53,96.53,0,0,1-2.11-9.92Z"
      />
      <path
        fill="none"
        d="M267.39,117.6c1.46-1.56,3-3.07,4.5-4.56-8.5,2.38-22,7.21-31.5,15.67-6,5.32-12.3,12.9-18.44,20.23-9.54,11.4-19.41,23.19-28.86,27.91-6.61,3.31-16.2,5.12-26.35,7.05C153.57,186.38,140,189,134,194.9c-7.1,7.1-3.51,37.79,4.28,53.22,2.24,4.45,4.62,6.95,6.38,6.69,5.45-.82,9.67-8.05,14.14-15.71,3.63-6.21,7.38-12.63,12.3-16.56l2.2-1.76c12-9.52,40-31.82,42.9-43.07,1.67-6.38,9.55-20.13,19.87-32.1,9.45-11,17.5-16.77,24-19.66C262.44,123.09,264.87,120.29,267.39,117.6Z"
      />
      <path
        fill="none"
        d="M532.28,181.08c-10.22,4.15-22.94,9.31-32.5,5.77-6.34-2.35-8.9-9-12.14-17.48-4.9-12.81-11.63-30.37-35.73-44.7-26.93-16-51.52-19-64.41-19.27a130.53,130.53,0,0,1,16.75,14c6.92.86,16.19,3.16,23.95,9.12,15.12,11.61,26.85,33,37.2,51.85,5.79,10.54,10.78,19.64,15.42,25.25l2.36,2.86c11.84,14.38,23,27.95,33.76,24.21,3.76-1.3,9.55-8.48,15.49-19.2,5.4-9.73,10.22-21.07,12.28-28.89,1.53-5.79.93-7.29.8-7.53C543.2,176.65,537.9,178.81,532.28,181.08Z"
      />
      <path d="M546.25,174.21c-3.18-.73-8.44,1.39-15.09,4.09-9.75,3.95-21.88,8.87-30.34,5.74-5.06-1.88-7.29-7.69-10.37-15.74-5.07-13.23-12-31.35-37-46.21-31-18.41-59-20-70.37-19.67q-3.3-2.11-6.74-4a99.76,99.76,0,0,0-26.06-10q-10.33-7.94-20.83-15.65c-11.77-8.66-23.64-17.16-35.8-25.32-3.06-2-6.12-4-9.31-5.91-.8-.47-1.61-.93-2.47-1.37a13.21,13.21,0,0,0-1.4-.64c-.15-.05-.25-.1-.44-.15l-.31-.07a1.36,1.36,0,0,0-.46,0,1.72,1.72,0,0,0-.73.16,2,2,0,0,0-.66.53,2.53,2.53,0,0,0-.38.72,6.8,6.8,0,0,0-.28,1.74c0,.51,0,1,0,1.47,0,1,.06,1.89.13,2.82.29,3.7.75,7.33,1.24,11s1.06,7.25,1.66,10.85c1.78,11,3.84,21.84,6.11,32.69a105.63,105.63,0,0,0-9.75,7.54c-7,1.55-25.65,6.53-38.17,17.72-6.13,5.47-12.54,13.13-18.75,20.55-9.35,11.16-19,22.71-27.9,27.15-6.24,3.12-15.63,4.9-25.57,6.78-13.61,2.57-27.68,5.23-34.28,11.83-8.81,8.81-3.91,41.57,3.72,56.7,2.8,5.54,5.74,8.35,8.77,8.35a4.71,4.71,0,0,0,.74-.06c6.86-1,11.44-8.86,16.28-17.16,3.49-6,7.1-12.14,11.58-15.73l2.2-1.75c13.22-10.53,40.75-32.44,43.93-44.66,2.56-9.8,19-34.76,36-46.21-10.74,14.19-19.77,29.87-27.85,45.51a378.65,378.65,0,0,0-27.51,69.12q-5.15,17.82-8.5,36.06c-3.67,20.16-7.18,43.49-4.6,65.22l-33.26-27.39h30.85L87.8,267.65l35.45,41.77L88,312.22l102.56,54.29A73.58,73.58,0,0,0,198.19,383a54.05,54.05,0,0,0,16.37,16.68,55.94,55.94,0,0,0,5.28,3c.46.23,2,1.13,3.25,1.71-.13,0-.23.1-.31.12-1.79.63-3.6,1.17-5.38,1.82-3.43,1.25-9.09,3.21-6.82,8,1.88,3.92,8,4.8,11.71,5.38a117,117,0,0,0,20,1c1.43,0,3.41.1,5.39,0a3.67,3.67,0,0,1-.27.46c-.78,1.08-2.5,1.86-4.26,2.58-.89.36-1.82.74-2.78,1.21a8.75,8.75,0,0,0-2.81,2.1,5.2,5.2,0,0,0-.95,1.84,5.44,5.44,0,0,0-.14,2,7,7,0,0,0,1.42,3.42,13.23,13.23,0,0,0,5.37,3.72,23.2,23.2,0,0,0,6,1.57,48.66,48.66,0,0,0,12-.11,46.19,46.19,0,0,0,5.91-1.2,17.82,17.82,0,0,0,5.64-2.79,23.54,23.54,0,0,0,4.39-4.36,28.57,28.57,0,0,0,3.12-5.23c.22-.46.4-.93.6-1.4l.5-1.5c.25-1,.5-1.95.68-2.91s.43-2.15.63-3.23c22.29,4.83,45.24,7.68,68.06,6.77a160.1,160.1,0,0,0,32.55-4.43q3.63-.9,7.19-2a29,29,0,0,0,3.8,8.11,20.46,20.46,0,0,0,9.09,7.68,31,31,0,0,0,5.75,1.49,47.09,47.09,0,0,0,5.79.67,45.51,45.51,0,0,0,5.84,0c1-.07,1.92-.15,2.94-.3a24.39,24.39,0,0,0,3-.66,19,19,0,0,0,5.57-2.55,9.63,9.63,0,0,0,2.39-2.34,6.59,6.59,0,0,0,1.21-3.38,5.81,5.81,0,0,0-.19-1.92,5.38,5.38,0,0,0-.92-1.76,8.31,8.31,0,0,0-2.74-2.09c-1.87-.93-3.7-1.46-5.32-2.18s-2.8-1.53-3.1-2.52l.76.08a143.8,143.8,0,0,0,20.86,0c5.57-.29,11.91-.22,17.3-1.84,3.77-1.14,2.9-4.87.85-7.65-3.27-4.44-9.45-5.46-14.45-6.64l-.43-.13c.93-.57,1.95-1.32,2.33-1.55A76.48,76.48,0,0,0,462.69,389c14-12.67,21.83-30.36,24.28-48.89,2.85-21.53-1.29-43.22-6.67-64-6.48-25.07-15.82-49.32-26.42-72.92-5.39-12-11.13-23.86-17-35.62-5.06-10.06-10.07-20.08-16.63-29.27a147.15,147.15,0,0,0-12.42-15.14A44.36,44.36,0,0,1,426.37,131c14.63,11.22,26.2,32.31,36.4,50.91,5.86,10.67,10.92,19.89,15.74,25.72l2.36,2.86c10.95,13.3,21.36,25.95,32.32,25.95a14.49,14.49,0,0,0,4.74-.81c11.66-4.06,31.39-46.39,30.79-57.55C548.57,175.31,547.3,174.45,546.25,174.21Zm-310.16-28.6c-10.32,12-18.2,25.72-19.87,32.1-2.93,11.25-30.94,33.55-42.9,43.07l-2.2,1.76c-4.92,3.93-8.67,10.35-12.3,16.56-4.47,7.66-8.69,14.89-14.14,15.71-1.76.26-4.14-2.24-6.38-6.69C130.51,232.69,126.92,202,134,194.9c5.94-5.94,19.55-8.52,32.72-11,10.15-1.93,19.74-3.74,26.35-7.05,9.45-4.72,19.32-16.51,28.86-27.91,6.14-7.33,12.48-14.91,18.44-20.23,9.47-8.46,23-13.29,31.5-15.67-1.54,1.49-3,3-4.5,4.56-2.52,2.69-4.95,5.49-7.3,8.35C253.59,128.84,245.54,134.64,236.09,145.61ZM98.53,314.4l30.8-2.45-28.68-33.8,71.92,39.63H145l42.24,34.78a96.53,96.53,0,0,0,2.11,9.92ZM436.29,173.09c11.43,22.94,22.15,46.29,30.8,70.44,8,22.35,15,46,17.25,69.67,1.77,18.64-.21,38.23-9.16,54.94a69.75,69.75,0,0,1-18.8,22.19q-2.81,2.16-5.8,4.05c-1.64,1-4.25,1.89-5.6,3.24-.89.89-1.74,1.6-1,2.94,1.41,2.48,8.3,2.63,10.71,3.45,2.95,1,5.32,2.32,6.93,5,1.37,2.3-.22,1.93-2.58,2.3a155.32,155.32,0,0,1-19.15,1.45c-5.38.16-11.31.58-16.75-.3-.13-.88-.21-1.77-.28-2.65a88.36,88.36,0,0,1-.24-11.16c.17-3.74.49-7.47.93-11.21.88-7.46,2.21-14.9,3.47-22.36A88.3,88.3,0,0,1,429.24,354a20,20,0,0,1,5.79-9.46,17.25,17.25,0,0,0-3.95,4.09,23.91,23.91,0,0,0-2.59,5.12,89.58,89.58,0,0,0-2.87,11c-1.61,7.38-3.25,14.79-4.36,22.33a104.74,104.74,0,0,0-1.2,22.89c.07,1,.13,1.92.26,2.88l.18,1.44a14.89,14.89,0,0,0,.23,1.52,5.48,5.48,0,0,0,.28.91,4.21,4.21,0,0,0,.5.89,6.27,6.27,0,0,0,1.24,1.32,12.14,12.14,0,0,0,2.77,1.64c1.84.82,3.65,1.37,5.16,2.14a5.32,5.32,0,0,1,1.75,1.3,2.21,2.21,0,0,1,.46,1.63,4.48,4.48,0,0,1-1.86,3.14,5.46,5.46,0,0,0-.23-3.14,6.56,6.56,0,0,0-2.78-3.36,8.36,8.36,0,0,0-2-.77,12.23,12.23,0,0,0-1.87-.39,13.57,13.57,0,0,0-3.88-.05,13.63,13.63,0,0,0,3.13,2.29c1.12.61,2.21,1.06,3.05,1.5a9.43,9.43,0,0,1,2.27,1.92,12.46,12.46,0,0,1,1.91,3l-.46-.39a16.74,16.74,0,0,1-4.32,1.93,23.22,23.22,0,0,1-5.27.88l-.3,0a2.72,2.72,0,0,0,.45-.94,3.62,3.62,0,0,0-.15-2.18,7.1,7.1,0,0,0-2.48-3,10,10,0,0,0-3.23-1.62,7.37,7.37,0,0,0-3.65-.16,29.86,29.86,0,0,0,2.6,2.28c.84.66,1.66,1.29,2.49,1.9a22.12,22.12,0,0,1,2.22,1.75,3.44,3.44,0,0,1,.74,1,2.54,2.54,0,0,1,.2,1.55l-.55-.56c-1.28,0-2.56.06-3.84,0a45.57,45.57,0,0,1-5.48-.52,29.09,29.09,0,0,1-5.24-1.25,18.59,18.59,0,0,1-8.14-6.58,27.72,27.72,0,0,1-2.71-4.7,28.69,28.69,0,0,1-1.71-5.19c-.87-3.59-1.22-7.36-1.82-11.12-.31-1.89-.73-3.76-1.13-5.6s-.79-3.7-1.29-5.55a28.53,28.53,0,0,0-2.08-5.32c-.81-1.71-1.57-3.44-2.32-5.18h0c.61,1.79,1.23,3.58,1.9,5.35a29.16,29.16,0,0,1,1.73,5.34c.37,1.83.65,3.7.95,5.57s.6,3.73.78,5.59c.41,3.59.62,7.26,1.29,10.93a85.25,85.25,0,0,1-8.74,2.61c-21.11,5-43.26,5-64.74,2.68a314,314,0,0,1-33.1-5.43c.63-3.71,1.27-7.4,2-11.06,1.55-7.58,3.49-15.17,7.24-22a49,49,0,0,0-5.19,10.48,113.45,113.45,0,0,0-3.48,11.21c-1,3.79-1.79,7.61-2.6,11.42-.42,1.9-.81,3.81-1.26,5.67-.21.94-.47,1.85-.73,2.75l-.46,1.26c-.2.42-.38.85-.59,1.27a23.18,23.18,0,0,1-6.94,8.47,15.07,15.07,0,0,1-4.81,2.28,41.54,41.54,0,0,1-5.56,1,48.94,48.94,0,0,1-7.56.3l-.56.58a2.58,2.58,0,0,1,.2-1.56,3.44,3.44,0,0,1,.74-1,23.66,23.66,0,0,1,2.22-1.75c.83-.61,1.65-1.24,2.49-1.9a28.26,28.26,0,0,0,2.6-2.28,7.49,7.49,0,0,0-3.65.16,10,10,0,0,0-3.23,1.62,7.07,7.07,0,0,0-2.48,3,3.51,3.51,0,0,0-.15,2.17,2.79,2.79,0,0,0,.44.92c-.79,0-1.57-.11-2.35-.21a20.72,20.72,0,0,1-5.24-1.4,13.4,13.4,0,0,1-2.29-1.19l-.46.38a12.87,12.87,0,0,1,1.91-3,9.43,9.43,0,0,1,2.27-1.92c.84-.44,1.93-.89,3-1.5a13.47,13.47,0,0,0,3.14-2.29,13.57,13.57,0,0,0-3.88,0,12.23,12.23,0,0,0-1.87.39,8.36,8.36,0,0,0-2,.77,6.54,6.54,0,0,0-2.78,3.37,5.5,5.5,0,0,0-.24,3.1,8.07,8.07,0,0,1-1-1,4,4,0,0,1-.82-1.9,2.09,2.09,0,0,1,.43-1.64,5.63,5.63,0,0,1,1.85-1.34c.79-.4,1.66-.76,2.57-1.14a24.91,24.91,0,0,0,2.79-1.32,8,8,0,0,0,2.69-2.28,5.4,5.4,0,0,0,.83-1.73,10.25,10.25,0,0,0,.35-1.64,20.78,20.78,0,0,0,.16-3.11c0-2-.18-4-.12-5.78s.15-3.94.17-5.88c0-3.92-.07-7.83-.27-11.74a156.39,156.39,0,0,0-2.77-23.32,70.82,70.82,0,0,0-3.27-11.3,32.74,32.74,0,0,0-2.6-5.28,16.23,16.23,0,0,0-3.86-4.39h0a16.17,16.17,0,0,1,3.47,4.62,32,32,0,0,1,2.24,5.33A69.07,69.07,0,0,1,246.66,370c.61,3.82,1,7.68,1.31,11.54s.48,7.73.56,11.6.07,7.75,0,11.62c0,1.95-.13,3.82-.28,5.79s.05,4,0,5.9c0,.42,0,.82,0,1.23-.93,0-1.79,0-2.29,0a154.42,154.42,0,0,1-17.61-.25c-2.75-.21-14.44-.56-15.14-4.63-.62-3.64,11.46-4.83,13.86-6.68,4.66-3.6-6.25-6.18-8.38-7.39-30.12-17.08-31.38-57.25-28.43-87.67.88-9.14,2.27-18.22,3.91-27.25a377.39,377.39,0,0,1,52.43-133.52c10.93-17.17,23.64-34.12,40.42-45.94.19-.14.33-.22.5-.36l-5-35.75c-.9-7.22-1.93-14.47-2.38-21.66,0-.89-.08-1.78-.09-2.65,0-.44,0-.87,0-1.27a.13.13,0,0,0,0-.06l.44.22c.76.4,1.53.84,2.3,1.3,3.09,1.85,6.12,3.87,9.15,5.88,6.08,4,12.08,8.16,18.09,12.3l18,12.43,18.05,12.41c2.92,2,5.83,4,8.74,5.93a2.48,2.48,0,0,1,.27,0l1.19.07c17.23,5.31,32.73,15.64,45.54,28.22C417.11,136.29,426.87,154.17,436.29,173.09Zm108.42,11.56c-2.06,7.82-6.88,19.16-12.28,28.89-5.94,10.72-11.73,17.9-15.49,19.2-10.75,3.74-21.92-9.83-33.76-24.21l-2.36-2.86c-4.64-5.61-9.63-14.71-15.42-25.25-10.35-18.86-22.08-40.24-37.2-51.85-7.76-6-17-8.26-23.95-9.12a130.53,130.53,0,0,0-16.75-14c12.89.28,37.48,3.26,64.41,19.27,24.1,14.33,30.83,31.89,35.73,44.7,3.24,8.46,5.8,15.13,12.14,17.48,9.56,3.54,22.28-1.62,32.5-5.77,5.62-2.27,10.92-4.43,13.23-4C545.64,177.36,546.24,178.86,544.71,184.65Z" />
      <polygon
        fill="#b07f6e"
        points="364.29 99.35 364.29 99.35 364.29 99.35 364.29 99.35"
      />
    </g>
  </>
);
