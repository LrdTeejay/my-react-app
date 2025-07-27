function App() {

  return (
    <main>
    <header >  
    <nav id="hover-container" style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom:80}}>
      <img style={{width: 150, height:60, }} src="/slack.png" />
      {/* <div id="hover-container" style={{display: "flex"}}> */}

      <div className="att" id="hover-target" style={{fontWeight:"bolder"}}><u>Features</u></div>
      <div class="popup-box">
      <div style={{display: "flex", justifyContent: "space-around", gap:"20%"}}>
        <div >
          <h3>COLLABORATION</h3>
          <p><b>Channels</b> <br/>Organize teams and work</p>
          <p><b>Slack Connect</b> <br />Work with external partners</p>
          <p><b>Messaging</b> <br />Chat with your team</p>
          <p><b>Huddles</b> <br />Meet with audio and video</p>
          <p><b>Clips</b> <br />Record and share updates</p>     
        </div>
        <div>
          <h3>PROJECT MANAGEMENT</h3> 
          <p><b>Templates</b> <br />Start any task, fast</p>
          <p><b>Canvas</b> <br />Create rich, flexible docs</p>
          <p><b>Lists</b> <br />Organize, track and manage projects</p>
          <p><b>File Sharing </b><br />Bring files to the flow of work</p>       
        </div>
        
      </div>
  </div>

<div className="att" id="hover-target" style={{fontWeight:"bolder"}}><u>Solution</u> </div>
     <div class="popup-box">
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <div >
          <h3>BY DEPARTMENT</h3>
          <p>Engineering</p>
          <p>IT</p>
          <p>Customer Service</p>
          <p>Sales</p>
          <p>Project Management</p>
          <p>Marketing</p>
          <p>Human Resources</p>
          <p>Security</p>
        </div>
        <div>
          <h3>BY INDUSTRY</h3>
          <p>Manufacturing, Auto & Energy</p>
          <p>Technology</p>
          <p>Media</p>
          <p>Small Business</p>
          <p>Financial Services</p>
          <p>Retail</p>
          <p>Public Sector</p>
          <p>Education</p>
          <p>Health & Life Science</p>
        </div>
      </div>
  </div>

<div className="att"  style={{fontWeight:"bolder"}}>Enterprise </div>
      

<div className="att" id="hover-target" style={{fontWeight:"bolder"}}><u>Resources</u></div>
 <div class="popup-box">
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <div >
          <h4>Resources Library</h4> 
          <p>Events</p>
          <p>Customer Stories</p>
          <p>Blog</p>
        </div>
        <div>
          <h4>What’s New</h4>
          <p>Developers</p>
          <p>Community</p>
          <p>Slack Marketplace</p>
        </div>
        <div>
          <h4>Product Tour</h4>
          <p>Partners</p>
          <p>Slack Certified</p>
          <p>Health & Life Science</p>
        </div>
      </div>
  </div> 

