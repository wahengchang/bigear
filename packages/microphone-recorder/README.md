# microphone-recorder

>  It is a lib for sound recording on HTML, implemented by audioContext and webWorker

[npm-img]: https://img.shields.io/npm/v/@bigear/microphone-recorder.svg
[npm-url]: https://www.npmjs.com/package/@bigear/microphone-recorder

![nodei.co](https://nodei.co/npm/@bigear/bigear.png?downloads=true&downloadRank=true&stars=true)



## Install
```
$ npm install --save @bigear/microphone-recorder
```

## Usage

```js

import {Recorder} from "@bigear/microphone-recorder";

const recorder = new Recorder(input);
recorder && recorder.record();

// speak for a bit
recorder.stop();
recorder.exportWAV("audio/wav", function(blob) {
    // append the audio blob to html element
    const url = URL.createObjectURL(AudioBLOB);
    const au = document.querySelector("audio");
    au.controls = true;
    au.src = url;
    recorder.clear();
});

```

