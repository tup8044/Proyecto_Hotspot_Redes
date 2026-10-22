document.addEventListener("DOMContentLoaded", () => {
    // 1. Ordenar automáticamente la lista de integrantes por orden alfabético
    const lista = document.getElementById("listaIntegrantes");
    if (lista) {
        const items = Array.from(lista.getElementsByTagName("li"));
        items.sort((a, b) => a.textContent.localeCompare(b.textContent));
        lista.innerHTML = "";
        items.forEach(item => lista.appendChild(item));
    }
});

// 2. Función para desplegar el visor ampliado de imágenes (Modal)
function openModal(imageSrc, captionText) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "flex";
    modalImg.src = imageSrc;
    modalCaption.textContent = captionText;
}

// 3. Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// 4. Cerrar modal mediante la tecla ESC
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});