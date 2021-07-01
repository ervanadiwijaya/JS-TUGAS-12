var buah = ['Pisang','Jeruk','Apel','Mangga'];

function DeleteLast() {
    buah.pop();
    return buah;
}

function DeleteFirst() {
    buah.shift();
    return buah;
}

console.log(buah);
console.log(DeleteLast());
console.log(DeleteFirst());