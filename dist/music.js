const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "像鱼",
        artist: '王贰浪',
        url: '/music/xiangyu.mp3',
        cover: '/images/dayu.jpeg',
      }
    ]
});