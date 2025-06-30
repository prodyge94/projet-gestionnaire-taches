# Projet Collaboratif : Gestionnaire de Tâches Web

## Objectif du Projet
Développer une application web de gestion de tâches collaborative en appliquant tous les concepts vus en cours : VCS, Git/GitHub, workflows, tests automatisés, et CI/CD.

## Description du Projet
Vous travaillerez en équipes de 3 personnes pour créer une application de gestion de tâches avec les fonctionnalités suivantes :
- Création, modification et suppression de tâches
- Attribution de tâches à des utilisateurs
- Système de priorités et de statuts
- Interface utilisateur responsive
- API REST pour les opérations CRUD

## Structure du Projet

### Configuration et Organisation
**Concepts appliqués : Git/GitHub, Workflows**

#### Tâches à réaliser :
1. **Création du repository GitHub**
   - Un membre crée le repo principal
   - Configuration des permissions et/ou des branches
   - Mise en place du README.md avec la documentation du projet

2. **Configuration du workflow**
   - Choix du workflow Git
   - Configuration des règles de protection de branche(s)

3. **Organisation des équipes**
   - Attribution des rôles : Tests, DevOps, etc...
   - Création des issues pour chaque fonctionnalité/tâche/étape

### Développement Collaboratif
**Concepts appliqués : Commandes Git, Workflows, Collaboration**

#### Structure technique :
```
projet-gestionnaire-taches/
├── frontend/         
├── backend/           
├── tests/            # Tests automatisés
├── README            # Analyse, interprétations, résultats
└── .github/          # Workflows GitHub Actions
```

#### Fonctionnalités à développer :
1. **Tests**
   - Tests unitaires
   - Tests d'intégration
   - Tests E2E avec Selenium

2. **DevOps**
   - Configuration CI/CD
   - Déploiement automatisé
   - Monitoring

### Tests et Qualité

#### Implémentation des tests :
1. **Tests E2E** avec Selenium
2. **Analyse de code** avec ESLint
3. **Métriques de couverture de code**

**Bonus(non obligatoire)**
```
- Tests unitaires avec Jest (chaque composant)
- Tests d'intégration (API endpoints)
```
### CI/CD et Déploiement

#### Pipeline CI/CD :
1. **Intégration Continue**
   - Tests automatiques sur chaque PR
   - Analyse de code automatique
   - Vérification de la couverture de code

2. **Déploiement Continu**

## Compétences Évaluées

### Git et Collaboration
- Utilisation correcte des commandes Git
- Respect du workflow choisi
- Qualité des commits et des PR
- Résolution de conflits(s'il y'en a)

### Tests et Qualité
- Couverture de tests
- Types de tests implémentés
- Métriques de qualité de code

### CI/CD et DevOps
- Configuration du pipeline
- Automatisation des déploiements
- Monitoring et documentation

### Innovation
  - Fonctionnalités bonus
  - Amélirations UX/UI
  
```
P.S: On n'attend pas de vous que vous developpiez ces innovations en tant que tel(vu le temps imparti restreint).
Mais vous pouvez les présenter dans votre documentation
```
### Évaluation Individuelle
- Contribution au code (via GitHub)
- Participation aux PR reviews

## Comment lancer l'application

### Terminal Backend

```
cd backend
npm install
npm run dev
```

### Terminal Frontend

```
cd frontend  
npm install
npm start
```

### Accès application web 

```
username : admin@test.com 
password : password
```