module.exports = {
  Admins: ["422027940591828993","657612005406146565","731721433515950080"], //Admins of the bot
  DefaultPrefix: "$", //Default prefix, Server Admins can change the prefix
  Port: 8080, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/a9SHDpD", //Support Server Link
  Token: process.env.Token, //Discord Bot Token
  ClientID: "707130575244492831", //Discord Client ID
  ClientSecret: "U3RAN3xqRe-mdpFdyyzOSnAJs5QFoz8e", 
  Scopes: ["identify", "guilds"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false,//If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: "https://obotlava.herokuapp.com", //Website where it was hosted at includes http or https

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: "Main",
    host: "lavalink.sudhanplayz.live",
    port: 1234,
    pass: "CodingWithSudhan",
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "", //Spotify Client ID
    ClientSecret: "", //Spotify Client Secret
  },
};
