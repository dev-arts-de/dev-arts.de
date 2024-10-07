import os
import logging
from ftplib import FTP, error_perm

# Fehlerprotokollierung einrichten
logging.basicConfig(filename='ftp_upload.log', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

def upload_to_ftp(html_file_path, ftp_ip, ftp_username, ftp_password, ftp_upload_path):
    try:
        ftp = FTP(ftp_ip)
        ftp.login(ftp_username, ftp_password)
        logging.info('FTP-Anmeldung erfolgreich.')

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

if __name__ == "__main__":
    # Konfiguration
    html_file_path = '.vitepress/dist/index.html'  # Pfad zur generierten index.html
    ftp_ip = '213.130.145.40'
    ftp_username = 'u687124589.dev-arts.de'
    ftp_password = os.environ.get('FTP_PASSWORD')  # Holen des Passworts aus der Umgebungsvariable
    ftp_upload_path = 'index.html'  # Zielort auf dem FTP-Server

    # Überprüfen, ob das Passwort gesetzt wurde
    if ftp_password is None:
        logging.error("Das FTP-Passwort wurde nicht gesetzt. Bitte überprüfen Sie die Umgebungsvariable 'FTP_PASSWORD'.")
        raise ValueError("FTP_PASSWORD ist nicht gesetzt.")

    upload_to_ftp(html_file_path, ftp_ip, ftp_username, ftp_password, ftp_upload_path)
