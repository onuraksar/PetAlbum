window.mockApiUrl = "https://5ff5d534941eaf0017f37390.mockapi.io/pets";

window.removePet = (id) => {
  fetch(`${window.mockApiUrl}/${id}`, {
      method: "DELETE"
    }).then((response) => response.json())
    .then(() => {
      location.reload(); // refresh the page if deletion is successful.
    })
    .catch((err) => console.log(err)); // log the error if it occurs.
}

window.createModal = (text) => {
  let modalWrap = document.createElement("div");
  modalWrap.innerHTML = `<div class="modal fade" tabindex="-1">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Description</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${text}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;
  document.body.append(modalWrap);
  const modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
  modal.show();
}

window.openPetDetail = (id) => {
  fetch(`${window.mockApiUrl}/${id}`).then((response) => response.json()).then((pet) => {
    const petDescription = pet.description;
    createModal(petDescription);
  }).catch((err) => console.log(err));
};
