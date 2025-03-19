const colorPicker = document.querySelector("#Color-Picker")
const heading = document.querySelector("#heading")
const paragraph = document.querySelector("#paragraph")

colorPicker.addEventListener("input",(e)=>{
//get the seleted color
const selectedColor = e.target.value 
//apply color to the heading and paragraph
heading.style.color = selectedColor
paragraph.style.color = selectedColor
})