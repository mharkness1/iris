import PageHeader from "../../header/header";
import './about.css'

const SupportPage: React.FC = () => {
  
    return (
        <>
        <PageHeader />
        <div className="main-section px-30 about-page">
        <h1>Support</h1>
        <p>
          Please use pull requests to suggest improvements or additional
          features (I&#39;ve some ideas listed above). Or to help. Or, in fact
          I&#39;m happy to receive, constructive criticism of my implementation.
        </p>
        <p>
          I made this for myself, both to learn and for a separate project
          (which ended up needed a Golang version anyway!) but if you find it
          valueable you can monetarily contribute to its ongoing development
          here: <a className="underline underline-offset-5 bg-hover" href="https://buymeacoffee.com/mharkness">Buy me a coffee</a>
        </p>
        <em>it's just me, i'm new to this, give me ideas and advice — please!</em>
        <p>
          Thanks, Michael x
        </p>
        </div>
        </>
  )
};

export default SupportPage;