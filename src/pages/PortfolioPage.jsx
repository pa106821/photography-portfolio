import React from 'react';
import Portfolio from '../components/Portfolio';
import gallery from '../data/gallery';
export default function PortfolioPage(){
return <main className="pt-28"><Portfolio gallery={gallery} categories={[ 'All','Portraits','Travel','Events','Editorial' ]} /></main>
}