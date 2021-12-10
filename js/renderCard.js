const listCard = document.querySelector('.other-films__list');

const renderCard = async (data) => {
    listCard.textContent = '';

    const cards = data.map(({ vote_average, poster_path, title, name }) => {
        const card = document.createElement('li');
        card.className = 'other-films__items';
    
        const link = document.createElement('a');
        link.className = 'other-films__link';
        link.dataset.rating = vote_average;
    
        const img = document.createElement('img');
        img.className = 'other-films__img';
        img.alt = `постер ${title || name}`;
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`;
    
        link.append(img);
        card.append(link);

        return card;
    });

    listCard.append(...cards);
};


export default renderCard;