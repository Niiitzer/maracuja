# Test Maracuja

React avec react-router & composants fonctionnels

## Installation

Installer les pré-requis :

- yarn 1.21.1
- npm 6.4.1
- node 10.15.3
- reactjs 16.12.0

```bash
npm install # styled-component non trouvé en premier lieu avec yarn
```

## Usage

```bash
yarn start
```

## Remarques

Décomposition du temps 
- Installation des pré-requis : 10 min
- Documentation : 10 min
- Développement des fonctionnalités attendues : 30 min
- Style : 20 min

Les consignes était les suivantes : 

- Le composant doit pouvoir être masqué si nécessaire (exemple Frame 4)
- Ce composant devra être un “functional component” utilisé avec les Hooks React

Cependant, je n'ai pas eu a utiliser de Hooks pour mon composant, j'ai peut-être oublié quelque-chose. J'ai cru pendant un moment qu'il était nécessaire de reproduire un custom Router en utilisant des Hooks.


Le projet a été initialisé avec [create-react-app](https://github.com/facebook/create-react-app)

J'ai ensuite créé un Router avec des Links pour tester ces fonctionnalités. 
Après cela, j'ai commencé à créer le composant Tabbar, avec de simples Link écrit en dur pour finalement créer un tableau de "path" et dynamiser ces Link. Dans l'idée, nous pourrions donc utiliser N Links dans ce composant.
Il était ensuite question de masquer le composant sur la route "/" et la route "/cherry". Cela a été fait avec un rendu du composant conditionnel prenant en compte la route actuelle (Pour se faire, il a été nécessaire d'utiliser withRouter() sur le composant Tabbar pour passer les données du router dans les props du composant)
Pour finir, le design basique pour se rapprocher de l'exemple donné, avec une petite touche dynamique qui défini la couleur des boutons en fonction du nom de la route (Avec styled-component)



## License
[MIT](https://choosealicense.com/licenses/mit/)