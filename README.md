## Telegram bot messages about your events.

One of the most common messengers is Telegram, which provides ample opportunities for communication and information exchange. Creating a telegram bot that can send delayed messages means you don’t have to worry about forgetting an important date.

The layout of the interface for managing events opens inside the telegram application using Webview technology


**Stack**: 

*main libraries*: 
 - Telegraf,
 - node-cron,
 - sequelize

*technologies related to containerization and other*: 
 - Docker,
 - Nginx,
 - Ngrok,
 - postgresQL

*tools used when writing code*: JS,CSS,HTML


You will add the date and descriptions of the event. On the day of the specified date you will see a message in telegram:

![изображение](https://github.com/oleg-murmur/DateReminderTelegramBot/assets/115023995/e5161e27-6431-4b6c-b012-d397bc8db0fd)


### Run the project locally 



1. Add .env file to backend folder.

Check .env.example and create .env
   
windows:
     
```sh
echo. > .env
```
macOS:
     
```sh
touch .env
```

2. Add ngrok.yml file to backend folder.

      - Create ngrok acc and copy auth token
      - Check example.ngrok.yml and create ngrok.yml
      - Set `authtoken: ngrok_token` in ngrok.yml file
  

windows:

 ```sh
 echo. > ngrok.yml
 ```

macOS:

 ```sh
 touch ngrok.yml
 ```


3. Create telegram bot and copy token
4. Set `BOT_TOKEN=bot_token` in .env file
5. Run project:
      - Start command:
     ```sh
       docker-compose up -d
     ```
      - Stop server container:
     ```sh
       docker-compose stop node-server-bot-app
     ```
      - check localhost:4040 and copy ngrok url
     
      - set URL_NGROK_SERVER=url in .env file
      - Build server container:
     ```sh
       docker-compose build node-server-bot-app
     ```
      - Start:
     ```sh
       docker-compose up -d
     ```

Open your telegram-bot and press the button: `start`

You will see:

![изображение](https://github.com/oleg-murmur/DateReminderTelegramBot/assets/115023995/94e417e3-b621-48bb-9f06-973062aca8ad)


Press the view button: `Open event settings`

You will see:

![изображение](https://github.com/oleg-murmur/DateReminderTelegramBot/assets/115023995/51632ee4-efc2-4cf9-a84d-e2d75a65f955)


Add new event:

![изображение](https://github.com/oleg-murmur/DateReminderTelegramBot/assets/115023995/3537c8ff-763c-4983-9977-62db0a075a3b)
