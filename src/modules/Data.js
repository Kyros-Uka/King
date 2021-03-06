export default {
  version: 'FH9M2', // This version converts from single game to multi game
  dev: {
    on: window.location.hostname === 'localhost',
    server: 'localhost',
    port: '7777'
  },
  server: 'ws.kingz.io',
  page: 'init',
  ad: '', // '/static/chitika.html', // empty will load the ad after the first game
  adURL: '', // '/static/chitika.html',
  adMobileURL: '', // '/static/chitika-mobile.html',
  adMobileHeight: 550,
  gamelist: [],
  user: {
    id: 0,
    name: '',
    lastlogin: 0,
    numplays: 0,
    points: 0,
    rank: 0,
    microversion: 'v2100',
    facebook: typeof window.localStorage.cookie_fb !== 'undefined'
  },
  leaderboard: [],
  waiting: {
    players: 9000,
    force: 0,
    forcestate: false,
    timeout: Date.now(),
    inqueue: false,
    maxplayer: 100,
    minplayers: 1,
    tips: ['Click & Drag to move units faster', 'Double Click to split your units', 'Right Click & Drag to move the camera', 'And protect your king :)']
  },
  game: {
    playing: false,
    dead: false,
    chat: {asdf: 'qwerty', msg: [], history: []},
    leaderboard: [],
    deadscreen: {
      spectate: false,
      name: 'name',
      killer: 'killer',
      playtime: 0,
      place: 0,
      kills: 0
    },
    scroll: {
      x: 0,
      y: 0
    }
  },
  god: {
    show: false,
    port: 7770,
    nameport: 'god',
    msg: []
  },
  state: {serverSocket: '', gameSocket: '', godSocket: ''},
  popup: {
    show: function (title, message) {
      this.title = title
      this.msg = message
      this.active = true
    },
    title: 'Message Title',
    msg: 'Mesage Body.',
    active: false
  }
}