<div className="att" style={{fontWeight:"bolder"}}>Pricing </div>
      
  
      {/* </div> */}
      <div style={{display:"flex", alignItems: "center", gap:20}}>
      <img src="/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" />
      <button style={{backgroundColor: "hsla(286, 72%, 27%, 1.00)", color: "white", padding:15, borderRadius: 5, fontWeight: 600, border:"none",}}>GET STARTED</button>
      </div>
    </nav>
    </header>
    <section style={{textAlign: "center"}} > 
           <h1>
        <video style={{width:"100%", maxWidth:760}} autoPlay muted loop>
    <source src="/VID-20250726-WA0001.mp4" type="video/mp4"></source>
    <source src="/VID-20250726-WA0001.mp4"  type="video/webm"></source>
    </video>
      </h1>

      <button style={{backgroundColor: "hsla(286, 72%, 27%, 1.00)", color: "white", padding:10, borderRadius: 5, fontWeight: 600, marginBottom:15, paddingInline:60, paddingBlock:20, border:"none"}}>TRY FOR FREE</button> <br />
      <button style={{backgroundColor: "hsla(286, 72%, 27%, 1.00)", color: "white", borderRadius: 5, fontWeight: 600, paddingInline:50, paddingBlock:20, border:"none", color:"hsla(286, 72%, 27%, 1.00)", backgroundColor: "white", border: "1.5px solid", marginBottom:25}}>FIND YOUR PLAN</button>

    {/*stripe*/}
    {/*video*/}
    
    <h1>
       <video style={{width:"100%", maxWidth:760}} autoPlay muted loop>
        <source src="/VID-20250726-WA0006.mp4" type="video/mp4"></source>
        <source src="/VID-20250726-WA0006.mp4"  type="video/webm"></source>
      </video>
    </h1>

    <h1 style={{fontFamily: "Helvetica", fontSize:"2em",}}>Bring Your People, projects, apps, and AI agents together. </h1>
    </section >
    <section className="responsive" >
    <div className="child" style={{marginInlineStart:20}}>
      <p style={{}}>Collaboration</p>
      <h1 style={{fontFamily: "Helvetica", fontSize:"2em",}}>Communicate in countless ways from one place.</h1>
      <p>Slack is built for bringing people and information together. Type things out. Talk things out. Invite external organizations into the conversation.</p>
      <div style={{display: "flex", fontFamily: "Helvetica", alignItems: "center", gap:20, fontSize: 20}}>
        <h1 style={{fontSize:50, color: "hsl(270, 70%, 50%)"}}>80%</h1>
        <p>of the Fortune 100 use Slack Connect to work with partners <br /> and customers</p>
      </div>
    </div>
    <h1 style={{}}>
      <video style={{width:"100%"}} autoPlay  muted loop>
        <source src="/VID-20250726-WA0003.mp4" type="video/mp4"></source>
        <source src="/VID-20250726-WA0003.mp4"  type="video/webm"></source>
     </video>

      </h1>
    </section>
  {/*video*/}
      <section className="responsive" >
    <div className="child" style={{marginInlineStart:20}}>
      <p style={{}}>Project management</p>
      <h1 style={{fontFamily: "Helvetica",  fontSize:"2em",}}>Manage projects and move work forward faster.</h1>
      <p>Prioritize tasks, share ideas, and stay aligned. Slack brings every piece of your project together from start to finish.</p>
      <div style={{display: "flex", fontFamily: "Helvetica",  alignItems: "center", gap:20, fontSize: 20}}>
        <h1 style={{fontSize:50, color: "hsl(270, 70%, 50%)"}}>47%</h1>
        <p>increase in productivity for teams using Slack2</p>
      </div>
    </div>
      {/*video*/}
      <h1 style={{}}>
      <video style={{width:"100%"}} autoPlay  muted loop>
        <source src="/VID-20250726-WA0005.mp4" type="video/mp4"></source>
        <source src="/VID-20250726-WA0005.mp4"  type="video/webm"></source>
     </video>

      </h1>
    </section>
    <section className="responsive" >
    <div className="child" style={{marginInlineStart:20}}>
      <p style={{}}>Integrations</p>
      <h1 style={{fontFamily: "Helvetica", fontSize:"2em",}}>Tap into the tools you already use.</h1>
      <p>Over 2,600 apps are ready to connect in Slack so you can automate everyday tasks in the flow of work, and save your team precious time.</p>
      <div style={{display: "flex", fontFamily: "Helvetica", alignItems: "center", gap:20, fontSize: 20}}>
        <h1 style={{fontSize:50, color: "hsl(270, 70%, 50%)"}}>35%</h1>
        <p>increase in time saved due to automation for Slack users3</p>
      </div>
    </div>
      {/*video*/}
      <h1 style={{}}>
      <video style={{width:"100%"}} autoPlay  muted loop>
        <source src="/VID-20250726-WA0002.mp4" type="video/mp4"></source>
        <source src="/VID-20250726-WA0002.mp4"  type="video/webm"></source>
     </video>

      </h1>
    </section>
    <section className="responsive" >
    <div className="child" style={{marginInlineStart:20}}>
      <p style={{}}>Slack AI</p>
      <h1 style={{fontFamily: "Helvetica", fontSize:"2em",}}>Do more with AI that works where you do.</h1>
      <p>Search your entire company history for answers, instantly catch up on conversations, and get daily recaps of messages missed.</p>
      <div style={{display: "flex", fontFamily: "Helvetica", alignItems: "center", gap:20, fontSize: 20}}>
        <h1 style={{fontSize:50, color: "hsl(270, 70%, 50%)"}}>97 min</h1>
        <p>average time users can save weekly with Slack AI</p>
      </div>
    </div>
      {/*video*/}
      <h1 style={{}}>
      <video style={{width:"100%"}} autoPlay  muted loop>
        <source src="/VID-20250726-WA0004.mp4" type="video/mp4"></source>
        <source src="/VID-20250726-WA0004.mp4"  type="video/webm"></source>
     </video>

      </h1>
    </section>
    <article className="responsive" style={{marginInline:20, 
    background: "linear-gradient(90deg, rgba(78,173,217,1) 0%, rgba(192,229,240,1) 31%, rgba(255,255,255,1) 53%)", padding:20, borderRadius:"20px"}}>
      <div className="child" style={{marginInlineStart:20}}>
      <p style={{fontWeight: "bold"}}>Agentforce in Slack</p>
      <h2 style={{fontSize: 30, fontFamily: "Helvetica"}}>There’s an AI agent for everyone in Slack.</h2>
      <p>Update sales proposals, set team reminders, resolve IT issues, and so much more with always-on, action-taking AI agents in Slack.</p>
      <p>Learn more </p>
      </div>
    <h1 style={{}}>
      <video style={{width:"100%"}} autoPlay  muted loop>
        <source src="/VID-20250726-WA0007.gmp4" type="video/mp4"></source>
        <source src="/VID-20250726-WA0007.mp4"  type="video/webm"></source>
     </video>

      </h1>

    </article>
    <div style={{marginInline:70, textAlign:"center", marginBlock:50, borderEndStartRadius:"50%", borderEndEndRadius:"50%"}}>
      <button style={{backgroundColor: "hsla(286, 72%, 27%, 1.00)", color: "white", padding:10, borderRadius: 5, fontWeight: 600, marginBottom:15, paddingInline:60, paddingBlock:20, border:"none", marginInlineEnd:10}}>TRY FOR FREE</button> 
        <button style={{backgroundColor: "hsla(286, 72%, 27%, 1.00)", color: "white", borderRadius: 5, fontWeight: 600, paddingInline:50, paddingBlock:20, border:"none", color:"hsla(286, 72%, 27%, 1.00)", backgroundColor: "white", border: "1.5px solid", marginBottom:25, marginInlineStart:10}}>FIND YOUR PLAN</button>
      </div>

    <section style={{backgroundColor:"hsla(286, 72%, 27%, 1.00)", color: "white", paddingBlock:70, textAlign:"center" }}>
      <h1 style={{fontSize:30, }} >We’re in the business of growing businesses.</h1> <br /><br />
      <div className="span"> 
      <span style={{maxWidth: "26%"}}>
      <h1 style={{ fontSize:60, fontWeight: "bolder", color: "hsla(270, 88%, 75%, 1.00)", fontFamily: "verdana"}}>90%</h1>
      <h2 style={{ fontSize:20, marginTop:"-2em",  fontFamily: "verdana"}}>of users say Slack helps them stay more connected</h2>
      </span>
      <span style={{maxWidth: "26%"}}>
      <h1 style={{ fontSize:60, fontWeight: "bolder", color: "hsla(270, 88%, 75%, 1.00)",  fontFamily: "verdana"}}>43%</h1>
      <h2 style={{ fontSize:20, marginTop:"-2em",  fontFamily: "verdana"}}>of users say Slack helps them stay more connected</h2>
      </span>
      <span style={{maxWidth: "26%"}}>
      <h1 style={{ fontSize:60, fontWeight: "bolder", color: "hsla(270, 88%, 75%, 1.00)", fontFamily: "verdana"}}>87%</h1>
      <h2 style={{ fontSize:20, marginTop:"-2em",  fontFamily: "verdana"}}>of users say Slack helps them stay more connected</h2>
      </span>
      </div>
      </section>
    <footer style={{marginInline:30}}>
      <img style={{marginInline:-20, width: 150, height:60, }} src="/slack.png" />
      <p style={{color: "blue"}}>Download Slack</p>
      <div style={{display:"flex", gap:10, marginBlockEnd:25}}>
      <p style={{color: "gray"}}>Privacy</p>
      <p style={{color: "gray"}}>Terms</p> 
      <p style={{color: "gray"}}>Cookie Preferences</p>
      <p style={{color: "gray"}}>Your Privacy Choices</p>  
      </div>
      <p style={{color: "rgba(118, 114, 114, 1)"}}>©2025 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</p>
      
    </footer>
    </main>
  )
}
export default App
