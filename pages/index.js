import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ddd from '../styles/ddd.css'

export default function Home() {
  return (
    <div classname="container">
        <div classname="stepwizard">
            <div classname="stepwizard-row setup-panel">
                <div classname="stepwizard-step col-xs-3"> 
                    <a href="#step-1" type="button" classname="btn btn-success btn-circle">1</a>
                    <p><small>Shipper</small></p>
                </div>
                <div classname="stepwizard-step col-xs-3"> 
                    <a href="#step-2" type="button" classname="btn btn-default btn-circle" disabled="disabled">2</a>
                    <p><small>Destination</small></p>
                </div>
                <div classname="stepwizard-step col-xs-3"> 
                    <a href="#step-3" type="button" classname="btn btn-default btn-circle" disabled="disabled">3</a>
                    <p><small>Schedule</small></p>
                </div>
                <div classname="stepwizard-step col-xs-3"> 
                    <a href="#step-4" type="button" classname="btn btn-default btn-circle" disabled="disabled">4</a>
                    <p><small>Cargo</small></p>
                </div>
            </div>
        </div>

        <form role="form">
            <div classname="panel panel-primary setup-content" id="step-1">
                <div classname="panel-heading">
                     <h3 classname="panel-title">Shipper</h3>
                </div>
                <div classname="panel-body">
                    <div classname="form-group">
                        <label classname="control-label">First Name</label>
                        <input maxlength="100" type="text" required="required" classname="form-control" placeholder="Enter First Name" />
                    </div>
                    <div classname="form-group">
                        <label classname="control-label">Last Name</label>
                        <input maxlength="100" type="text" required="required" classname="form-control" placeholder="Enter Last Name" />
                    </div>
                    <button classname="btn btn-primary nextBtn pull-right" type="button">Next</button>
                </div>
            </div>

            <div classname="panel panel-primary setup-content" id="step-2">
                <div classname="panel-heading">
                     <h3 classname="panel-title">Destination</h3>
                </div>
                <div classname="panel-body">
                    <div classname="form-group">
                        <label classname="control-label">Company Name</label>
                        <input maxlength="200" type="text" required="required" classname="form-control" placeholder="Enter Company Name" />
                    </div>
                    <div classname="form-group">
                        <label classname="control-label">Company Address</label>
                        <input maxlength="200" type="text" required="required" classname="form-control" placeholder="Enter Company Address" />
                    </div>
                    <button classname="btn btn-primary nextBtn pull-right" type="button">Next</button>
                </div>
            </div>

            <div classname="panel panel-primary setup-content" id="step-3">
                <div classname="panel-heading">
                     <h3 classname="panel-title">Schedule</h3>
                </div>
                <div classname="panel-body">
                    <div classname="form-group">
                        <label classname="control-label">Company Name</label>
                        <input maxlength="200" type="text" required="required" classname="form-control" placeholder="Enter Company Name" />
                    </div>
                    <div classname="form-group">
                        <label classname="control-label">Company Address</label>
                        <input maxlength="200" type="text" required="required" classname="form-control" placeholder="Enter Company Address" />
                    </div>
                    <button classname="btn btn-primary nextBtn pull-right" type="button">Next</button>
                </div>
            </div>

            <div classname="panel panel-primary setup-content" id="step-4">
                <div classname="panel-heading">
                     <h3 classname="panel-title">Cargo</h3>
                </div>
                <div classname="panel-body">
                    <div classname="form-group">
                        <label classname="control-label">Company Name</label>
                        <input maxlength="200" type="text" required="required" classname="form-control" placeholder="Enter Company Name" />
                    </div>
                    <div classname="form-group">
                        <label classname="control-label">Company Address</label>
                        <input maxlength="200" type="text" required="required" classname="form-control" placeholder="Enter Company Address" />
                    </div>
                    <button classname="btn btn-success pull-right" type="submit">Finish!</button>
                </div>
            </div>
        </form>
    </div>
    <div className={styles.container}>
      <Head>
        <title>Create Next App for algoscale</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://algoscale.com">Algoscale-next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing data{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation used by Tarun Saini Algoscale &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          
          <a href="https://monkidea.com" className={styles.card}>
            <h3>Monkidea &rarr;</h3>
            <p>Find in-depth information about monkidea.com features and API.</p>
          </a>


          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
