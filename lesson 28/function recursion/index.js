const favorites = ['id-6', 'id-17'];

const tree = {
  id: 'id-1',
  name: 'products',
  nodes: [
    {
      id: 'id-2',
      name: 'food',
      nodes: [
        {
        id: 'id-6',
        name: 'drinks',
        nodes: [],
        },
      ]
    },
    {
      id: 'id-17',
      name: 'vehicles',
      nodes: [],
    }
  ]
}





const markFavorites = (treeObj, favoritesArr) => {
  const isFavorite = favoritesArr.includes(treeObj.id);

  return {
    ...treeObj,
    isFavorite,
    nodes: treeObj.nodes.map(childNode => markFavorites(childNode, favoritesArr)),
  }
}

const result = markFavorites(tree, favorites);

console.log(result);