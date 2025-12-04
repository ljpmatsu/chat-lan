// server.js  – serwer WWW + WebSocket + dzienny plik logów + wyświetlanie lokalnego IP
const fs   = require('fs');
const path = require('path');
const express = require('express');
const WebSocket = require('ws');
const { networkInterfaces } = require('os');   // <--- potrzebne do IP

/* --------------- nazwa pliku zmienia się co dzień --------------- */
function logName() {
  const d = new Date();
  return `chat-${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}.log`;
}

/* --------------- pobierz lokalne IP (prywatne) --------------- */
function getLocalIP() {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) return net.address;
    }
  }
  return '127.0.0.1'; // fallback
}
const LOCAL_IP = getLocalIP();

/* --------------- http + websocket --------------- */
const app  = express();
const server = require('http').createServer(app);
const wss  = new WebSocket.Server({ server });

// serwuj pliki statyczne (index.html itd.)
app.use(express.static(__dirname));

/* --------------- odczyt historii z bieżącego dnia --------------- */
let history = [];
const todaysFile = logName();
if (fs.existsSync(todaysFile)) {
  history = fs.readFileSync(todaysFile, 'utf8')
              .split('\n')
              .filter(l => l.trim() !== '')
              .map(l => JSON.parse(l));
}

/* --------------- nowy klient --------------- */
wss.on('connection', ws => {
  // wyślij mu historię z dzisiaj
  ws.send(JSON.stringify({ type:'history', data:history }));

  // gdy przyjdzie nowa wiadomość
  ws.on('message', raw => {
    const msg = JSON.parse(raw);
    msg.time = Date.now();
    history.push(msg);

    // zapis do dzisiejszego pliku
    fs.appendFileSync(logName(), JSON.stringify(msg)+'\n');

    // broadcast do wszystkich
    wss.clients.forEach(c => {
      if (c.readyState === WebSocket.OPEN)
        c.send(JSON.stringify(msg));
    });
  });
});

/* --------------- start serwera --------------- */
const HTTP_PORT = process.env.PORT || 8080;
server.listen(HTTP_PORT, () => {
  console.log(`Serwer czatu działa na http://${LOCAL_IP}:${HTTP_PORT}`);
  console.log(`Dzisiejszy plik logów: ${logName()}`);
});