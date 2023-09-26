# 🤖 ImageSearch discord bot (Discord.js)
Advanced discord ImageSearch bot.

## Table of Contents

- [About](#about)
- [Prerequisites](#📦-prerequisites)
- [Installation](#🚀-getting-started)
- [Commands](#commands)
- [License](#license)


## About
ImageSearch is an advanced Discord.js bot coded in javascript. It offer fast responses and advanced image searching via two sources, google and unsplash.
The bot is using slash commands (prefix commands will be added). We also got a verified ImageSearch bot on [top.gg](https://top.gg/bot/729570880983924766) which you can try out. It offers advanced webhook logging and highly customized presence. 

### 📦 Prerequisites

 - [Node.js](https://nodejs.org/en)
 - [Git](https://git-scm.com)

## 🚀 Getting Started

- Open the terminal and run the following commands

```
git clone https://github.com/theguyastro/ImageSearch-Bot-Discord.js-.git
cd ImageSearch-Bot-Discord.js
npm install
```

- Wait for all the dependencies to be installed
- Rename `.env.example` to `.env` and fill the values. How to get Unsplash ClientID? [Youtube](https://www.youtube.com/watch?v=gIh00TpSGQA)
- Optionally edit `config.js`. How to get WebhookID, WebhookTOKEN [Youtube](https://www.youtube.com/watch?v=VVceoFQtgUg)
- Type  `node index.js` to start the bot via node.js.


If you need help or you exeperienced errors feel free to join our Support Server [Here](https://discord.gg/G4YP6gcpjA).

## Managing Bot via PM2 
[ProjecManager2](https://pm2.keymetrics.io/)
After ensuring the bot is working you can manage your bot with pm2. 

```
npm install pm2
pm2 start index.js
```
You can close the terminal and bot will work in the bacground. You can read more about usage of pm2 [here][https://pm2.keymetrics.io/docs/usage/quick-start/]



## Commands

/google-search <query> <results>  Searches for an image on google.
/search <term>  Searches for an image on [Unsplash](https://unsplash.com)
/random  Search for a random picture on unsplash
/help  Replies with the help message
/ping  Replies with the bot latency and uptime (Node process).

### 🤝 ***Contributing*** 🤝


We welcome contributions from the community! If you'd like to contribute to this project, please follow these guidelines:

### Issues

1. Before opening a new issue, please check the existing issues to see if your problem or feature request has already been discussed.

2. If you're reporting a bug, please provide detailed steps to reproduce it, including any error messages or logs.

3. If you're submitting a feature request, describe the feature and its use cases clearly and concisely.

### Pull Requests

1. Fork the repository and create a new branch for your contribution.

2. Make your changes, following the coding style and conventions of the project.

3. Test your changes thoroughly to ensure they work as expected.

4. Provide clear and concise commit messages that describe the purpose of your changes.

5. Submit a pull request, explaining the changes you made and any relevant information.

### Coding Style

Follow the coding style and guidelines established in the project. If there are specific coding conventions or standards, adhere to them.

### Testing

If you're adding new features or making changes, please include tests to verify their functionality. Ensure that existing tests pass without issues.

### Documentation

Update the README.md file, to reflect any changes or new features. Clear and well-documented code is appreciated.

### Contributor role

By contributing to this project you will reiceve a contributor role in our Discord Server [Here](https://discord.gg/G4YP6gcpjA) and you will be added as an contributor. 

Thank you for contributing to our project! Your help makes this project better for everyone.




