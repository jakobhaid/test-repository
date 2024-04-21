# Git Test Repository

Dies ist ein einfaches Testrepository, das verwendet werden kann, um Git-Funktionalitäten zu testen und zu üben. Das Repository enthält eine einfache HTML- und CSS-Datei, um grundlegende Git-Abläufe zu demonstrieren.

- `index.html`: Eine einfache HTML-Datei, die als Grundlage für das Testen von Git-Operationen dient.
- `styles.css`: Eine CSS-Datei, die die Formatierung für die HTML-Datei bereitstellt.

## Git-Befehle

### 1. git init
Der Befehl git init wird verwendet, um ein neues Git-Repository in einem Verzeichnis zu initialisieren. Wenn du ein neues Projekt startest und Git zur Versionskontrolle verwenden möchtest, führe diesen Befehl im Hauptverzeichnis deines Projekts aus.
```bash
git init
```

### 2. git clone
git clone wird verwendet, um ein vorhandenes Repository zu klonen. Du gibst die URL des zu klonenden Repositorys an, und Git erstellt eine Kopie des Repositorys in einem neuen Verzeichnis.
```bash
git clone <repository-url>
```

### 3. git add
Mit git add fügst du Dateien dem sogenannten "Index" hinzu, um sie für den nächsten Commit vorzubereiten. Der Index ist eine Zwischenstufe, in der du festlegst, welche Änderungen du in den nächsten Commit aufnehmen möchtest.
```bash
git add <file>
```

### 4. git commit
git commit speichert die Änderungen, die sich im Index befinden, in einem neuen Commit. Du fügst eine Commit-Nachricht hinzu, um die durchgeführten Änderungen zu beschreiben.
```bash
git commit -m "Commit-Nachricht"
```

### 5. git push
Nachdem du Commits in deinem lokalen Repository erstellt hast, kannst du diese mit git push in ein Remote-Repository hochladen. Dies ist besonders nützlich, wenn du Änderungen mit anderen Entwicklern teilen möchtest oder um eine Sicherungskopie deiner Arbeit in einem Remote-Repository zu erstellen.
```bash
git push <remote> <branch>
```

### 6. git pull
Wenn du an einem Projekt arbeitest, das von anderen Entwicklern aktualisiert wurde, kannst du mit git pull die Änderungen aus dem Remote-Repository abrufen und in deinen lokalen Branch integrieren.
```bash
git pull <remote> <branch>
```

### 7. git status
git status zeigt den aktuellen Zustand deines Arbeitsverzeichnisses und des Index an. Du erhältst Informationen darüber, welche Dateien geändert wurden, welche Dateien dem Index hinzugefügt wurden und welche Dateien noch nicht dem Index hinzugefügt wurden.
```bash
git status
```

### 8. git branch
Mit git branch kannst du alle vorhandenen Branches anzeigen oder einen neuen Branch erstellen. Branches sind nützlich, um verschiedene Entwicklungslinien zu verwalten oder um neue Funktionen isoliert zu entwickeln.
```bash
git branch
git branch <branch-name>
```

### 9. git checkout
git checkout wird verwendet, um zwischen Branches zu wechseln oder um Dateien aus einem bestimmten Commit wiederherzustellen. Dieser Befehl ermöglicht es dir, flexibel zwischen verschiedenen Entwicklungszweigen zu navigieren.
```bash
git checkout <branch-name>
git checkout <commit-hash> -- <file>
```

### 10. git merge
Wenn du Änderungen aus einem anderen Branch in deinen aktuellen Branch übernehmen möchtest, verwendest du git merge. Dieser Befehl führt die Änderungen aus einem anderen Branch in deinen aktuellen Branch zusammen.
```bash
git merge <branch>
```

### 11. git log
Mit git log kannst du eine chronologische Liste der Commits in deinem Repository anzeigen. Du erhältst Informationen über die Commit-Nachrichten, die Autoren und die Zeitpunkte der Commits.
```bash
git log
```

### 12. git reset
git reset wird verwendet, um den Zustand des Index auf einen bestimmten Zustand zurückzusetzen. Dies kann nützlich sein, um Dateien aus dem Index zu entfernen oder um den Index auf einen früheren Zustand zurückzusetzen.
```bash
git reset <file>
```

### 13. git rm
Um Dateien aus dem Arbeitsverzeichnis und dem Index zu entfernen, verwendest du git rm. Dieser Befehl markiert Dateien als gelöscht und entfernt sie aus dem Git-Tracking.
```bash
git rm <file>
```

### 14. git stash
Wenn du vorübergehend nicht committete Änderungen speichern möchtest, kannst du git stash verwenden. Dieser Befehl speichert die aktuellen Änderungen in einem speziellen Bereich, so dass du später zu ihnen zurückkehren kannst.
```bash
git stash
```

## Beispiele für Git-Befehle

- `git config`: ```git config --global user.name ""``` & ```git config --global user.email ""```
- `git status`: Überprüft den Status der Arbeitskopie und des Staging-Bereichs.
- `git add <dateiname>`: Fügt Änderungen im Arbeitsverzeichnis zum Staging-Bereich hinzu.
- `git commit -m "Commit-Nachricht"`: Speichert den aktuellen Stand des Staging-Bereichs im lokalen Repository.
- `git push origin main`: Pushes lokale Commits zum entfernten Repository (Ersetze `main` mit dem Namen deines Hauptbranches, falls dieser sich unterscheidet).
- `git pull origin main`: Zieht Änderungen vom entfernten Repository und fusioniert sie mit deinem lokalen Branch.

## Ressourcen
- [Versionsverwaltung mit Git](https://simpleclub.com/lessons/fachinformatikerin-versionsverwaltung-mit-git)
- [Make a README](https://www.makeareadme.com/)
- [ChatGPT](https://chat.openai.com/)

## Hinweis

Dieses Repository ist ausschließlich zu Test- und Übungszwecken gedacht. Es enthält keine Produktionscode und sollte nicht für reale Anwendungen verwendet werden.

Viel Spaß beim Experimentieren mit Git!
