# nexrender-action-webhook
node module for NEXRENDER project. It enable to make a callback after creation with NEXRENDER

# Postrender Action: webhook (callback)

Sends POST request to a choosen url to notify this server after uploading a rendering to its storage space

## Installation (coming next)

```
npm i -g nexrender-action-webhook
```

cd /usr/local/lib/node_modules/@nexrender/cli/node_modules
git clone https://github.com/dailyled/nexrender-action-webhook.git

## Usage

When creating your render job, provide this module as one of the `postrender` actions:

```js
// job.json
{
    "actions": {
        "postrender": [
            {
                "module": "nexrender-action-webhook",
                "url": "your-url.xyz",
				"path: "/your-path"
            }
        ]
    }
}
```

## Information

- `url` is the url name that your Job's called after end of rendering.


- `path` is the path you can give for complete the url you give.
