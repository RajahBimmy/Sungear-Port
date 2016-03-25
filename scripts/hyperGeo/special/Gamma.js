/*
Radhika Mattoo, November 2015 N.Y.

Porting Sungear from Java to Javascript,
Translated from Ilyas Mounaime's Java code

*/

var INV_GAMMA1P_M1_A0 = 0.611609510448141581788E-08;

/** The constant {@code A1} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_A1 = 0.624730830116465516210E-08;

/** The constant {@code B1} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_B1 = 0.203610414066806987300E+00;

/** The constant {@code B2} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_B2 = 0.266205348428949217746E-01;

/** The constant {@code B3} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_B3 = 0.493944979382446875238E-03;

/** The constant {@code B4} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_B4 = -0.851419432440314906588E-05;

/** The constant {@code B5} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_B5 = -0.643045481779353022248E-05;

/** The constant {@code B6} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_B6 = 0.992641840672773722196E-06;

/** The constant {@code B7} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_B7 = -0.607761895722825260739E-07;

/** The constant {@code B8} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_B8 = 0.195755836614639731882E-09;

/** The constant {@code P0} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_P0 = 0.6116095104481415817861E-08;

/** The constant {@code P1} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_P1 = 0.6871674113067198736152E-08;

/** The constant {@code P2} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_P2 = 0.6820161668496170657918E-09;

/** The constant {@code P3} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_P3 = 0.4686843322948848031080E-10;

/** The constant {@code P4} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_P4 = 0.1572833027710446286995E-11;

/** The constant {@code P5} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_P5 = -0.1249441572276366213222E-12;

/** The constant {@code P6} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_P6 = 0.4343529937408594255178E-14;

/** The constant {@code Q1} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_Q1 = 0.3056961078365221025009E+00;

/** The constant {@code Q2} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_Q2 = 0.5464213086042296536016E-01;

/** The constant {@code Q3} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_Q3 = 0.4956830093825887312020E-02;

/** The constant {@code Q4} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_Q4 = 0.2692369466186361192876E-03;

/** The constant {@code C} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C = -0.422784335098467139393487909917598E+00;

/** The constant {@code C0} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C0 = 0.577215664901532860606512090082402E+00;

/** The constant {@code C1} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C1 = -0.655878071520253881077019515145390E+00;

/** The constant {@code C2} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C2 = -0.420026350340952355290039348754298E-01;

/** The constant {@code C3} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C3 = 0.166538611382291489501700795102105E+00;

/** The constant {@code C4} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C4 = -0.421977345555443367482083012891874E-01;

/** The constant {@code C5} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C5 = -0.962197152787697356211492167234820E-02;

/** The constant {@code C6} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C6 = 0.721894324666309954239501034044657E-02;

/** The constant {@code C7} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C7 = -0.116516759185906511211397108401839E-02;

/** The constant {@code C8} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C8 = -0.215241674114950972815729963053648E-03;

/** The constant {@code C9} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C9 = 0.128050282388116186153198626328164E-03;

/** The constant {@code C10} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C10 = -0.201348547807882386556893914210218E-04;

/** The constant {@code C11} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C11 = -0.125049348214267065734535947383309E-05;

/** The constant {@code C12} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C12 = 0.113302723198169588237412962033074E-05;

/** The constant {@code C13} defined in {@code DGAM1}. */
var INV_GAMMA1P_M1_C13 = -0.205633841697760710345015413002057E-06;

var HALF_LOG_2_PI = 0.5 * Math.log((2.0 * Math.PI), null);

var DEFAULT_EPSILON = 10e-15;

var LANCZOS_G = 607.0 / 128.0;

var GAMMA = 0.577215664901532860606512090082;

var LANCZOS = [
        0.99999999999999709182,
        57.156235665862923517,
        -59.597960355475491248,
        14.136097974741747174,
        -0.49191381609762019978,
        0.33994649984811888699e-4,
        0.46523628927048575665e-4,
        -0.98374475304879564677e-4,
        0.15808870322491248884e-3,
        -0.21026444172410488319e-3,
        0.21743961811521264320e-3,
        -0.16431810653676389022e-3,
        0.84418223983852743293e-4,
        -0.26190838401581408670e-4,
        0.36899182659531622704e-5,
    ];

