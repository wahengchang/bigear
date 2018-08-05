# convertBufferToWav

>  It is a helper converting audio buffer in to wav format

![npm-img](https://img.shields.io/npm/v/@bigear/convertBufferToWav.svg)
![npm-url](https://www.npmjs.com/package/@bigear/convertBufferToWav)

![nodei.co](https://nodei.co/npm/@bigear/bigear.png?downloads=true&downloadRank=true&stars=true)



## Install
```
$ npm install --save @bigear/convertBufferToWav
```

## Usage

```js

import convertBufferToWav from "@bigear/convertBufferToWav";

const {buffer} = this.bufferSourceNode
// console.log(buffer.getChannelData(1))
// AudioBufferSourceNode ...
// buffer : AudioBuffer ...
// channelCount: 2
// channelCountMode: "max"
// channelInterpretation: "speakers"
// context: AudioContext ...
// currentTime: 10.518639455782314, sampleRate: 44100, ...
// detune: AudioParam ...
// loop: false

const dataview = convertBufferToWav(buffer.getChannelData(0))
const audioBlob = new Blob([dataview], {type: 'audio/wav'})

```

