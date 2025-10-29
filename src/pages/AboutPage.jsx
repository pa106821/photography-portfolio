import React from 'react';
import About from '../components/About';
const profile={photo:'https://source.unsplash.com/600x600?portrait',bio:"Hi — I'm Rosette, a freelance photographer focused on bright, human stories. I shoot portraits, events and travel projects across East Africa and beyond.",gear:['Canon EOS R6','50mm f/1.2','Lighting Kit','Travel Ready']};
export default function AboutPage(){
return <main className="pt-28"><About profile={profile} /></main>
}