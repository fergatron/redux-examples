import React from 'react';

const Home = (props) => {
  console.info('inside Home', this, props)
  return (
    <div>
      <p>What is Redux and why is this &quot;simple&quot; state management pattern so difficult for us noobs. The goal of this app is to break down certain scenarios that trip up React developers new to the redux tool.</p>
      <p>Just a note I&apos;m writing this app as I&apos;m learning Redux. My hope is that I&apos;ve done a good enough job to where it helps others.</p>
      <p>This page is a functional React component. It has the initial data from the store, but it hasn&apos;t added anything.</p>
    </div>
  );
}

export default Home;
