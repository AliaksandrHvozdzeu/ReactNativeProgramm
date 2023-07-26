export const getIncludedImageById = (id: string, included: any[]) => {
  for (let i = 0; i < included.length; i++) {
    if (included[i].id === id) {
      return `https://demo.spreecommerce.org/${included[i].attributes.original_url}`;
    }
  }
};

export const buildImageArray = (images: any[], included: any[]) => {
  let imageArray = [];
  for (let i = 0; i < images.length; i++) {
    let img = getIncludedImageById(images[i].id, included);
    imageArray.push(img);
  }
  return imageArray;
};

export const getImageById = (id: string) => {
  return [
    {
      id: 0,
      imageId: id,
      imgUrl: 'https://picsum.photos/id/' + id + '/200/300',
    },
    {
      id: 1,
      imageId: id + 1,
      imgUrl: 'https://picsum.photos/id/' + id + '/200/300',
    },
    {
      id: 2,
      imageId: id + 2,
      imgUrl: 'https://picsum.photos/id/' + id + '/200/300',
    },
    {
      id: 3,
      imageId: id + 3,
      imgUrl: 'https://picsum.photos/id/' + id + '/200/300',
    },
  ];
};
