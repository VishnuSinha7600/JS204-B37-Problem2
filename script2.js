function countMediaExtension(mediaFiles){

    const extensionCount =  {};

    mediaFiles.forEach(filename => {
        const extension = filename.split('.').pop();

        if (extensionCount.hasOwnProperty(`${extension}Count`)){
            extensionCount[`${extension}Count`]++;
            extensionCount[`${extension}Data`].push(filename);
        }else{
            extensionCount[`${extension}Count`] = 1;
            extensionCount[`${extension}Data`] = [filename];
        }
    });



   return extensionCount
    
}

const mediaFiles = [
    "song1.mp3",
    "song2.mp3",
    "movie1.mp4",
    "picture1.png",
    "song3.mp3",
    "movie2.mp4",
    "recording1.wav",
    "song4.mp3",
    "archive.old.song.mp3",
    " ",
    "áudio_special.mp3"
  ];
  

  const result = countMediaExtension(mediaFiles);
  console.log(result);
  