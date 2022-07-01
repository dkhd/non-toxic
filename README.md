# Toxicity Space, A Toxic Comment Detection API

The comment section has been an interesting part of many applications or websites since long ago. It enables the users to express their ideas freely. However, without moderation, the comment section will become unhealthy and will turn out to be a war place.

But what if we don't have a human moderator?

Toxicity Space provides you an API that you can use to detect toxic comment in your application.

## Using The API in Your App

If you are using Javascript for your application, you can use this code snippet to send the request to the API:

```js
const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "hey, nice shirt you are wearing today" }),
    };

fetch('https://toxicity.space/api', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });
```

But if you want to use `curl` you can use this:

```bash
curl -X POST https://toxicity.space/api
   -H 'Content-Type: application/json'
   -d '{"text":"hey, nice shirt you are wearing today"}'
```

---
This project is built with ♥️ by [Diky Hadna](https://hadna.space) to participate in the [Linode x Hashnode 2022 Hackathon](https://townhall.hashnode.com/build-with-linode-hackathon-june-2022).

Supported by [Linode](https://www.linode.com) & [Hashnode](https://hashnode.com)
