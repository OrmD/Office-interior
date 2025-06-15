import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const wrapperSlides = document.querySelector('.swiper-wrapper');

async function getJSONimg() {
	try {
		const res = await fetch("../json/client.json")
		const data = await res.json()

		for (let i = 0; i < data.length; i++) {
			const sliderData = data[i]

			const newSliderDiv = document.createElement('div');
			newSliderDiv.classList.add('swiper-slide');
			newSliderDiv.innerHTML = `
			<img src='${sliderData.img}' alt='${sliderData.alt}' />
	
	`;
			wrapperSlides.append(newSliderDiv);
		}

		const swiper = new Swiper('.swiper', {
			// Optional parameters
			direction: 'horizontal',
			loop: data.length >= 7,

			slidesPerView: 3,
			spaceBetween: 30,
			speed: 5000, // чим більше — тим повільніше, але плавніше
			allowTouchMove: false, // блокує вручну
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
			freeMode: false,
			freeModeMomentum: false,
			breakpoints: {
				375: {

					spaceBetween: 50,
				},
				540: {
					slidesPerView: 4,
					spaceBetween: 50,
				},
				600: {
					slidesPerView: 5,
					spaceBetween: 60,
				},

				768: {
					spaceBetween: 70,
					slidesPerView: 6,
				},
				1024: {
					slidesPerView: 7,
					spaceBetween: 90,
				}
			}
		});
	} catch (error) {
		console.error(error);
	}
}
getJSONimg()







