# Thanksgiving App #

This app shows a real time feed of Instagram images for that have the `#thanksgiving` tag.

The feed is refreshewd in realtime using [https://github.com/sockjs/sockjs-client](sock.js) and consumers the Instagram Api.

See it live here: [http://thanksgiving.cloudfoundry.com/](http://thanksgiving.cloudfoundry.com/).

__NOTE__ This application is not affiliated with Instagram. This is just a demo.

# Deploying the App to Cloud Foundry #

```bash
git clone
cd thanksgiving
vmc push --runtime node08
```

Then you will need to set the following env variables for your app:

```bash
vmc env-add thanksgiving CLIENT_ID=$CLIENT_ID
vmc env-add thanksgiving CLIENT_SECRET=$CLIENT_SECRET
```

Use the values from your Instagram developer account.

# License #

See the LICENSE file.

# Credits #

[https://twitter.com/old_sound](@old_sound).
