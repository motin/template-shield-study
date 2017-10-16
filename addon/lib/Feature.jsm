"use strict";

/* global studyUtils */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "(EXPORTED_SYMBOLS|Feature)" }]*/

const { utils: Cu } = Components;
Cu.import("resource://gre/modules/Console.jsm");

const EXPORTED_SYMBOLS = this.EXPORTED_SYMBOLS = ["Feature"];

class Feature {
  constructor(variation) {
    this.variation = variation;
  }

  start() {
    studyUtils.telemetry({ event: "exampleEvent", variation: this.variation });
  }
}
