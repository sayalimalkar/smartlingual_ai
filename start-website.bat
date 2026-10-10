@echo off
title CEP Language Learning Platform
echo ========================================================
echo   Starting CEP Language Learning Platform...
echo ========================================================
echo.
echo The website is opening in your browser!
echo Keep this command prompt window open while using or sharing the website.
echo.
start http://localhost:5173/
npm run dev -- --host
pause
