/**
 * Logo
 */
videojs.plugin('logo', function() {
    // Create variables and new div, anchor and image for company logo
    var myPlayer = this,
        title,
        newElement = document.createElement('div'),
        newImage = document.createElement('img');

    // Assign id and classes to div for logo
    newElement.classList.add('vjs-logo');
    newElement.style.float = 'left';

    // Assign properties to elements and assign to parents
    newImage.setAttribute('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACh0lEQVRYCdVYy24UMRCsJiCRIOAESIggEK8LX8ONH+CQMwd+gz/gygV+J4E8pChw4IIiJARIpFBH66Vn1j1Ts0xmg6WVPba7XS5313gH+J8KybdcXXld4+pCq/NJ63nKx+3aYnOAJA3Ao9qkifp2auvMAQLYBLBRmzRRXzeDAB5PBKS2zDcz+1wbiAyuMv4+1MB533kBWD3e8wSwmiBtgKuMwZRBl5bTQvJZ68jL0BsAV8pDUh8AeAngN4CTWe3t8qv1xbkHZvY98Z13k7wqvlje517+beRij7l67LvFD0nX0pvluaM+NrOvHeP9QySfiwy+KN5Ibok2r4pNVx1lpjZvMIMDBD/VvghkLIAfg1P1fZ5KS/DVEOrYX9oKgz8AHBUDkUHP6r1gkzb7GFTY2DMz+gokLwG4l672d+DQzHxjvSUFSNIz8XqvB2CewQDuA+hTBncpxZ9PTAGKR+U+YvwpIeE2UvyNBTAyqISErzspgxGgyuAoAFU2ljniUQAqbPxsSYyyKc/eQz9npVSTZPYH6qHgwCXGNc0lZh3AHcFmt9gIc9MsvgvgsuAgxp9vaH5967CVj9d9VBk8Y4kZBaASS77ByKASs24ja+AYDEaA6qYGMZi9llQ2lpGYpyRvOztJOTGzd2WsGtQknZkHZVJSu8RslIwk+QXAjWTukO4jM/OvHKdlIUkG3Ej2Azi/VIwBzkE1rmELAGfMrc020FXF+FNDostfGdsvDa9rANVgj/Gn2sS1s3YvgyobK2NQBRgZVG0y1mJ/7xGri0UGz+yIF2SG5CcAXTrlu/0FYD1k8TGAa5GGJdv+nbDhp5EkJP0bTB84XztKzK2RwLnfRoIsuclpzf4A6UyQKIuzXKcAAAAASUVORK5CYII=');
    newImage.style.display = 'block';
    newElement.appendChild(newImage);

    title = document.querySelector('#' + myPlayer.id_ + ' .vjs-dock-text');
    if (title != null) {
        title.insertBefore(newElement, title.firstElementChild);
    }
});

