import PropTypes from 'prop-types';

export const GifGridItem = ({title, url, id}) => {

  return (
    
    <div className="card">
        <img className="card-img-top" src={url} alt={title} />
        <div class="card-body">
              <p class="card-text">{title}</p>
            </div>
    </div>
  )
}


        {/* <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div> */}

GifGridItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}