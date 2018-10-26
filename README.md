
# Installation

```
yarn
yarn start:dev
```

# ENV
You need to create a .env file with "KEY=YOUR_KEY" in order to authenticate the endpoints. When you make requests, you put this key in a query in URL.

# Example request

localhost:3000/image?key=YOUR_KEY_IN_ENV

form-data

key: file, value: YOUR_FILE.TYPE