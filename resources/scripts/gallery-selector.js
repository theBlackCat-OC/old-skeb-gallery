const tagContainer = document.getElementById('tagContainer');
const galleriesContainer = document.getElementById('galleries');
const urlParams = new URLSearchParams(window.location.search);
const selectedGallery = urlParams.get('gallery');

const tags = [
  { name: '完全な服装', backgroundColor: '#2ac955' },// Glamour Plates     
  { name: '頭服', backgroundColor: '#f5a92f' },     // Headpieces
  { name: '宝石', backgroundColor: '#f75a2a' },     // 宝石
  { name: '胸当て', backgroundColor: '#ff392b' },   // Chest pieces   
  { name: '手袋', backgroundColor: '#b62af7' },     // Handwear 
  { name: '脚衣', backgroundColor: '#f57dad' },     // Legwear
  { name: '履物', backgroundColor: '#2a83f7' },     // Footwear 
];
const galleries = [
  {
    name: '服装第一',
    url_id: 'attire-one',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1EughyXwEkcQj6OpSDBYfuPIkowJlv_Zf?usp=drive_link" target="_blank"><img src="resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',
    images: [
      { src: 'gallery/attires/glamourplates/attire-one/0.gif', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/1.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/2.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/3.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/4.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/5.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/6.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/7.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/8.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/9.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/10.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/11.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/12.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/13.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/14.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-one/15.png', tags: '完全な服装' },
    ],
  },

  {
    name: '服装その2',
    url_id: 'attire-two',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1TlXUiVlmBmdRwt3ypOFtJZ_NPuCd3Awh?usp=sharing" target="_blank"><img src="resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'gallery/attires/glamourplates/attire-two/1.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-two/2.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-two/3.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-two/4.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-two/5.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-two/6.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-two/7.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-two/8.png', tags: '完全な服装' },

    ],
  },

  {
    name: '服装その3',
    url_id: 'attire-three',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/19JVWBzmuPQfyh74R8H_alH2i02eisdvp?usp=drive_link" target="_blank"><img src="resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'gallery/attires/glamourplates/attire-three/1.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-three/2.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-three/3.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-three/4.png', tags: '完全な服装' },
      { src: 'gallery/attires/glamourplates/attire-three/5.png', tags: '完全な服装' },
    ],
  },

  
  {
    name: 'ミニスカート',
    url_id: 'miniskirt',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1t_Kd3CbZvpK-bivvgna-G9AhxI258eAc?usp=drive_link" target="_blank"><img src="resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'gallery/attires/accessories/miniskirt/1.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/2.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/3.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/4.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/5.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/6.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/7.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/8.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/9.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/10.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/11.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/12.png', tags: '脚衣' },
      { src: 'gallery/attires/accessories/miniskirt/13.png', tags: '脚衣' },
    ],
  },

  {
    name: 'ハンドラッピング',
    url_id: 'handwraps',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1TlXUiVlmBmdRwt3ypOFtJZ_NPuCd3Awh?usp=sharing" target="_blank"><img src="resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'gallery/attires/accessories/handwraps/1.png', tags: '手袋' },
      { src: 'gallery/attires/accessories/handwraps/2.png', tags: '手袋' },

    ],
  },

  {
    name: 'ウィング・イヤースタッド',
    url_id: 'wing-earring',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1TlXUiVlmBmdRwt3ypOFtJZ_NPuCd3Awh?usp=sharing" target="_blank"><img src="resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'gallery/jewelry/1.png', tags: '宝石' },
      { src: 'gallery/jewelry/2.png', tags: '宝石' },
      { src: 'gallery/jewelry/3.png', tags: '宝石' },
      { src: 'gallery/jewelry/4.png', tags: '宝石' },

    ],
  },

  {
    name: '金色の爪',
    url_id: 'gilded-claws',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1OQTOMoxJked2Kfo1hWsFdT86txuKImnd?usp=drive_link" target="_blank"><img src="resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'gallery/attires/accessories/gilded-claws/2.png', tags: '宝石' },
      { src: 'gallery/attires/accessories/gilded-claws/3.png', tags: '宝石' },
      { src: 'gallery/attires/accessories/gilded-claws/4.png', tags: '宝石' },

    ],
  },

  {
    name: '金色の爪 2',
    url_id: 'golden-nails',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1pAOy5toBXO4Ph9C_LqQ81OHcqyB8RFZ0?usp=drive_link" target="_blank"><img src="resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'gallery/attires/accessories/golden-nails/1.png', tags: '宝石' },
      { src: 'gallery/attires/accessories/golden-nails/2.png', tags: '宝石' },


    ],
  },

  {
    name: 'マーブルブレスレット',
    url_id: 'marble-bracelet',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1pAOy5toBXO4Ph9C_LqQ81OHcqyB8RFZ0?usp=drive_link" target="_blank"><img src="resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'gallery/attires/accessories/marble-bracelet/1.png', tags: '宝石' },

    ],
  },

  {
    name: '仰向けに寝ると、胸がベッドの方にこぼれる',
    url_id: 'spilling-breasts',
    download_icon: '&nbsp',  
    images: [
      { src: 'gallery/hidden/reference-poses/spilling-breasts/1.jpg'},
      { src: 'gallery/hidden/reference-poses/spilling-breasts/2.jpg'},
    ],
  },

  {
    name: 'アナルを差し出すポーズ',
    url_id: 'anus-offering',
    download_icon: '&nbsp',  
    images: [
      { src: 'gallery/hidden/reference-poses/anus-offering/1.png'},
    ],
  },

];

