const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "春风十里",
        artist: '鹿先森',
        url: '/resources/music/chunfengshili.mp3',
        cover: '/resources/images/luxiansen.jpg',
      }
    ]
});