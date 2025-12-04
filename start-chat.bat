@echo off
title Czat LAN (Node.js)
:: przejdź do folderu, w którym leży bat
cd /d "%~dp0"
:: sprawdź, czy node jest w PATH
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js nie znaleziony w PATH. Zainstaluj LTS-a ze strony https://nodejs.org
    pause
    exit /b 1
)
:: uruchom serwer
echo Starting server...
node server.js
:: jeśli serwer się zatrzyma, nie zamykaj okna od razu
echo Serwer zatrzymany.
pause