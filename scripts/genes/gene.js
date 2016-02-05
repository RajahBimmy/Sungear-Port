/*
 * Created on Nov 9, 2004
 * Copyright Chris Poultney 2004.
 * Updated by Dennis McDaid 2016.
 *
 * Encapsulates information about a gene, the basic unit
 * of all Virtual Plant operations.
 * @author crispy
 * @modifier Rajah_Bimmy
 */

 /**
  * Constructs a new gene.
  * @param name the gene name
  * @param desc the gene description
  */
function Gene(name, desc){
  /** Gene PUB name */
  this.name = name;
  /** Gene description */
  this.desc = desc;
  /** Gene expression values */
  var exp = null;
}

Gene.prototype = {
  constructor: Gene,

  getName:function(){
    return name;
  },
  getDesc:function(){
    return desc;
  },
  /**
   * Sets the expression values for this gene.
   * @param e the expression values
   */
  setExp:function(e){
    for(var i = 0; i < e.length; i++){
      exp[i] = e[i];
    }
  },
  /**
   * Gets the expression values for this gene.
   * @return the expression values
   */
  getExp:function(){
    return exp;
  },
  compare:function(g){
    var str1 = name.toLowerCase();
    var str2 = g.name.toLowerCase();
    return str1.localeCompare(str2);
  },
  toString:function(){
    return name;
  }
}