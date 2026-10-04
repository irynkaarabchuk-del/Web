    let music = {
        title: "Bohemian Rhapsody",
        artist: "Queen",
        duration: 354,
        isFavorite: false,
    
        musicInfo() {
            console.log(`Title: ${music.title}, Artist: ${music.artist}, Duration: ${music.duration} seconds, Is Favorite: ${music.isFavorite}`);
        }
    }
    music.musicInfo();

    music.isFavorite = !music.isFavorite;
    music.musicInfo();

    let playlist = [
        { title: "Bohemian Rhapsody", artist: "Queen", duration: 354, isFavorite: false },
        { title: "Stairway to Heaven", artist: "Led Zeppelin", duration: 482, isFavorite: true },
        { title: "Hotel California", artist: "Eagles", duration: 391, isFavorite: false }
    ];
    function displayPlaylist() {
        playlist.forEach(song => {
            console.log(`Title: ${song.title}, Artist: ${song.artist}, Duration: ${song.duration} seconds, Is Favorite: ${song.isFavorite}`);
       });
    }

    playlist.push({ title: "Imagine", artist: "John Lennon", duration: 183, isFavorite: true });
    displayPlaylist();

    playlist.sort((a, b) => a.duration - b.duration);
    console.log("Sorted playlist by duration:", playlist);

    let favoriteSongs = playlist.filter(song => song.isFavorite);
    console.log("Favorite songs:", favoriteSongs);

    let ledZeppelinSong = playlist.find(song => song.artist === "Led Zeppelin");
    console.log("Led Zeppelin song:", ledZeppelinSong);


    function addSongToPlaylist() {
        let title = prompt("Введіть назву пісні:");
        let artist = prompt("Введіть виконавця пісні:");
        let duration = +prompt("Введіть тривалість пісні в секундах:");
        let isFavorite = confirm("Чи є ця пісня у ваших улюблених?");

        playlist.push({ title, artist, duration, isFavorite });
        displayPlaylist();
    }
    addSongToPlaylist();

