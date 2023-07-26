import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MULTI STEP FORM</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/node_modules/multi-step-form-js/css/multi-step-form.css" type="text/css"></link>
      </Head>
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">MULTI STEP FORM!</a>
    </h1>
    <form class="msf">
    <div class="msf-header">
        <div class="row text-center">
            <div class="msf-step col-md-4"><i class="fa fa-clipboard"></i> <span>Step 1</span></div>
            <div class="msf-step col-md-4"><i class="fa fa-credit-card"></i><span>Step 2</span></div>
            <div class="msf-step col-md-4"><i class="fa fa-check"></i> <span>Step 3</span></div>
            <div class="msf-step col-md-4"><i class=""></i> <span>Step 4</span></div>
        </div>
    </div>
 
    <div class="msf-content">
        <div class="msf-view">
            ...
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

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}