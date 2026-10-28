@echo off
setlocal
cd /d C:\inetpub\wwwroot\cambridge.seedlingschools.com
set LOG=C:\inetpub\logs\cambridge-nextjs.log
:restart
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3002 " ^| findstr "LISTENING"') do taskkill /F /PID %%a >> "%LOG%" 2>&1
echo [%date% %time%] Starting Next.js on port 3002 >> "%LOG%"
"C:\Program Files\nodejs\node.exe" node_modules\next\dist\bin\next start -p 3002 >> "%LOG%" 2>&1
set RESULT=%ERRORLEVEL%
echo [%date% %time%] Next.js exited with code %RESULT% >> "%LOG%"
timeout /t 3 /nobreak >NUL
goto restart
