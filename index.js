//selecting popup bod,overlay button
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup-box")
var addbutton=document.getElementById("add-popup-button")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancel=document.getElementById("cancel-popup")
cancel.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container,book-title,book-author,book-note,add-book,book-note
var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var booknote=document.getElementById("book-note")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book_container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${booknote.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
//after submitting the form to ckear the input area
    booktitle.value=''
    bookauthor.value=''
    booknote.value=''
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event) {
    event.target.parentElement.remove()
    
}