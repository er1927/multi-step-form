import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ 
  weight: ['400', '500', '700'],
  subsets: ['latin-ext'] 
})

export default function Home() {
  // state and inizialization 
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    plan: '',
    addons: [],
  });

  const [errors, setErrors] = useState({});

  const steps = [
    {
      title: 'Personal info',
      description: 'Please provide your name, email address, and phone number.',
    },
    {
      title: 'Select your plan',
      description: 'You have the option of monthly or yearly billing.',
    },
    {
      title: 'Pick add-ons',
      description: 'Add-ons help enhance your gaming experience.',
    },
    {
      title: 'Finishing up',
      description: 'Double-check everything looks OK before confirming.',
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>MULTI STEP FORM</title>
      </Head>
      <main style={ubuntu.style}>
    <form className={styles.msfView}>
    <div className="msf-header">
        <div className={styles.msf__stepcontainer}>
            <div className={styles.msf__step}><span>1</span></div>
            <div className={styles.msf__step}><span>2</span></div>
            <div className={styles.msf__step}><span>3</span></div>
            <div className={styles.msf__step}><span>4</span></div>
        </div>
    </div>
 
    <div className="msf-content">
        <div className={styles.card__body}>
            <h1>Personal info</h1>
            <h4>Please provide your name, email address, and phone number.</h4>
            <div className={styles.card__body__input}>
              <label className={styles.card__body__input_label}>Name</label>
              <input className={styles.card__body__input} placeholder="e.g. Alex Smith"/>
              <label className={styles.card__body__input_label}>Email Address</label>
              <input className={styles.card__body__input} type="email" placeholder="e.g. alex_smith@world.com"/>
              <label className={styles.card__body__input_label}>Phone Number</label>
              <input className={styles.card__body__input} type="number" placeholder="e.g. + 1 234 567 890"/>
            </div>
        </div>
        <div className={styles.card__body}>
        <h1>Select your plan</h1>
        <h4>You have the option of monthly or yearly billing.</h4>
        <div className={styles.card__body__option}>
          <div>
            {/* icon here */}
          </div>
          <div>
            <h3>Arcade</h3>
            <p>$9/mo</p>
          </div>
         </div>
         <div className={styles.card__body__option}>
          <div>
            {/* icon here */}
          </div>
          <div>
            <h3>Advanced </h3>
            <p>$12/mo</p>
          </div>
         </div>
         <div className={styles.card__body__option}>
          <div>
            {/* icon here */}
          </div>
          <div>
            <h3>Pro </h3>
            <p>$15/mo</p>
          </div>
         </div>
         <div className={styles.card__body__options__toggle}>
          <p>Montly</p>
          {/* toggle monthly/yearly here */}
          <p>Yearly</p>
         </div>
        </div>
        <div className={styles.card__body}>
        <h1>Pick add-ons</h1>
        <h4>Add-ons help enhance your gaming experience.</h4>
        <div className="add-ons">
          <div className={styles.card__body__checklist}>
            <p className="title">Online service</p>
            <p className="subtitle">Access to multiplayer games.</p>
            <p className="price">+1$/mo</p>
          </div>
          <div className={styles.card__body__checklist}>
            <p className="title">Larger storage</p>
            <p className="subtitle">Extra 1TB of cloud save</p>
            <p className="price">+2$/mo</p>
          </div>
          <div className={styles.card__body__checklist}>
            <p className="title">Customizable Profile</p>
            <p className="subtitle">Custom theme on your profile</p>
            <p className="price">+2$/mo</p>
          </div>
        </div>
        </div>
        <div className={styles.card__body}>
        <h1>Finishing up</h1>
        <h4>Double-check everything looks OK before confirming.</h4>
        <div className="final-tally">
          <div className="tally-item">
            <p className="chosen-plan-title"></p>
            <p className="chosen-plan-price"></p>
          </div>

          <div className="tally-item">
            <p className="chosen-add-ons"></p>
            <p className="chosen-add-ons-price"></p>
          </div>

          <div className="tally-item">
            <p className="total"></p>
            <p className="total-amoung"></p>
          </div>
        </div>
      </div>
    </div>
 
    <div className={styles.msf__navigation}>
      <div className="col-md-3">
        <button type="button" data-type="back" className="btn btn-outline-dark msf-nav-button"><i className="fa fa-chevron-left"></i> Go back </button>
      </div>
      <div>
        <button type="button" data-type="next" className="btn  btn-outline-dark msf-nav-button">Next Step<i className="fa fa-chevron-right"></i></button>
        <button type="submit" data-type="submit" className="btn btn-outline-dark msf-nav-button">Confirm</button>
      </div>
    </div>
</form>
      </main>
      <footer>
       
      </footer>
    </div>
  )
}

// el plan es ir de a poco, 
// copiando y pegando de un modo logico (base + fill in the blank)
// el codigo que esta en MSFindex.js en la carpeta de assets y design
//pa hacer que ande el formulario