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
              <label>Name</label>
              <input placeholder="e.g. Alex Smith"/>
              <label>Email Address</label>
              <input type="email" placeholder="e.g. alex_smith@world.com"/>
              <label>Phone Number</label>
              <input type="number" placeholder="e.g. + 1 234 567 890"/>
            </div>
        </div>
        <div class="msf-view">
        <h1>Select your plan</h1>
        <h4>You have the option of monthly or yearly billing.</h4>
        <div class="select-plan">
            {/* toggle monthly/yearly here */}
         </div>
        </div>
        <div class="msf-view">
        <h1>Pick add-ons</h1>
        <h4>Add-ons help enhance your gaming experience.</h4>
        <div class="add-ons">
          <div class="add-on">
            <p class="title">Online service</p>
            <p class="subtitle">Access to multiplayer games.</p>
            <p class="price">+1$/mo</p>
          </div>
          <div class="add-on">
            <p class="title">Larger storage</p>
            <p class="subtitle">Extra 1TB of cloud save</p>
            <p class="price">+2$/mo</p>
          </div>
          <div class="add-on">
            <p class="title">Customizable Profile</p>
            <p class="subtitle">Custom theme on your profile</p>
            <p class="price">+2$/mo</p>
          </div>
        </div>
        </div>
        <div class="msf-view">
        <h1>Finishing up</h1>
        <h4>Double-check everything looks OK before confirming.</h4>
        <div class="final-tally">
          <div class="tally-item">
            <p class="chosen-plan-title"></p>
            <p class="chosen-plan-price"></p>
          </div>

          <div class="tally-item">
            <p class="chosen-add-ons"></p>
            <p class="chosen-add-ons-price"></p>
          </div>

          <div class="tally-item">
            <p class="total"></p>
            <p class="total-amoung"></p>
          </div>
        </div>
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