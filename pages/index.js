import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ 
  weight: ['400', '500', '700'],
  subsets: ['latin-ext'] 
})

export default function Home() {
  // state and initialization 
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

  // event handlers 

  const handleStepChange = (step) => {
    if (step >= 1 && step <= 4) {
      setCurrentStep(step);
      setErrors({});
    }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
    // Form validation based on the current step
    if (currentStep === 1) {
      if (!formData.name || !formData.email || !formData.phoneNumber) {
        newErrors.step1 = 'Please fill in all fields.';
      }
      if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    } else if (currentStep === 2) {
      if (!formData.plan) {
        newErrors.plan = 'Please select a plan.';
      }
    } else if (currentStep === 3) {
      // Add validation for add-ons here if needed.
    }
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      // Proceed to the next step or handle form submission
      if (currentStep < 4) {
        handleStepChange(currentStep + 1);
      } else {
        // Handle final form submission
        // You can send the data to the server or perform any other action here.
        console.log('Form data:', formData);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>MULTI STEP FORM</title>
      </Head>
      <main style={ubuntu.style}>
    <form className={styles.msfView} onSubmit={handleFormSubmit}>
    <div className="msf-header">
        <div className={styles.msf__stepcontainer}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.msf__step} ${currentStep === index + 1 ? styles.active : ''}`}
              onClick={() => handleStepChange(index + 1)}>
              <span>{index + 1}</span>
            </div>
              ))}
            </div>
          </div>
 
    <div className="msf-content">
        <div className={styles.card__body}>              
        <h1>{steps[currentStep - 1].title}</h1>
              <h4>{steps[currentStep - 1].description}</h4>
              // Render form fields based on the current step 
              {currentStep === 1 && (
                <div className={styles.card__body__input}>
                  <label className={styles.card__body__input_label}>Name</label>
                  <input
                    className={styles.card__body__input}
                    type="text"
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <label className={styles.card__body__input_label}>Email Address</label>
                  <input
                    className={styles.card__body__input}
                    type="email"
                    placeholder="e.g. alex_smith@world.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <label className={styles.card__body__input_label}>Phone Number</label>
                  <input
                    className={styles.card__body__input}
                    type="text"  //Use text for phone number
                    placeholder="e.g. +1 234 567 890"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </div>
              )}
              {currentStep === 2 && (
                null // Render plan options and handle selection
              )}
              {currentStep === 3 && (
                null // Render add-ons options and handle selection
              )}
              {currentStep === 4 && (
                null // Display summary of selections
              )}
              {errors.step1 && <p className={styles.error}>{errors.step1}</p>}
              {errors.email && <p className={styles.error}>{errors.email}</p>}
              {errors.plan && <p className={styles.error}>{errors.plan}</p>}
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