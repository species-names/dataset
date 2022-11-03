# Species names dataset ![tests](https://github.com/species-names/dataset/actions/workflows/tests.yaml/badge.svg)


v0.0.10

A json format dataset for scientific and common species names.

Data is harvested mainly from https://species.wikimedia.org

Species names are stored in json format in one file per genera.

## Current State
Currently only birds amd mammals are done.  

## Todo
- Html in names: Chendytes lawi invisible html comment behind name
  ``<small>` tag in fr , `...Harelde boréale, Harelde de Miquelon<small>`
- Scientific names synonyms:
  Fulica caribaea synonym for Fulica americana todo scientific synonym, protonym. In zoology, the first name used for a taxon
  Neohierax insignis synonym for Polihierax insignis
  Nystalus torridus synonym for Nystalus striolatus torridus
  Picoides scientific synonym
  Tyto furcata scientific synonym

## Contribute
You can provide Pull Request to add or correct translations and species.  
Pls add some sort of reference.  

## Tests

    yarn install
    yarn test

## Publish
The dataset is published on npm:  
https://www.npmjs.com/package/species-names-dataset

    git tag 0.0.9
    git push --tags
    npm publish

### License

[Creative Commons Attribution-ShareAlike License](https://creativecommons.org/licenses/by-sa/4.0/)  
http://choosealicense.com/licenses/cc-by-sa-4.0/
