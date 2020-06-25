const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".cardCurso")
const closeModal = document.querySelector(".modal-overlay .modal #closemodal span")
const maxModal = document.querySelector(".modal-overlay .modal #maximizemodal span")

for(let card of cards){
    card.addEventListener("click", ()=> {
        const cursoId = card.getAttribute(`id`)
        modalOverlay.classList.add(`active`)
        modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${cursoId}`
    })
}
closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("active")
})
maxModal.addEventListener("click", () => {
    if (modalOverlay.classList.contains("active")){
        modalOverlay.classList.add("max")
    }
    
})
