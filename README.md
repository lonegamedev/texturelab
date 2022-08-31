

<h1 align="center">
  TextureLab
</h1>

<p align="center">
  <img src="https://github.com/njbrown/texturelab/workflows/Build/badge.svg" />
  <img src="https://img.shields.io/badge/License-GPLv3-blue.svg" />
  <a href="https://discord.gg/975NdQPsSc">
    <img src="https://img.shields.io/discord/769312171266932786.svg?logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" alt="Discord invite" />
  </a><br/>
  Free, Cross-Platform, GPU-Accelerated Procedural Texture Generator.<br/>
  <a href="https://njbrown.itch.io/texturelab">DOWNLOAD AT ITCH.IO</a> | <a href="https://discord.gg/975NdQPsSc" >JOIN OUR DISCORD SERVER</a>
</p>

![Screenshot](https://user-images.githubusercontent.com/1708550/123368911-4ceb9f00-d542-11eb-87b5-b0fc3ea3cc3d.png)

# NOTE!
Texturelab will soon be converted to a qt project. All issues will be addressed after the conversion is complete.

## Building

Building is done with `yarn`. Install it [here](https://classic.yarnpkg.com/en/docs/install) if you havent already.

```
git clone https://github.com/njbrown/texturelab.git

cd texturelab

# if you want to pull down assets (textures and node icons)
git submodule update --init

yarn install
yarn electron:serve
```

## Feedback

Got ideas, suggestions or feedback? Reach out to me on [twitter](https://twitter.com/njbrown92)

## Built Using

- **[Vue.js](https://vuejs.org)**
- **[THREE.js](https://threejs.org/)**
- **[Golden Layout](https://golden-layout.com/)** via **[vue-golden-layout](https://github.com/emedware/vue-golden-layout)**
- **[Electron](https://electronjs.org)**

## Licence

[GPLv3](https://github.com/njbrown/texturelab/blob/master/LICENSE)
