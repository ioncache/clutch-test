'use strict';

(function(_) {
  const carDataPromise = fetch('/cars')
    .then(res => {
      // wait until we have the car data loaded before setting up any event
      // handlers or adding car elements to the dom
      return res.json().then(data => {
        let currentFilter = 'All';

        // TODO: setup price filter -- remember to debounce

        // setup make filters
        const filterContainer = document.querySelector('.make-filters');

        // delegated event handler for clicking on the filter container to
        // handle clicking on individual filters
        filterContainer.addEventListener('click', (e) => {
          e.preventDefault();
          const el = e.target;
          if (el.classList.contains('make-button')) {
            if (el.value !== currentFilter) {
              currentFilter = el.value;

              // add a selected class to currently selected filter
              document.querySelectorAll('.make-button').forEach(e => e.classList.remove('selected'));
              el.classList.add('selected');

              if (currentFilter !== 'All') {
               drawCars(data.cars.filter(i => i.make === currentFilter));
              } else {
                drawCars(data.cars);
              }
            }
          }
        });

        // TODO: add delegated event listener on the .car-items element
        //       to handle clicking on individual cars

        // draw cars
        // TODO: make infinite scroll
        // TODO: also do not just redraw all elements when the filter changes
        function drawCars(cars) {
          const carContainer = document.querySelector('.car-items');

          // clear out all current cars
          carContainer.innerHTML = '';

          // draw new cars
          for (const car of cars) {
            const carEl = document.createElement('div');
            carEl.classList.add('car');

            const carPic = document.createElement('div');
            carPic.classList.add('car-pic');

            carPic.setAttribute('style', `background-image: url('${car.photos[0].sizes.base.url}')`);

            const carDetails = document.createElement('div');
            carDetails.classList.add('car-details');
            // TODO: style this
            carDetails.innerHTML = `
              <div>${car.make} ${car.model}</div>
              <div>${car.mileage} miles</div>
              <div>$${car.price}</div>
            `;

            carEl.appendChild(carPic);
            carEl.appendChild(carDetails);
            carContainer.appendChild(carEl);
          }
        }

        drawCars(data.cars);
      });
    });
})(window._);
