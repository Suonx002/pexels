// 563492ad6f917000010000016b74f2ff53db40788764add50f5f309c
// const weatherBtn = document.querySelector('.w-btn');
// const api_key = '563492ad6f917000010000016b74f2ff53db40788764add50f5f309c';
// weatherBtn.addEventListener('click', () => {
//   fetch('http://api.pexels.com/v1/search?query=ocean&per_page=15&page=1', {
//     headers: {
//       Authorization: `${api_key}`
//     }
//   })
//     .then(res => res.json())
//     .then(data => console.log(data));
// });

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const gallery = document.querySelector('.gallery-collection');

searchBtn.addEventListener('click', () => {
  const api_key = '563492ad6f917000010000016b74f2ff53db40788764add50f5f309c';
  fetch(
    `http://api.pexels.com/v1/search?query=${searchInput.value}&per_page=16&page=1`,
    {
      headers: {
        Authorization: `${api_key}`
      }
    }
  )
    .then(res => res.json())
    .then(data => data.photos)
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(photo => {
        output += `
        <div class="gallery-item">
          <img
            src="${photo.src.medium}"
          />
          <p><strong>Photographer: </strong> ${photo.photographer}</p>
          <a href="${photo.photographer_url}" target="_blank" class="learn-more">View More By ${photo.photographer}</a>
       </div>
        `;
      });
      gallery.insertAdjacentHTML('beforeend', output);
    })
    .catch(err => {
      console.log(err);
    });
});
