import os
import datetime
import subprocess
from ftplib import FTP, error_perm
import logging

# Konfiguration
start_date = datetime.date(2019, 9, 2)  # Startdatum
md_file_path = 'index.md'  # Annahme: index.md befindet sich im Hauptverzeichnis des Projekts
html_file_path = '.vitepress/dist/index.html'  # Pfad zur generierten index.html
ftp_ip = '213.130.145.40'
ftp_username = 'u687124589.dev-arts.de'
ftp_password = os.environ.get('FTP_PASSWORD')  # Holen des Passworts aus der Umgebungsvariable
ftp_upload_path = 'index.html'  # Zielort auf dem FTP-Server

# Fehlerprotokollierung einrichten
logging.basicConfig(filename='ftp_upload.log', level=logging.DEBUG)

# Berechnung der Anzahl der Tage seit dem Startdatum
today = datetime.date.today()
days_since_start = (today - start_date).days

# Update der index.md
with open(md_file_path, 'r+') as file:
    content = file.readlines()
    
    # Suche nach der Zeile, die aktualisiert werden muss
    for i, line in enumerate(content):
        if "Ich bin ein leidenschaftlicher Full-Stack Software Entwickler" in line:
            # Ersetze den Platzhalter mit der tatsächlichen Anzahl der Tage
            content[i] = f'Ich bin ein leidenschaftlicher Full-Stack Software Entwickler mit über **{days_since_start} Tagen** Erfahrung in der Entwicklung von modernen Webanwendungen sowie Backendlösungen. Ich liebe es, kreative Lösungen für komplexe Probleme zu finden und dabei die Benutzererfahrung zu verbessern.\n'
            break
    
    file.seek(0)
    file.writelines(content)
    file.truncate()

# Git commit und push
subprocess.run(['git', 'add', md_file_path])
subprocess.run(['git', 'commit', '-m', 'feat: updated days'])
subprocess.run(['git', 'push'])

# Vitepress Build
subprocess.run(['vitepress', 'build', 'dev-arts'])

# FTP Upload
try:
    ftp = FTP(ftp_ip)
    ftp.login(ftp_username, ftp_password)

    # Hochladen der index.html
    with open(html_file_path, 'rb') as file:
        ftp.storbinary(f'STOR {ftp_upload_path}', file)
    
    logging.info('Upload erfolgreich: %s', ftp_upload_path)

except error_perm as e:
    logging.error('FTP-Berechtigungsfehler: %s', e)
except Exception as e:
    logging.error('Fehler beim Hochladen der Datei: %s', e)
finally:
    ftp.quit()
