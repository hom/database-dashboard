# Database Dashboard

## Start

1. Add `dashboard.config.json` file
```bash
cat config.example.json > dashboard.config.json
```

2. Input `parse-server` app instance and user info
```json
{
  "apps": [
    {
      "serverURL": "https://dashboard.example.com/parse",
      "appId": "APPID",
      "masterKey": "MASTER",
      "appName": "Example App"
    }
  ],
  "users": [
    {
      "user":"example",
      "pass":"example"
    }
  ]
}
```

3. Start server with `pm2`
```bash
pm2 start index.js -n example-server-dashboard
```
