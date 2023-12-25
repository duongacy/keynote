function flattenArray(obj) {
  return obj.map((e) => flatten(e));
}

function flattenData(obj) {
  return flatten(obj.data);
}

function flattenAttrs(obj) {
  let attrs = {};
  for (let key in obj.attributes) {
    attrs[key] = flatten(obj.attributes[key]);
  }
  return {
    id: obj.id,
    ...attrs,
  };
}

export function flatten(obj) {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return flattenArray(obj);
  }
  if (obj.data) {
    return flattenData(obj);
  }
  if (obj.attributes) {
    return flattenAttrs(obj);
  }
  return obj;
}

export function flattenArrayObject(arr) {
  return arr.map((item) => {
    for (const key in item) {
      item[key] = flatten(item[key]);
    }
    return item;
  });
}
