# Pastelowy czat LAN

Prosty, lokalny czat w czasie rzeczywistym – bez zewnętrznych serwerów, działa w sieci LAN/Wi-Fi.

---

## 🚀 Uruchomienie (Windows)

1. Zainstaluj [Node.js LTS](https://nodejs.org)
2. Skopiuj wszystkie pliki do folderu, np. `C:\chat-lan`
3. Dwukrotnie kliknij `start-chat.bat`
4. W przeglądarce wpisz adres, który pojawi się w czarnym oknie (np. `http://192.168.1.15:8080`)

---

## 📄 Co potrafi?

- czat w czasie rzeczywistym (WebSocket)  
- historia rozmów zapisywana osobno dla każdego dnia  
- wybór własnego koloru dymka + kolor przycisku „Wyślij”  
- dźwięk i czerwona kropka favicon przy nowej wiadomości (gdy karta nieaktywna)  
- wyciszenie dźwięku  
- automatyczne wykrycie lokalnego IP – wszyscy w sieci widzą ten sam adres

---

## 📁 Struktura plików

- `server.js` – serwer WebSocket + dzienny log  
- `index.html` – pastelowy interfejs użytkownika  
- `start-chat.bat` – jedno-kliknięcie i serwer działa  
- `chat-RRRR-MM-DD.log` – tekstowe logi danego dnia (automatycznie)

---

## 📦 Zależności

Instalujemy tylko raz:
```bash
npm install express ws

---

## 📜 Licencja
MIT – rób co chcesz :)

---
---

Pastel LAN Chat
Simple, real-time chat for local networks – no external servers required.

---

## 🚀 Quick start (Windows)

1. Install Node.js LTS
2. Copy all files to any folder, e.g. C:\chat-lan
3. Double-click start-chat.bat
4. Open the address shown in the black window (e.g. http://192.168.1.15:8080)

---

## 📄 Features
- real-time WebSocket chat
- daily log files (plain text)
- pick your own bubble colour + send button colour
- sound & red favicon notification when tab is inactive
- mute button
- auto-detects local IP – everyone on LAN sees the same address

---

## 📁 File structure

- `server.js` – server WebSocket + daily log  
- `index.html` – pastel user interface  
- `start-chat.bat` – one-click server run  
- `chat-RRRR-MM-DD.log` – text log from the day (automatic)

---

📦 Dependencies

One-time install:
```bash
npm install express ws

---

📜 Licence
MIT – do whatever you want :)