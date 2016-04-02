/*
Radhika Mattoo, February 2016 N.Y.

Porting Sungear from Java to Javascript,
Translated from Ilyas Mounaime's Java code

*/

define(['seedrandom', 'IntegerDistribution', 'Well19937c'],
function(RandomGenerator, IntegerDistribution, Well19937c){

	var serialVersionUID = -1146319659338487221;
	var random;
	var rng = new RandomGenerator.RandomGenerator(); //RandomGenerator object

	//IMPLEMENT INHERITANCE

	AbstractIntegerDistribution.prototype = Object.create(IntegerDistribution.IntegerDistribution.prototype);
	AbstractIntegerDistribution.prototype.constructor = AbstractIntegerDistribution;


	//CONSTRUCTOR
	function AbstractIntegerDistribution(rng){
		this.random = rng;
	}

	AbstractIntegerDistribution.prototype.cumulativeProbability = function(x0, x1){ //throws NumberIsTooLargeException
		if(x1 < x0){
			// throw NumberIsTooLargeException(LocalizedFormats.LOWER_ENDPOINT_ABOVE_UPPER_ENDPOINT, x0, x1, true);
			console.log("Second argument to AbstractIntegerDistribution's cumulative probability is too large");
		}
		return this.cumulativeProbability(x1)-this.cumulativeProbability(x0);
	};

	AbstractIntegerDistribution.prototype.checkedCumulativeProbability = function(argument){ //throws MathInternalError
		var result = Number.Nan;
		result = this.cumulativeProbability(argument);
		if(result === Number.Nan){
			console.log("ERROR: result from AbstractRealDistribution's cumulative probability is NaN");

		}
		return result;
	};

	AbstractIntegerDistribution.prototype.solveInverseCumulativeProbability = function(p,  lower,  upper) {
		while((lower + 1) < upper){
			var xm = (lower+upper) / 2;
			if(xm < lower || xm > upper){

				xm = lower + (upper - lower)/2;
			}
			var pm = this.checkedCumulativeProbability(xm);
			if(pm >= p){
				upper = xm;
			}
			else{
				lower = xm;
			}
		}
		return upper;
	};


	AbstractIntegerDistribution.prototype.inverseCumulativeProbability = function(p){ //throws OutOfRangeException
		if(p < 0.0 || p > 1.0){
			throw new OutOfRangeException(p,0,1);
		}
		var lower = this.getSupportLowerBound(); //where is this function defined? WeibullDistribution.java
		if(p === 0.0){
			return lower;
		}
		if( lower == Number.MIN_VALUE){
			if(this.checkedCumulativeProbability(lower) >= p){
				return lower;
			}
			else{
				lower -= 1;
			}
		}

		var upper = this.getSupportUpperBound(); //where is this function defined? WeibullDistribution.java

		if(p == 1.0){
			return upper;
		}

		// use the one-sided Chebyshev inequality to narrow the bracket
	    var mu = getNumericalMean(); // defined in WeibullDistribution.java
	    var sigma = Math.sqrt(WeibullDistribution.getNumericalVariance()); //defined in WeibullDistribution.java

	    var chebsyshevApplies = !((mu === Number.POSITIVE_INFINITY || mu === Number.NEGATIVE_INFINITY) || isNaN(mu) || (sigma === Number.POSITIVE_INFINITY || sigma === Number.NEGATIVE_INFINITY)|| isNaN(sigma) || sigma === 0);
	    if(chebsyshevApplies){
	    	var k = Math.sqrt((1.0 - p) / p);
	    	var tmp = mu - l * sigma;

	    	if(tmp > lower){
	    		lower = Math.ceil(tmp) - 1;
	    	}
	    	k = 1.0/k;
	    	tmp = mu + k * sigma;
	    	if(tmp < upper){
	    		upper = Math.ceil(temp) - 1;
	    	}
	    }
	    return solveInverseCumulativeProbability(p, lower, upper);
	};

	AbstractIntegerDistribution.prototype.sample = function(sampleSize){
		if(arguments.length === 0){
			return inverseCumulativeProbability(random.nextDouble);
		}
		if(sampleSize <= 0){
			// throw new NotStrictlyPositiveException(LocalizedFormats.NUMBER_OF_SAMPLES, sampleSize);
			console.log("Throw Not Strictly Positive Exception (sampleSize <= 0) in AbstractIntegerDistribution");
		}
		var out = new Array(sampleSize);
		for(var i = 0; i < sampleSize; i++){
			out[i] = sample();
		}
		return out;
	};

	AbstractIntegerDistribution.prototype.reseedRandomGenerator = function(seed){
		this.random.setSeed(seed);
		this.random.reSeed(seed);

	};
	return AbstractIntegerDistribution;
// module.exports = AbstractIntegerDistribution;
});
