# Tests

Ce dossier contient les tests unitaires, d'intégration et end-to-end (E2E) du projet.

## 🚀 Lancer les tests en local

### Prérequis

1. **Node.js** (version 20+)
2. **Chrome** installé
3. **Services démarrés** (backend + frontend)

### Démarrage

```bash
# 1. Démarrer les services
cd backend && npm run dev &
cd frontend && npm start &

# 2. Vérifier que ça fonctionne
# Backend : http://localhost:3000
# Frontend : http://localhost:3001

# 3. Lancer les tests (depuis backend/)
npm run test:unit
npm run test:integration
npm run test:e2e
```

## 🔧 Configuration E2E

- **Email** : `admin@test.com` 
- **Password** : `password`


## 📁 Structure

```
tests/
├── selenium.test.js    
├── unit.test.js
└── integration.test.js
```