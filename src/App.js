import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating})
{
  console.log({name});
  return (
      <div>
        <h2> I like {name}</h2>
        <img src={picture} alt={name}/>
        <h2> Score : {rating}/5.0 </h2>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

const foodILike = [
  {
    id:0,
    name:'kimchi',
    picture:'https://www.koreanbapsang.com/wp-content/uploads/2013/10/DSC_1897-e1425613488615.jpg',
    rating:4.9
  },
  {
    id:1,
    name:'라면',
    picture:'https://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg',
    rating:4.4
  },
  {
    id:2,
    name:'비빔밥',
    picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg',
    rating:4.1
  },
  {
    id:3,
    name:'곰탕',
    picture:'https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/0a82a8054847196f44ce87700d51904b.jpg',
    rating:''
  },
];

function App() {
  return <div>
    <h1>Hello!</h1>
    {foodILike.map( function(data)
      {
        return <Food key={data.id} name={data.name} picture={data.picture} rating={data.rating}/>
      })
    }
    </div>    
}

export default App;
