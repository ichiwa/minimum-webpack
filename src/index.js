import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  _.map([1, 2, 3], (val) => console.log(val))
  return element;
}

document.body.appendChild(component());
