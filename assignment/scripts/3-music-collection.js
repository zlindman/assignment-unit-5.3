console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
  let album = {
    title,
    artist,
    yearPublished,
  }
  collection.push(album);
  return album;
}

console.log(addToCollection(myCollection, 'American Beauty', 'Grateful Dead', 1970));
console.log(addToCollection(myCollection, 'The Bends','Radiohead',1995));
console.log(addToCollection(myCollection, 'Hot Fuss','The Killers', 2004));
console.log(addToCollection(myCollection, 'Abbey Road','The Beatles',1969));
console.log(addToCollection(myCollection, 'By The Way','Red Hot Chili Peppers',2002));
console.log(addToCollection(myCollection, 'Californication','Red Hot Chili Peppers',1999));

function showCollection(collection){
  for (let collectionItem of collection){
    // let collectionItem = {
    //   title,
    //   artist,
    //   yearPublished,
    // }
    console.log(collectionItem.title + " by " + collectionItem.artist + " published on " + collectionItem.yearPublished);
  }
}

console.log(showCollection(myCollection, 'American Beauty', 'Grateful Dead', 1970));
console.log(showCollection(myCollection, 'The Bends','Radiohead',1995));
console.log(showCollection(myCollection, 'Hot Fuss','The Killers', 2004));
console.log(showCollection(myCollection, 'Abbey Road','The Beatles',1969));
console.log(addToCollection(myCollection, 'By The Way','Red Hot Chili Peppers',2002));
console.log(showCollection(myCollection, 'Californication','Red Hot Chili Peppers',1999));


function findByArtist (collection, artist){
  let artistSearch = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      artistSearch.push(collection[i]);
    }
  }
  if (artistSearch.length > 0) {
    return artistSearch;
  } 
  else {
    return 'Artist Not Found';
  }
}

console.log(findByArtist(myCollection, 'Red Hot Chili Peppers'));
console.log(findByArtist(myCollection, 'Adele'));







// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
