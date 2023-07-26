import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MULTI STEP FORM</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="" type="text/css"></link>
      </Head>
      <main>
    <form class="msf">
    <div class="msf-header">
        <div class="row text-center">
            <div class="msf-step col-md-4"><span>Step 1</span></div>
            <div class="msf-step col-md-4"><span>Step 2</span></div>
            <div class="msf-step col-md-4"><span>Step 3</span></div>
            <div class="msf-step col-md-4"><span>Step 4</span></div>
        </div>
    </div>
 
    <div class="msf-content">
        <div class="msf-view">
            <h1>Personal info</h1>
            <h4>Please provide your name, email address, and phone number.</h4>
            <div class="personal-info">
              <input>Name</input>
              <input type="email">Email address</input>
              <input type="number">Phone Number</input>
            </div>
        </div>
        <div class="msf-view">
            ...
        </div>
        <div class="msf-view">
            ...
        </div>
    </div>
 
    <div class="msf-navigation">
        <div class="row">
            <div class="col-md-3">
                <button type="button" data-type="back" class="btn btn-outline-dark msf-nav-button"><i class="fa fa-chevron-left"></i> Go back </button>
            </div>
            <div class="col-md-3 col-md-offset-6">
                <button type="button" data-type="next" class="btn  btn-outline-dark msf-nav-button">Next Step<i class="fa fa-chevron-right"></i></button>
                <button type="submit" data-type="submit" class="btn btn-outline-dark msf-nav-button">Confirm</button>
            </div>
        </div>
    </div>
</form>
      </main>

      <footer>
       
      </footer>
    </div>
  )
}