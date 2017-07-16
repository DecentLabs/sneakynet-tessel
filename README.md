# sneakynet


## Set up

```sh
git clone https://github.com/DecentLabs/sneakynet-tessel
npm install
```

## Run locally

```sh
npm start
```

## Run on tessel

install tessel command line interface:   
(0.1.6 breaks for me, so let's stick to 0.1.5)
```sh
npm install -g t2-cli@0.1.5
```
run code on tessel for testing:
```sh
npm run t2run
```
deploy code on tessel:
```sh
npm run t2deploy
```
