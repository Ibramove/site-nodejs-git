# 1) Créer le dossier
mkdir C:\openshift\site-nodejs-git
cd C:\openshift\site-nodejs-git

# 2) Initialiser Git
git init

# 3) Créer les fichiers server.js / package.json (avec le contenu ci-dessus)

# 4) Commit & push vers GitHub
git add .
git commit -m "Ajout Node.js app (server.js + package.json)"

git branch -M main
git remote add origin https://github.com/Ibramove/site-nodejs-git.git
git push -u origin main


<img width="3182" height="846" alt="image" src="https://github.com/user-attachments/assets/462c8e21-8be8-4748-b840-d0ee89f690ed" />
