# Ruelles

Un site pour référencer les ruelles remarquables de la ville de Montréal : les ruelles vertes mais pas uniquement.

# Pour développer sur ce site ?

Il est nécessaire d'installer [gatsbyjs](https://www.gatsbyjs.org/) au préalable:

```
yarn install
yarn develop
```

# Les sources ?

Le fichier `districts.json` provient des [données ouvertes de Montréal](https://www.donneesquebec.ca/recherche/fr/dataset/vmtl-polygones-arrondissements).

J'ai utilisé les sources génériques ci-dessous

* [Faites comme chez vous](https://faitescommechezvous.org/) pour la liste des ruelles vertes de l'arrondissement Rosemont-Petite Patrie
* [Wikipedia: Ruelle verte](https://fr.wikipedia.org/wiki/Ruelle_verte) pour la liste partielle des ruelles vertes de tout Montréal, avec des dates
* [Ecoquartier Ruelles Vertes](https://www.ruellesvertesdemontreal.ca/) contient une carte google map générale des ruelles avec un certain détail.

Puis ensuite j'ai trouvé des documents précis dans certains arrondissements:

## Rosemont par année:
- [avant 2011](http://ville.montreal.qc.ca/pls/portal/docs/PAGE/ARROND_RPP_FR/MEDIA/DOCUMENTS/DOCUMENT7.PDF) pas de sources trouvées, on s'appuie sur les documents pdf de 2017 à 2019. 7 ruelles
- **2011** pas de sources trouvées, on s'appuie sur les documents pdf de 2017 à 2019. 12 nouvelles ruelles.
- [2012](https://ville.montreal.qc.ca/pls/portal/docs/PAGE/ARROND_RPP_FR/MEDIA/DOCUMENTS/Automne_2012.pdf) 10 nouvelles ruelles
- **2013** pas de sources trouvées, on s'appuie sur les documents pdf de 2017 à 2019. 20 nouvelles ruelles.
- **2014** pas de sources trouvées, on s'appuie sur les documents pdf de 2017 à 2019. 16 nouvelles ruelles.
- [2015](http://ville.montreal.qc.ca/portal/page?_pageid=7357,77139652&_dad=portal&_schema=PORTAL&id=24592) 15 nouvelles ruelles + 'des Écores - Louis-Hébert - Rosemont - des Carrières' (pas dans l'annonce mais annoncé comme 2015 dans les pdf des années 2017 à 2019)
- [2016](http://ville.montreal.qc.ca/portal/page?_pageid=7357,77137603&_dad=portal&_schema=PORTAL&id=14216&ret=/pls/portal/url/page/arrond_rpp_fr/rep_annonces/rep_actualites/coll_actualites) 15 nouvelles ruelles, lien vers une carte.
- [2017](http://ville.montreal.qc.ca/portal/page?_pageid=7357,77139652&_dad=portal&_schema=PORTAL&id=28106) 10 nouvelles ruelles. carte [ici](http://ville.montreal.qc.ca/pls/portal/docs/PAGE/ARROND_RPP_FR/MEDIA/DOCUMENTS/CARTE%20RVS%20RPP%20(COLOR%C9).PDF)
- [2018](http://ville.montreal.qc.ca/portal/page?_pageid=7357,77137603&_dad=portal&_schema=PORTAL&id=19145&ret=/pls/portal/url/page/arrond_rpp_fr/rep_annonces/rep_actualites/coll_actualites) 10 nouvelles ruelles, lien vers une carte par année.
- [2019](http://ville.montreal.qc.ca/portal/page?_pageid=7357,77137603&_dad=portal&_schema=PORTAL&id=21835&ret=/pls/portal/url/page/arrond_rpp_fr/rep_annonces/rep_actualites/coll_actualites) 5 nouvelles ruelles, lien vers une carte par année.
- [2020](https://montreal.ca/actualites/cinq-nouvelles-ruelles-vertes-dans-le-quartier), 5 nouvelles ruelles, lien vers une carte sans année.


## TODO
- proposer des itinéraires https://fairemtl.ca/fr/parcours-ruelles-vertes-actives/content/deux-rallyes-decouvertes-dans-le-sud-ouest
- améliorer la fiche ruelle
- ajouter un système de notation des ruelles
- mettre en avant certaines ruelles basé sur la notation
- mettre en avant les ruelles sans photos
- ameliorer la carte

## Photographies
- Personnelles si pas d'indication
- de FB Rosemont Petite Patrie (Albums Ruelles vertes - 84 items, Ruelles de 2012, Ruelles de 2011) sur autorisation
