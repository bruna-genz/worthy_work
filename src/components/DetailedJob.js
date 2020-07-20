import React from 'react';

function extractContent(s, space) {
  const span = document.createElement('span');
  span.innerHTML = s;
  if (space) {
    const children = span.querySelectorAll('*');
    for (let i = 0; i < children.length; i += 1) {
      if (children[i].textContent) {
        children[i].textContent += ' ';
      } else {
        children[i].innerText += ' ';
      }
    }
  }
  return [span.textContent || span.innerText].toString().replace(/ +/g, ' ');
}

const DetailedJob = ({ job }) => {
  return (
    <div className="DetailedJob">
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.city}</p>
      {extractContent(job.description)}
      {extractContent(job.apply)}
    </div>
  );
};

/*
  company: job.fields.source[0].name,
  country: job.fields.country ? job.fields.country[0].name : 'remote',
  city: job.fields.city ? job.fields.city[0].name : 'remote',
  type: job.fields.type[0].name,
  careerCategory: job.fields.career_categories[0].name,
  experience: job.fields.experience[0].name,
  date: {
    created: job.fields.date.created,
    closing: job.fields.date.closing,
  },
  description: job.fields.body,
  apply: job.fields.how_to_apply,
url: job.fields.url */

export default DetailedJob;
