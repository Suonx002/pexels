const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const gallery = document.querySelector('.gallery-collection');

searchBtn.addEventListener('click', () => {
  const api_key = '563492ad6f917000010000016b74f2ff53db40788764add50f5f309c';

  if (searchInput.value === '') {
    alert('Please fill out the search input');
  } else {
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
        if (data.length === 0) {
          alert(
            'Search is not in our database. Please try a different search!'
          );
        } else {
          //clear html
          gallery.innerHTML = '';
          
          let output = '';
          data.forEach(photo => {
            output += `
            <div class="gallery-item">
              <img
                src="${photo.src.large}"
              />
              <p><strong>Photographer: </strong> ${photo.photographer}</p>
              <a href="${photo.photographer_url}" target="_blank" class="learn-more">View More By ${photo.photographer}</a>
           </div>
            `;
          });
          gallery.insertAdjacentHTML('beforeend', output);
        }
      })
      .catch(err => {
        alert(err);
      });
  }
});
