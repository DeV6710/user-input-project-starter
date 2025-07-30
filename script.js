let main_title = document.getElementById("main_title")
let story_result = document.getElementById("story_result")
let form = document.querySelector("form")
let title_input =document.getElementById("title_input")
let submit_button =document.getElementById("submit_button")
let inputs = document.querySelectorAll("input")
let noun =document.getElementById("noun")
let verb =document.getElementById("verb")
let adjective =document.getElementById("adjective")




title_input.addEventListener("input",function(e){
    e.preventDefault()
    main_title.innerText = title_input.value
    
})


submit_button.addEventListener("click",function(e){
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == ""){
            alert("Please fill the text " )
            break;
        }
    }
    e.preventDefault()
    form.style.display = "none"
    story_result.innerText = `Last Night I ate ${noun.value},today I ${verb.value}. What a ${adjective.value} day !`
    

})






















