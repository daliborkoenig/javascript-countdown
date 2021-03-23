function worldEnded(){
  console.log(`It is done, the World has been DESTROYED!!`);
}

for (let i = 10; i >= 0; --i) {
  setTimeout(() => {
    console.log(`World ending in ==> ${i} <== are you prepared?`);
    if(i === 0){
      setTimeout(worldEnded, 1000);
    }
  },
  1000 * (10-i));
}
