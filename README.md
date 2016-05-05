# cybercamp

`cybercamp` is a webapp to be used to grade the challenges given in the 2016 CyberCamp Challenge.

### Deploy
> The deployment process uses [Meteor Up X](https://github.com/arunoda/meteor-up/tree/mupx) to bundle and deploy this Meteor app

#### Requirements - Local Machine
* Node (version < 6.0)
* The [meteor](https://www.meteor.com/install) command, installed globally
* [Meteor Up X](https://github.com/arunoda/meteor-up/tree/mupx), installed globally
* Password-less SSH access to your remote server:

If you don't have an ssh key already generated (check by running `ls ~/.ssh/`), generate one:

`ssh-keygen -t rsa -b 2048 -v`

Copy the ssh key to the remote server. Note that `keyName` should probably be set to `id_rsa.pub`, unless you changed the default name of the key when you ran `ssh-keygen` above.

 `ssh-copy-id keyName user@remote-server`

#### Requirements - Remote Server
* [Node](https://github.com/creationix/nvm) (version < 6.0)
* [NOPASSWD in the sudoers file](https://github.com/arunoda/meteor-up/tree/mupx#ssh-based-authentication-with-sudo)

#### Deploy process
* [Create a Meteor Up Project](https://github.com/arunoda/meteor-up/tree/mupx#creating-a-meteor-up-project)
* [Setup](https://github.com/arunoda/meteor-up/tree/mupx#setting-up-a-server)
* [Deploy](https://github.com/arunoda/meteor-up/tree/mupx#deploying-an-app)
