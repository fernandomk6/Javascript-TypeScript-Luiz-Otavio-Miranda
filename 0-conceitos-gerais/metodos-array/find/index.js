const musicsTitle = ['thunderstruck', 'hells bells', 'holly diver', 'holly wars'];

const musicToFind = 'thunderstruck';

const findedMusic = musicsTitle.find(music => music === musicToFind);

console.log(findedMusic); // thunderstruck