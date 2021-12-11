import { getVideo } from "./services.js";

const listCard = document.querySelector('.other-films__list');

const renderCard = async (data) => {
    listCard.textContent = '';

    Promise.all(data.map( async ({ id, media_type, vote_average, poster_path, title, name }) => {

        const video = await getVideo(id, media_type);
        const key = video.results[0]?.key;
        const card = document.createElement('li');
        card.className = 'other-films__items';
    
        const link = document.createElement('a');
        if (key) link.href = `https://youtu.be/${key}`;
        link.className = 'other-films__link';
        link.dataset.rating = vote_average;
    
        const img = document.createElement('img');
        img.className = 'other-films__img';
        img.alt = `постер ${title || name}`;
        if (!poster_path) {
            card = '';
        }
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`;
    
        link.append(img);
        card.append(link);

        return card;
    })).then(cards => listCard.append(...cards));
};


export default renderCard;