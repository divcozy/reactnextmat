import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import Alert from '../components/Alert'


const Clock = (props) => {
    return (
      <div>
        <h2>Started: {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

const tick = () => {
    const element = (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    if (process.browser) {
        ReactDOM.render(element, document.getElementById('root'))
    }
}

const Home = props => {
    useEffect(() => {
        setInterval(tick, 1000)
    }, [])



    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="root"></div>

            <h1>Hello Next.js</h1>

            <Clock date={new Date()} />
            <p>Let's explore different ways to style Next.js apps</p>
            <Alert type="warning">This is an important message</Alert>

            <style jsx>{`
                .container {
                    margin: 50px;
                }
                p {
                    color: blue;
                }
            `}</style>
        </div>
    )
}

export default Home