function invGamma1pm1(x) {
  console.log("Inside invGamma1pm1");
	if (x < -0.5) {
		console.log("Throw Number is Too Small exception from invGamma1pm1 function");
	}
	if (x > 1.5) {
		console.log("Throw Number is Too Large exception from invGamma1pm1 function");
	}

	var ret;
	var t = x <= 0.5 ? x : (x - 0.5) - 0.5;
	if (t < 0.0) {
		var a = INV_GAMMA1P_M1_A0 + t * INV_GAMMA1P_M1_A1;
		var b = INV_GAMMA1P_M1_B8;
		b = INV_GAMMA1P_M1_B7 + t * b;
		b = INV_GAMMA1P_M1_B6 + t * b;
		b = INV_GAMMA1P_M1_B5 + t * b;
		b = INV_GAMMA1P_M1_B4 + t * b;
		b = INV_GAMMA1P_M1_B3 + t * b;
		b = INV_GAMMA1P_M1_B2 + t * b;
		b = INV_GAMMA1P_M1_B1 + t * b;
		b = 1.0 + t * b;

		var c = INV_GAMMA1P_M1_C13 + t * (a / b);
		c = INV_GAMMA1P_M1_C12 + t * c;
		c = INV_GAMMA1P_M1_C11 + t * c;
		c = INV_GAMMA1P_M1_C10 + t * c;
		c = INV_GAMMA1P_M1_C9 + t * c;
		c = INV_GAMMA1P_M1_C8 + t * c;
		c = INV_GAMMA1P_M1_C7 + t * c;
		c = INV_GAMMA1P_M1_C6 + t * c;
		c = INV_GAMMA1P_M1_C5 + t * c;
		c = INV_GAMMA1P_M1_C4 + t * c;
		c = INV_GAMMA1P_M1_C3 + t * c;
		c = INV_GAMMA1P_M1_C2 + t * c;
		c = INV_GAMMA1P_M1_C1 + t * c;
		c = INV_GAMMA1P_M1_C + t * c;
		if (x > 0.5) {
			ret = t * c / x;
		} else {
			ret = x * ((c + 0.5) + 0.5);
		}
	} else {
		var p = INV_GAMMA1P_M1_P6;
		p = INV_GAMMA1P_M1_P5 + t * p;
		p = INV_GAMMA1P_M1_P4 + t * p;
		p = INV_GAMMA1P_M1_P3 + t * p;
		p = INV_GAMMA1P_M1_P2 + t * p;
		p = INV_GAMMA1P_M1_P1 + t * p;
		p = INV_GAMMA1P_M1_P0 + t * p;

		var q = INV_GAMMA1P_M1_Q4;
		q = INV_GAMMA1P_M1_Q3 + t * q;
		q = INV_GAMMA1P_M1_Q2 + t * q;
		q = INV_GAMMA1P_M1_Q1 + t * q;
		q = 1.0 + t * q;

		var c = INV_GAMMA1P_M1_C13 + (p / q) * t;
		c = INV_GAMMA1P_M1_C12 + t * c;
		c = INV_GAMMA1P_M1_C11 + t * c;
		c = INV_GAMMA1P_M1_C10 + t * c;
		c = INV_GAMMA1P_M1_C9 + t * c;
		c = INV_GAMMA1P_M1_C8 + t * c;
		c = INV_GAMMA1P_M1_C7 + t * c;
		c = INV_GAMMA1P_M1_C6 + t * c;
		c = INV_GAMMA1P_M1_C5 + t * c;
		c = INV_GAMMA1P_M1_C4 + t * c;
		c = INV_GAMMA1P_M1_C3 + t * c;
		c = INV_GAMMA1P_M1_C2 + t * c;
		c = INV_GAMMA1P_M1_C1 + t * c;
		c = INV_GAMMA1P_M1_C0 + t * c;

		if (x > 0.5) {
			ret = (t / x) * ((c - 0.5) - 0.5);
		} else {
			ret = x * c;
		}
	}
  console.log("Leaving invGamma1pm1");
	return ret;
}

function logGamma1p(x){
  console.log("Inside logGamma1p");
	if(x < -0.5){
		document.getElementById("output").innerHTML = "Throw Number is Too Small exception from logGamma1p function";
	}
	if(x > 1.5){
		document.getElementById("output").innerHTML = "Throw Number is Too Large exception from logGamma1p function";
	}
  console.log("Leaving logGamma1p");
	return -FastMathLog1p(invGamma1pm1(x));

}

function lanczos(x){
  console.log("Inside lanczos");
	var sum = 0.0;
	for(i = LANCZOS.length - 1; i > 0; i--){
		sum = sum + (LANCZOS[i] / (x + i));
	}
  console.log("Leaving lanczos");
	return sum + LANCZOS[0];
}

function LogGamma(x){
  console.log("Inside LogGamma");
	var ret;

	if (Number.Nan(x) || (x <= 0.0)) {
		ret = Number.Nan;
	} else if (x < 0.5) {
		return logGamma1p(x) - FastMathLog(x, null);
	} else if (x <= 2.5) {
		return logGamma1p((x - 0.5) - 0.5);
	} else if (x <= 8.0) {
		var n = FastMathFloor(x - 1.5);
		var prod = 1.0;
		for (i = 1; i <= n; i++) {
			prod *= x - i;
		}
		return logGamma1p(x - (n + 1)) + FastMathLog(prod, null);
	} else {
		var sum = lanczos(x);
		var tmp = x + LANCZOS_G + 0.5;
		ret = ((x + 0.5) * FastMathLog(tmp, null)) - tmp +
			HALF_LOG_2_PI + FastMathLog((sum / x), null);
	}
console.log("Leaving LogGamma");
	return ret;
}
