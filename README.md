# Stack Overnotes
An app for studying by shuffling through editable flashcard decks with additional collated resources available. Load a deck stored in the database. Feel free to click on the body of the card to reveal definition. Cycle through the deck by clicking "next" or remove the card from current shuffle by clicking "done." You can upload your own deck via CSV file, edit the deck, and also search StackOverflow for related articles.

## Demo

![demo](../assets/demo.gif?raw=true)

## Photos
Main view with related StackOverflow articles.

![main](../assets/main.png?raw=true)

Edit a deck

![single](../assets/edit.png?raw=true)

Upload a deck via CSV file

![csv](../assets/csv.png?raw=true)

## Getting Started

Navigate to preferred local directory and clone the github repo:

```
$ git clone https://github.com/helloallentsai/Stack-Overnotes.git
```

To seed database, transpile React components, and start server, navigate inside the directory and run the following commands:

```
$ npm install
$ npm run db:seed
$ npm run build
$ npm start
```

## Built With

 - ReactJS
 - NodeJS
 - MongoDB
 - Express

## Related Projects

  - https://github.com/hrr42-fec5/service-tom
  - https://github.com/hrr42-fec5/service-camryn