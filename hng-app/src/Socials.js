function Socials(){
    return(
        <div className= "socials">
        <img id ='slackicon' src= {window.location.origin + '/slack_icon.png'} alt="slack" />
        <img id ='githubicon' src= {window.location.origin + '/github_icon.png'} alt="git" />
        </div>
    )
}
export default Socials;