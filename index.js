const h = (tagName, attributes, children = []) => {
  const el = document.createElement(tagName);

  for (let key in attributes) {
    el[key] = attributes[key];
  }

  children.forEach((c) => {
    if (c instanceof HTMLElement) {
      el.appendChild(c);
    } else if (typeof c === 'string') {
      el.appendChild(new Text(c));
    }
  });

  return el;
};
