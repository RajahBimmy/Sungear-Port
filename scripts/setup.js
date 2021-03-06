/*
 * Setup file used to designate which resources will need to be loaded
 * in order for Sungear Javascript edition to work properly.
 */

requirejs.config({
  baseUrl: 'scripts',
  shim: {
    // Designate which resources rely on other ones.
    bootstrap: {
      deps: ['jquery'],
      exports: 'Bootstrap'
    }
  },
  paths: {
    // First get the external libraries necessary to run the application.
    // If the CDN location fails, we can load a local version.
    jquery: [
      'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min',
      'lib/jquery.min'
    ],
    bootstrap: [
      'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
      'lib/bootstrap.min'
    ],
    p5: 'lib/p5',
    // With the external libraries out of the way, we can move onto grabbing real Sungear files.

    // From the gui folder
    sungear: 'gui/sungear',
      // From the sungear folder
    anchorDisplay: 'gui/sungear/anchorDisplay',
    vesselDisplay: 'gui/sungear/vesselDisplay',

    // From the Genes folder
    anchor: 'genes/anchor',
    genesGene: 'genes/gene',
    geneEvent: 'genes/geneEvent',
    term: 'genes/term',
    vessel: 'genes/vessel',
    geneList : 'genes/geneList',
    MultiSelectable : 'genes/multiSelectable',

    // From the GeneLights folder
    anchorList: 'geneLights/anchorList',
    geneLightsGene: 'geneLights/gene',
    geneLoc: 'geneLights/geneLoc',
    label: 'geneLights/label',
    // parseData: 'geneLights/parseData',


    //hyperGeo folder
    hyperGeo: 'hyperGeo/distribution/HypergeometricDistribution',
    AbstractIntegerDistribution: 'hyperGeo/distribution/AbstractIntegerDistribution',
    AbstractRealDistribution: 'hyperGeo/distribution/AbstractRealDistribution',
    Gamma: 'hyperGeo/distribution/Gamma',
    IntegerDistribution: 'hyperGeo/distribution/IntegerDistribution',
    RealDistribution: 'hyperGeo/distribution/RealDistribution',
    SaddlePointExpansion: 'hyperGeo/distribution/SaddlePointExpansion',
    AbstractWell: 'hyperGeo/random/AbstractWell',
    BitsStreamGenerator: 'hyperGeo/random/BitsStreamGenerator',
    RandomGenerator: 'hyperGeo/random/RandomGenerator',
    Well19937c: 'hyperGeo/random/Well19937c',
    FastMath: 'hyperGeo/util/FastMath',
    MathUtils: 'hyperGeo/util/MathUtils',

    //structs folder
    seedrandom: 'structs/seedrandom',
    TreeSet: 'structs/javascript/util/TreeSet',
    Iterator_: 'structs/javascript/util/Iterator_',
    Collection: 'structs/javascript/util/Collection',
    NoSuchElementException: 'structs/javascript/util/NoSuchElementException',
    OperationNotSupported: 'structs/javascript/util/OperationNotSupported',
    IndexOutOfBoundsException: 'structs/javascript/util/IndexOutOfBoundsException',
    ArrayList: 'structs/javascript/util/ArrayList',
    HashMap: 'structs/javascript/util/HashMap',
    Set: 'structs/javascript/util/Set',
    SortedSet : 'structs/javascript/util/SortedSet',

    Container : 'Container',

    visGene : 'app/visGene',
    dataSource : 'data/dataSource',
    attributes : 'data/attributes',

    CoolVessel: 'structs/Comp/CoolVessel',
    VesselACount: 'structs/Comp/VesselACount',
    VesselActSize: 'structs/Comp/VesselActSize',
    VesselSelSize: 'structs/Comp/VesselSelSize',

  }
});

// See 'test.js' for more info on how this function works.
// require(['test'], function(Y){
//   document.getElementById("geneQuery").addEventListener("click", Y.populateGenes);
//   document.getElementById("expand").addEventListener("click", Y.populateGoTerms);
//   document.getElementById("collapse").addEventListener("click", Y.removeGoTerms);
// });

// // Call the main.js file to load the canvas and get rolling.
// require(['main']);
require(['visGene'], function(VisGene){
    var i = 0;
    var warn = true;
    var plugin = [];
    var dataDir = null;

    var vis = new VisGene(new URL("file:./"), warn, "Sungear", null);
    vis.init();

    //call main here
    require(['main']);
});
