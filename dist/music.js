const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "春风十里",
        artist: '鹿先森',
        url: 'http://www.ytmp3.cn/down/39154.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/17.jpg',
      }
    ]
});