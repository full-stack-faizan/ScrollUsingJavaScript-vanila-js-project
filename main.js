let HomeTag = document.getElementById('myhome')
let AboutTag = document.getElementById('myabout')
let ContactTag = document.getElementById('mycontact')
let ExploreTag = document.getElementById('myexplore')
let btn = document.getElementById('btn')
let second= document.getElementById('second')
let about= document.getElementById('about')
let contact= document.getElementById('contact')
let explore= document.getElementById('explore')

btn.addEventListener('click', (e)=>{
  explore.scrollIntoView({
      behavior: "smooth"
    })
    e.preventDefault()
})

HomeTag.addEventListener('click', (e)=>{
    second.scrollIntoView({
        behavior: "smooth"
      })
      e.preventDefault()
})

AboutTag.addEventListener('click', (e)=>{
    about.scrollIntoView({
        behavior: "smooth"
      })
      e.preventDefault()
      console.log('sdfjlsd')
})
ContactTag.addEventListener('click', (e)=>{
    contact.scrollIntoView({
        behavior: "smooth"
      })
      e.preventDefault()
      console.log('sdfjlsd')
})
ExploreTag.addEventListener('click', (e)=>{
    explore.scrollIntoView({
        behavior: "smooth"
      })
      e.preventDefault()
      console.log('sdfjlsd')
})

let mydate = new Date()
let year= mydate.getFullYear()
console.log(year)
let YearTag=document.getElementById('yeartag')

YearTag.innerHTML= year







