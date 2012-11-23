# Thanksgiving App #

This app shows a real time feed of [Instagram](http://instagram.com) images that have the `#thanksgiving` tag.

The feed is refreshewd in realtime using [sock.js](https://github.com/sockjs/sockjs-client) and consumes the Instagram Api.

See it live here: [http://thanksgiving.cloudfoundry.com/](http://thanksgiving.cloudfoundry.com/).

__NOTE__ This application is not affiliated with Instagram. This is just a demo.

# Deploying the App to Cloud Foundry #

```bash
git clone git://github.com/videlalvaro/thanksgiving.git
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

[@old_sound](https://twitter.com/old_sound).
