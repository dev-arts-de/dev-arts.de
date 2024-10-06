import os
import datetime
import subprocess
import logging

# Fehlerprotokollierung einrichten
logging.basicConfig(filename='index_update.log', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

# Konfiguration
start_date = datetime.date(2019, 9, 2)  # Startdatum
md_file_path = 'index.md'  # Annahme: index.md befindet sich im Hauptverzeichnis des Projekts

# Berechnung der Anzahl der Tage seit dem Startdatum
today = datetime.date.today()
days_since_start = (today - start_date).days
logging.info(f'Berechnete Tage seit dem Startdatum: {days_since_start}')

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

logging.info('Die index.md wurde aktualisiert.')

# Git commit und push
subprocess.run(['git', 'add', '.'])
subprocess.run(['git', 'commit', '-m', 'feat: updated days'])
subprocess.run(['git', 'push'])
logging.info('Änderungen wurden in Git gepusht.')

# Vitepress Build
subprocess.run(['vitepress', 'build', 'dev-arts'])
logging.info('Vitepress Build abgeschlossen.')

