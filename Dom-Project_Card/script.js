let container = document.querySelector('.container');

function createCard(title,cname,views,monthsOld,duration,image){
    if(title,cname,views,monthsOld,duration,image){
        const title = document.createElement('p');
        const cname = document.createElement('p');
        const views = document.createElement('p');
        const monthsOld = document.createElement('p');
        const duration = document.createElement('p');
        const image = document.createElement('img');

        title.innerHTML = `${title}`;
        cname.innerHTML = `${cname}`;
        views.innerHTML = `${views}`;
        monthsOld.innerHTML = `${monthsOld}`;
        duration.innerHTML = `${duration}`;
        image.innerHTML = `${image}`;

        document.querySelector('.container').appendChild(title);
        document.querySelector('.container').appendChild(cname);
        document.querySelector('.container').appendChild(views);
        document.querySelector('.container').appendChild(monthsOld);
        document.querySelector('.container').appendChild(duration);
        document.querySelector('.container').appendChild(image);
    }else{
        console.log('something went wrong')
    }
}


createCard('JavaScript Exercise 12 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #72','CodeWithJavaScript',200,'2Months','1-Month')