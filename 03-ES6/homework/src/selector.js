var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  let sons = startEl.children;
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  if(sons.length>0){
    for (let i = 0; i < sons.length; i++) {
      let son = sons[i];
      let arr = traverseDomAndCollectElements(matchFunc, son);
      resultSet = [...resultSet, ...arr];
    }
    /* sons.forEach(element => {
      let arr = traverseDomAndCollectElements(matchFunc, element);
      resultSet = [...resultSet, ...arr];
    }); */
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  let st;
  if(selector[0]=='#'){
    st='id';
  }else if(selector[0]=='.'){
    st='class';
  }else if(selector.includes('.')){
    st='tag.class';
  }else{
    st='tag';
  }
  return st;
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(element){
      return element.id == selector.slice(1);
    }
  } else if (selectorType === "class") {
    matchFunction = function(element){
      let str = element.classList;
      let value = false;
      str.forEach(el => {
        if(el==selector.slice(1)) value = true;
      });
      return value;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(element){
      let tag = selector.split('.');
      let str = element.classList;
      let value = false;
      str.forEach(el => {
        if(el==tag[1]) value = true;
      });
      return value && (tag[0]==element.tagName.toLowerCase());
    }
  } else if (selectorType === "tag") {
    matchFunction = function(element){
      return selector == element.tagName.toLowerCase();
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
