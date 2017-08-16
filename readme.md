# Species names dataset [![Build Status][travis-image]][travis-url]

v0.0.5

A json format dataset for scientific and common species names.

Data is harvested mainly from https://species.wikimedia.org

Species names are stored in json format in one file per genera.

## Current State
Currently only birds are done.  

## Todo
Chendytes lawi invisible html comment behind name
data/Vertebrata/Aves/Clangula.json <small> tag in fr , Harelde boréale, Harelde de Miquelon<small>
data/Vertebrata/Aves/Columba.json Kongotaube; Kongo-Waldtaube (new delimiter)
Fulica caribaea synonym for Fulica americana todo scientific synonym, protonym. In zoology, the first name used for a taxon
Neohierax insignis synonym for Polihierax insignis
Nystalus torridus synonym for Nystalus striolatus torridus
Picoides scientific synonym
Zlatar pijukavac - Златар пијукавац delimiter problems
Tyto furcata scientific synonym

## Contribute
You can provide Pull Request to add or correct translations and species.  
Pls add some sort of reference.  

## Tests

    yarn install
    yarn test

### License

[Creative Commons Attribution-ShareAlike License](https://creativecommons.org/licenses/by-sa/4.0/)  
http://choosealicense.com/licenses/cc-by-sa-4.0/

[travis-image]: https://travis-ci.org/species-names/dataset.svg?branch=master
[travis-url]: https://travis-ci.org/species-names/dataset
