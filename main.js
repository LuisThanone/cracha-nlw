const LinksSocialMedia = {
    github: "LuisThanone",
    youtube: "nationalpublicradio",
    facebook: "maykbrito",
    instagram: "sathanone",
    twitter: "ThanoneO"
}

function changeSocialMediaLinks() {
   for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    // console.log(li.children[0].href)
   }
}

   changeSocialMediaLinks()

   function getGitHubProfileInfos() {
      const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    //  console.log(url)

      fetch(url).then(response => response.json()).then(data => {
         userName.textContent = data.name
         userBio.textContent = data.bio
         userLink.href = data.html_url
         userImage.src = data.avatar_url
      })
   }

   getGitHubProfileInfos()
