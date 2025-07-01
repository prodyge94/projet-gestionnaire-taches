# Gestionnaire de Tâches Web

## Description

Application web de gestion de tâches développée en équipe dans le cadre d'un projet collaboratif.

**Fonctionnalités :**
🆕 Création, modification et suppression de tâches
👥 Attribution de tâches à des utilisateurs
🏷️ Système de priorités et de statuts
📱 Interface utilisateur responsive
🔌 API REST pour les opérations CRUD
🔐 Système d'authentification

## Structure du Projet

```
projet-gestionnaire-taches/
├── frontend/         # Application web
├── backend/          # API et serveur
├── tests/           # Tests automatisés
└── .github/         # CI/CD
```

## Installation

### Prérequis
- Node.js
- npm

### Lancement

**Backend :**
```bash
cd backend
npm install
npm run dev
```

**Frontend :**
```bash
cd frontend
npm install
npm start
```

## Accès à l'Application

```
URL : http://localhost:3000
Username : admin@test.com
Password : password
```

## Workflow de Développement

### Branches
- `main` : Version de production
- `develop` : Version de développement
- `feature/*` : Nouvelles fonctionnalités
- `hotfix/*` : Corrections urgentes

### Processus
1. Créer une branche depuis `develop`
2. Développer la fonctionnalité
3. Créer une Pull Request vers `develop`
4. Review et merge
5. merge `develop` dans `main`

## Technologies

- **Frontend** : React.js
- **Backend** : Node.js, Express
- **Tests** : Jest, Selenium
- **CI/CD** : GitHub Actions