function createGallery(gallery) {
  const galleryElement = document.createElement('div');
  galleryElement.classList.add('gallery');
  galleryElement.dataset.tags = gallery.images.reduce((tags, image) => `${tags} ${image.tags}`, '');


  const titleElement = document.createElement('div');
  titleElement.classList.add('gallery-title');

  // Create the download icon element and add the download_icon HTML
  const downloadIconElement = document.createElement('div');
  downloadIconElement.classList.add('download-icon');
  downloadIconElement.innerHTML = gallery.download_icon;

  // Add the download icon and gallery name to the title element
  titleElement.appendChild(downloadIconElement);
  const nameElement = document.createElement('span'); // Use a <span> instead of <div> for the name
  nameElement.innerHTML = gallery.name;
  titleElement.appendChild(nameElement);

  // Append the title element to the gallery element
  galleryElement.appendChild(titleElement);

  // ... Rest of the function remains the same ...
  const largeImageContainer = document.createElement('div');
  largeImageContainer.classList.add('large-image-container');
  const largeImage = document.createElement('img');
  largeImage.src = gallery.images[0].src;
  largeImageContainer.appendChild(largeImage);

  const thumbnailsContainer = document.createElement('div');
  thumbnailsContainer.classList.add('thumbnails-container');

  gallery.images.forEach((image) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.classList.add('thumbnail'); // Add a class for thumbnail images
    thumbnail.addEventListener('click', () => {
      largeImage.src = image.src;
    });
    thumbnailsContainer.appendChild(thumbnail);
  });

  galleryElement.appendChild(largeImageContainer);
  galleryElement.appendChild(thumbnailsContainer);

  // Check if the current gallery's url_id matches the selectedGallery from the URL
  if (gallery.url_id === selectedGallery) {
    galleryElement.classList.add('selected-gallery');
  }

  return galleryElement;
}


function addTagToContainer(tag) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', 'tag-' + tag.name.toLowerCase());
  tagElement.innerText = tag.name;
  tagElement.style.backgroundColor = tag.backgroundColor;

  tagElement.addEventListener('click', function () {
    // Toggle the clicked tag's selection status.
    tagElement.classList.toggle('tag-selected');

    // Update the galleries based on the selected tags.
    updateGalleries();
  });

  tagContainer.appendChild(tagElement);
}

function updateGalleries() {
  const selectedTags = Array.from(tagContainer.getElementsByClassName('tag-selected')).map(tag => tag.innerText.toLowerCase());
  const allGalleries = galleriesContainer.getElementsByClassName('gallery');

  if (selectedTags.length === 0) {
    // If no tags are selected, hide all galleries
    for (const gallery of allGalleries) {
      gallery.style.display = 'none';
    }
  } else {
    // If tags are selected, show galleries with matching tags
    for (const gallery of allGalleries) {
      const galleryTags = gallery.dataset.tags.toLowerCase().split(' ');
      const displayGallery = selectedTags.some(tag => galleryTags.includes(tag));
      gallery.style.display = displayGallery ? 'block' : 'none';
    }
  }
}

function addGalleryToContainer(gallery) {
  const galleryElement = createGallery(gallery);

  // Check if any galleries are currently displayed in the container
  if (galleriesContainer.firstChild) {
    // Get the first gallery element currently in the container
    const firstGallery = galleriesContainer.firstChild;
    
    // Insert the new gallery element before the first gallery
    galleriesContainer.insertBefore(galleryElement, firstGallery);
  } else {
    // If no galleries are displayed, simply append the new gallery to the container
    galleriesContainer.appendChild(galleryElement);
  }
}


tags.forEach(tag => addTagToContainer(tag));
galleries.forEach(gallery => addGalleryToContainer(gallery));

document.addEventListener('click', (event) => {
  const zoomedGallery = galleriesContainer.querySelector('.gallery.zoomed');
  if (zoomedGallery && !zoomedGallery.contains(event.target)) {
    // If a zoomed gallery exists and the click is outside of it, revert the zoom
    if (zoomedImage) {
      zoomedImage.classList.remove('zoomed');
      zoomedImage = null;
    }
  }
});

function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function showGalleryByName(galleryName) {
  const galleryId = galleryName.toLowerCase().replace(/\s/g, '-');
  const galleryElement = document.getElementById(galleryId);
  if (galleryElement) {
    galleryElement.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const allGalleries = galleriesContainer.getElementsByClassName('gallery');

  for (const gallery of allGalleries) {
    if (gallery.classList.contains('selected-gallery')) {
      gallery.style.display = 'block';
    } else {
      gallery.style.display = 'none';
    }
  }
});