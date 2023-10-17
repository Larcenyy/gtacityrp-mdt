// modalUtils.js

export function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

export function closeModal(modal) {
    modal.style.display = "none";
}

export function attachModalListeners() {
    const openModalBtns = document.querySelectorAll(".openModal");
    const closeModalBtns = document.querySelectorAll(".closeModal");
    const modalBackgrounds = document.querySelectorAll(".modal-background");

    openModalBtns.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const modalId = event.currentTarget.getAttribute("data-modal");
            openModal(modalId);
        });
    });


    closeModalBtns.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const modal = event.currentTarget.closest(".modal-background");
            closeModal(modal);
        });
    });

    modalBackgrounds.forEach(modal => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });
}
