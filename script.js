function openModal(name,price){
document.getElementById('modal').style.display='flex';
document.getElementById('modalTitle').innerText='Book '+name;
document.getElementById('priceText').innerText='Price per night: $'+price;
}
function closeModal(){
document.getElementById('modal').style.display='none';
}
